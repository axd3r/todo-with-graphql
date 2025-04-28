import { PartialType } from "@nestjs/mapped-types";
import { CreateTodoInputDTO } from "./create.todo.dto";
import { Field, InputType, Int } from "@nestjs/graphql";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from "class-validator";

@InputType()
export class UpdateTodoInputDTO extends PartialType(CreateTodoInputDTO){

    @Field(() => Int)
    @IsInt()
    @Min(1)
    id: number

    @Field( () => String, {nullable: true})
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @MaxLength(25)
    description?: string;

    @Field(() => Boolean, {nullable: true})
    @IsBoolean()
    @IsOptional()
    done?: boolean;
}