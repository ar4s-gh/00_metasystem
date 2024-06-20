/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumCommitChoice } from "./EnumCommitChoice";
import { IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { MetricCreateNestedManyWithoutCommitsInput } from "./MetricCreateNestedManyWithoutCommitsInput";
import { Type } from "class-transformer";

@InputType()
class CommitCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumCommitChoice,
  })
  @IsEnum(EnumCommitChoice)
  @IsOptional()
  @Field(() => EnumCommitChoice, {
    nullable: true,
  })
  choice?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  developerCode?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  diff?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  generatedCode?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  message?: string | null;

  @ApiProperty({
    required: false,
    type: () => MetricCreateNestedManyWithoutCommitsInput,
  })
  @ValidateNested()
  @Type(() => MetricCreateNestedManyWithoutCommitsInput)
  @IsOptional()
  @Field(() => MetricCreateNestedManyWithoutCommitsInput, {
    nullable: true,
  })
  metrics?: MetricCreateNestedManyWithoutCommitsInput;
}

export { CommitCreateInput as CommitCreateInput };
