import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({
        type: String,
        description: 'First Name'
    })
    firstName: string;


    @ApiProperty({
        type: String,
        description: 'Last Name'
    })
    lastName: string;


    @ApiProperty({
        type: Number,
        description: 'Age'
    })
    age: number;


    @ApiProperty({
        type: String,
        description: 'Phone Number'
    })
    phoneNumber: string
}
