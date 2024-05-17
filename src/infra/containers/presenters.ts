import { container } from 'tsyringe'
import { UserPresenter } from '@modules/users/presenters/User.presenter'
import { ProjectPresenter } from '@modules/projects/presenters/Project.presenter'
import { FoundationPresenter } from '@modules/foundations/presenters/Foundation.presenter'
import { PersonPresenter } from '@modules/persons/presenters/Person.presenter'
import { AffiliationPresenter } from '@modules/affiliations/presenters/Affiliation.presenter'
import { PersonWithParentsPresenter } from '@modules/persons/presenters/PersonWithParents.presenter'
import { AttributePreviewPresenter } from '@modules/persons/presenters/AttributesPreview.presenter'
import { ErrorPresenter } from '../requester/presenters/Error.presenter'
import { FilePresenter } from '@modules/files/presenters/File.presenter'

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Errors
container.registerSingleton(ErrorPresenter)

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Users
container.registerSingleton(UserPresenter)

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Projects
container.registerSingleton(ProjectPresenter)

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Foundations
container.registerSingleton(FoundationPresenter)

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Persons
container.registerSingleton(PersonPresenter)
container.registerSingleton(PersonWithParentsPresenter)
container.registerSingleton(AttributePreviewPresenter)

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Affiliations
container.registerSingleton(AffiliationPresenter)

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Files
container.registerSingleton(FilePresenter)

