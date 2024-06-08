import { AttributeMutation } from '@modules/persons/entities/AttributeMutation';
import { EventDate } from '@modules/timelines/valueObjects/EventDate';
import { RepositoryMapper } from '@shared/core/contracts/Repository';
import { UniqueId } from '@shared/core/valueObjects/UniqueId';
import { injectable } from 'tsyringe';

export interface AttributeMutationFile {
  id: string;
  file_id: string;
  attribute_id: string;
  event_id: string | null;
  position: number;
  created_at: Date;
  updated_at: Date | null;
}

type AttributeMutationWithDateFile = AttributeMutationFile & {
  date: string | null;
};

@injectable()
export class AttributeMutationsKnexMapper extends RepositoryMapper<
  AttributeMutation,
  AttributeMutationFile
> {
  toDomain(raw: AttributeMutationWithDateFile): AttributeMutation {
    return AttributeMutation.create(
      {
        fileId: UniqueId.create(raw.file_id),
        attributeId: UniqueId.create(raw.attribute_id),
        position: raw.position,
        eventId: raw.event_id ? UniqueId.create(raw.event_id) : null,
        date: raw.date ? EventDate.createFromString(raw.date) : null,
        createdAt: raw.created_at,
        updatedAt: raw.updated_at,
      },
      UniqueId.create(raw.id)
    );
  }

  toPersistence(entity: AttributeMutation): AttributeMutationFile {
    return {
      id: entity.id.toString(),
      file_id: entity.fileId.toString(),
      attribute_id: entity.attributeId.toString(),
      event_id: entity.eventId ? entity.eventId.toString() : null,
      position: entity.position,
      created_at: entity.createdAt,
      updated_at: entity.updatedAt,
    };
  }
}
