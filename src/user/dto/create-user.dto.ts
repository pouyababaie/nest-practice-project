import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        type: String,
        description: 'email',
    })
    email: string;

    @ApiProperty({
        type: String,
        description: 'Mobile',
    })
    mobile: string;

    @ApiProperty({
        type: Number,
        description: 'Weight',
    })
    weight: number;

    @ApiProperty({
        type: Number,
        description: 'Height',
    })
    height: number;

    @ApiProperty({
        type: Number,
        description: 'Bmi',
    })
    bmi: number;

    @ApiProperty({
        type: String,
        description: 'Result',
    })
    bmiResult: string;

    @ApiProperty({
        type: String,
        description: 'Gender',
    })
    gender: string;

    @ApiProperty({
        type: String,
        description: 'requireTrainer',
    })
    requireTrainer: string;

    @ApiProperty({
        type: String,
        description: 'package',
    })
    package: string;

    //   @ApiProperty({
    //     type: Array<String>,
    //     description: 'important',
    //   })
    //   important: string[];

    @ApiProperty({
        type: Boolean,
        description: 'haveGymBefore',
    })
    haveGymBefore: boolean;

    @ApiProperty({
        type: String,
        description: 'enquireDate',
    })
    enquireDate: string;

    @ApiProperty({
        type: String,
        description: 'First Name',
    })
    firstName: string;

    @ApiProperty({
        type: String,
        description: 'Last Name',
    })
    lastName: string;

    @ApiProperty({
        type: Number,
        description: 'Age',
    })
    age: number;

}
