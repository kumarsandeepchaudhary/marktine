import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("applicationFormId_idx", ["applicationFormId"], {})
@Index("entityId_idx", ["entityId"], {})
@Entity("user_profile", { schema: "impactis_final" })
export class user_profile {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "applicationFormId", nullable: true })
  applicationFormId: number | null;

  @Column("int", { name: "formStepStatus", nullable: true })
  formStepStatus: number | null;

  @Column("int", { name: "entityId", nullable: true })
  entityId: number | null;

  @Column("datetime", { name: "createdOn", default: () => "CURRENT_TIMESTAMP" })
  createdOn: Date;

  @Column("datetime", {
    name: "modifiedOn",
    default: () => "CURRENT_TIMESTAMP",
  })
  modifiedOn: Date;

  @Column("int", { name: "createdBy", nullable: true })
  createdBy: number | null;

  @Column("int", { name: "modifiedBy", nullable: true })
  modifiedBy: number | null;
}
