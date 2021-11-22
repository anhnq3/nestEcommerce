import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateVoucherDto {
  @ApiProperty({
    example: 'Voucher name',
    format: 'string',
    minLength: 6,
    maxLength: 24,
  })
  @IsString()
  @IsOptional()
  readonly voucherName: string;

  @ApiProperty({
    example: 10,
    format: 'number',
    minLength: 6,
    maxLength: 24,
  })
  @IsNumber()
  @IsOptional()
  readonly voucherDiscount: number;

  @ApiProperty({
    example: '2021-11-19T08:20:17.597+08:00',
    format: 'Date',
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  readonly voucherStartDate: Date;

  @ApiProperty({
    example: '2021-11-20T08:20:17.597+08:00',
    required: true,
    format: 'Date',
  })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  readonly voucherEndDate: Date;

  @ApiProperty({
    example: 'inactive',
    required: true,
    format: 'string',
    minLength: 6,
    maxLength: 24,
  })
  @IsOptional()
  @IsString()
  readonly voucherStatus: string;

  @ApiProperty({
    example: '10',
    required: true,
    format: 'number',
  })
  @IsNumber()
  @IsOptional()
  readonly voucherQuantity: number;

  @ApiProperty({
    example: 'CODE',
    required: true,
    format: 'string',
    minLength: 6,
    maxLength: 24,
  })
  @IsString()
  @IsOptional()
  readonly voucherCode: string;
}
