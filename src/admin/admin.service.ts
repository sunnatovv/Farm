import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  async getTokens(admin: AdminDocument) {
    const payload = {
      id: admin._id,
      is_active: admin.is_active,
      is_owner: admin.is_creator,
    };
    const [accesToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_REFRESH_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_REFRESH_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token: accesToken,
      refresh_token: refreshToken,
    };
  }

  async create(createAdminDto: CreateAdminDto) {
    const { password, confirm_password } = createAdminDto;

    if (password !== confirm_password) {
      throw new BadRequestException("Passwords don't match");
    }

    const hashed_password = await bcrypt.hash(password, 7);

    const newAdmin = await this.adminModel.create({
      ...createAdminDto,
      hashed_password,
    });

    const tokens = await this.getTokens(newAdmin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedAdmin = await this.adminModel.findByIdAndUpdate(
      newAdmin._id,
      { hashed_refresh_token },
      { new: true },
    );
    return updatedAdmin;
  }

  findAll() {
    return this.adminModel.find();
  }

  findOne(id: string) {
    this.adminModel.findOne();
  }

  update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.adminModel.findByIdAndUpdate(id, updateAdminDto);
  }

  remove(id: string) {
    this.adminModel.deleteOne({ _id: id });
  }
}
