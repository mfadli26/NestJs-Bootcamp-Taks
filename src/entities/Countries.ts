import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Regions } from './Regions';

@Index('countries_pkey', ['countryId'], { unique: true })
@Entity('countries', { schema: 'public' })
export class Countries {
  @Column('character varying', { primary: true, name: 'country_id', length: 2 })
  countryId: string;

  @Column('character varying', {
    name: 'country_name',
    nullable: true,
    length: 24,
  })
  countryName: string | null;

  @ManyToOne(() => Regions, (regions) => regions.countries, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'region_id', referencedColumnName: 'regionId' }])
  region: Regions;
}
