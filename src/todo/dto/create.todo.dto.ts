import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

@InputType()
export class CreateTodoInputDTO {

    @Field( () => String, {description: 'What needs to be done'})
    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    description: string;

    @Field(() => Boolean, {nullable: true})
    @IsBoolean()
    @IsOptional()
    done?: boolean;
}