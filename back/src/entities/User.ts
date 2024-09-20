import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany,
} from "typeorm"
import Appointment from "./Appointment"
import Credential from "./Credential"

@Entity({
    name: "users"
})
 class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    birthdate: string

    @Column()
    nDni: string

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[];
}

export default User