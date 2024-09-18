# `libraryPluginframework` Submodule <a name="`libraryPluginframework` Submodule" id="@cdktf/provider-databricks.libraryPluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LibraryPluginframework <a name="LibraryPluginframework" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework databricks_library_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer"></a>

```typescript
import { libraryPluginframework } from '@cdktf/provider-databricks'

new libraryPluginframework.LibraryPluginframework(scope: Construct, id: string, config: LibraryPluginframeworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig">LibraryPluginframeworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig">LibraryPluginframeworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran">putCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven">putMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi">putPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetCran">resetCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetEgg">resetEgg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetJar">resetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetMaven">resetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetPypi">resetPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetRequirements">resetRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetWhl">resetWhl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCran` <a name="putCran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran"></a>

```typescript
public putCran(value: LibraryPluginframeworkCran): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>

---

##### `putMaven` <a name="putMaven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven"></a>

```typescript
public putMaven(value: LibraryPluginframeworkMaven): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>

---

##### `putPypi` <a name="putPypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi"></a>

```typescript
public putPypi(value: LibraryPluginframeworkPypi): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>

---

##### `resetCran` <a name="resetCran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetCran"></a>

```typescript
public resetCran(): void
```

##### `resetEgg` <a name="resetEgg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetEgg"></a>

```typescript
public resetEgg(): void
```

##### `resetJar` <a name="resetJar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetJar"></a>

```typescript
public resetJar(): void
```

##### `resetMaven` <a name="resetMaven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetMaven"></a>

```typescript
public resetMaven(): void
```

##### `resetPypi` <a name="resetPypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetPypi"></a>

```typescript
public resetPypi(): void
```

##### `resetRequirements` <a name="resetRequirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetRequirements"></a>

```typescript
public resetRequirements(): void
```

##### `resetWhl` <a name="resetWhl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetWhl"></a>

```typescript
public resetWhl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LibraryPluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct"></a>

```typescript
import { libraryPluginframework } from '@cdktf/provider-databricks'

libraryPluginframework.LibraryPluginframework.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement"></a>

```typescript
import { libraryPluginframework } from '@cdktf/provider-databricks'

libraryPluginframework.LibraryPluginframework.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource"></a>

```typescript
import { libraryPluginframework } from '@cdktf/provider-databricks'

libraryPluginframework.LibraryPluginframework.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport"></a>

```typescript
import { libraryPluginframework } from '@cdktf/provider-databricks'

libraryPluginframework.LibraryPluginframework.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LibraryPluginframework resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LibraryPluginframework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LibraryPluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LibraryPluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference">LibraryPluginframeworkCranOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference">LibraryPluginframeworkMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference">LibraryPluginframeworkPypiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cranInput">cranInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.eggInput">eggInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jarInput">jarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.mavenInput">mavenInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypiInput">pypiInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirementsInput">requirementsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whlInput">whlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.egg">egg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jar">jar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirements">requirements</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whl">whl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cran`<sup>Required</sup> <a name="cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cran"></a>

```typescript
public readonly cran: LibraryPluginframeworkCranOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference">LibraryPluginframeworkCranOutputReference</a>

---

##### `maven`<sup>Required</sup> <a name="maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.maven"></a>

```typescript
public readonly maven: LibraryPluginframeworkMavenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference">LibraryPluginframeworkMavenOutputReference</a>

---

##### `pypi`<sup>Required</sup> <a name="pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypi"></a>

```typescript
public readonly pypi: LibraryPluginframeworkPypiOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference">LibraryPluginframeworkPypiOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `cranInput`<sup>Optional</sup> <a name="cranInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cranInput"></a>

```typescript
public readonly cranInput: IResolvable | LibraryPluginframeworkCran;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>

---

##### `eggInput`<sup>Optional</sup> <a name="eggInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.eggInput"></a>

```typescript
public readonly eggInput: string;
```

- *Type:* string

---

##### `jarInput`<sup>Optional</sup> <a name="jarInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jarInput"></a>

```typescript
public readonly jarInput: string;
```

- *Type:* string

---

##### `mavenInput`<sup>Optional</sup> <a name="mavenInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.mavenInput"></a>

```typescript
public readonly mavenInput: IResolvable | LibraryPluginframeworkMaven;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>

---

##### `pypiInput`<sup>Optional</sup> <a name="pypiInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypiInput"></a>

```typescript
public readonly pypiInput: IResolvable | LibraryPluginframeworkPypi;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>

---

##### `requirementsInput`<sup>Optional</sup> <a name="requirementsInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirementsInput"></a>

```typescript
public readonly requirementsInput: string;
```

- *Type:* string

---

##### `whlInput`<sup>Optional</sup> <a name="whlInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whlInput"></a>

```typescript
public readonly whlInput: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `egg`<sup>Required</sup> <a name="egg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.egg"></a>

```typescript
public readonly egg: string;
```

- *Type:* string

---

##### `jar`<sup>Required</sup> <a name="jar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jar"></a>

```typescript
public readonly jar: string;
```

- *Type:* string

---

##### `requirements`<sup>Required</sup> <a name="requirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirements"></a>

```typescript
public readonly requirements: string;
```

- *Type:* string

---

##### `whl`<sup>Required</sup> <a name="whl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whl"></a>

```typescript
public readonly whl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LibraryPluginframeworkConfig <a name="LibraryPluginframeworkConfig" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.Initializer"></a>

```typescript
import { libraryPluginframework } from '@cdktf/provider-databricks'

const libraryPluginframeworkConfig: libraryPluginframework.LibraryPluginframeworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.clusterId">clusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.cran">cran</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#cran LibraryPluginframework#cran}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.egg">egg</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.jar">jar</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.maven">maven</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#maven LibraryPluginframework#maven}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.pypi">pypi</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#pypi LibraryPluginframework#pypi}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.requirements">requirements</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.whl">whl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}.

---

##### `cran`<sup>Optional</sup> <a name="cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.cran"></a>

```typescript
public readonly cran: LibraryPluginframeworkCran;
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#cran LibraryPluginframework#cran}.

---

##### `egg`<sup>Optional</sup> <a name="egg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.egg"></a>

```typescript
public readonly egg: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}.

---

##### `jar`<sup>Optional</sup> <a name="jar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.jar"></a>

```typescript
public readonly jar: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}.

---

##### `maven`<sup>Optional</sup> <a name="maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.maven"></a>

```typescript
public readonly maven: LibraryPluginframeworkMaven;
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#maven LibraryPluginframework#maven}.

---

##### `pypi`<sup>Optional</sup> <a name="pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.pypi"></a>

```typescript
public readonly pypi: LibraryPluginframeworkPypi;
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#pypi LibraryPluginframework#pypi}.

---

##### `requirements`<sup>Optional</sup> <a name="requirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.requirements"></a>

```typescript
public readonly requirements: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}.

---

##### `whl`<sup>Optional</sup> <a name="whl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.whl"></a>

```typescript
public readonly whl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}.

---

### LibraryPluginframeworkCran <a name="LibraryPluginframeworkCran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.Initializer"></a>

```typescript
import { libraryPluginframework } from '@cdktf/provider-databricks'

const libraryPluginframeworkCran: libraryPluginframework.LibraryPluginframeworkCran = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.package">package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.repo">repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

### LibraryPluginframeworkMaven <a name="LibraryPluginframeworkMaven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.Initializer"></a>

```typescript
import { libraryPluginframework } from '@cdktf/provider-databricks'

const libraryPluginframeworkMaven: libraryPluginframework.LibraryPluginframeworkMaven = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.coordinates">coordinates</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#coordinates LibraryPluginframework#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.exclusions">exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#exclusions LibraryPluginframework#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.repo">repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.coordinates"></a>

```typescript
public readonly coordinates: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#coordinates LibraryPluginframework#coordinates}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#exclusions LibraryPluginframework#exclusions}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

### LibraryPluginframeworkPypi <a name="LibraryPluginframeworkPypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.Initializer"></a>

```typescript
import { libraryPluginframework } from '@cdktf/provider-databricks'

const libraryPluginframeworkPypi: libraryPluginframework.LibraryPluginframeworkPypi = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.package">package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.repo">repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}.

---

##### `repo`<sup>Optional</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

## Classes <a name="Classes" id="Classes"></a>

### LibraryPluginframeworkCranOutputReference <a name="LibraryPluginframeworkCranOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer"></a>

```typescript
import { libraryPluginframework } from '@cdktf/provider-databricks'

new libraryPluginframework.LibraryPluginframeworkCranOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resetRepo"></a>

```typescript
public resetRepo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.packageInput">packageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repoInput">repoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.package">package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repo">repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.packageInput"></a>

```typescript
public readonly packageInput: string;
```

- *Type:* string

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repoInput"></a>

```typescript
public readonly repoInput: string;
```

- *Type:* string

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LibraryPluginframeworkCran;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran">LibraryPluginframeworkCran</a>

---


### LibraryPluginframeworkMavenOutputReference <a name="LibraryPluginframeworkMavenOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer"></a>

```typescript
import { libraryPluginframework } from '@cdktf/provider-databricks'

new libraryPluginframework.LibraryPluginframeworkMavenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetExclusions"></a>

```typescript
public resetExclusions(): void
```

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetRepo"></a>

```typescript
public resetRepo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinatesInput">coordinatesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repoInput">repoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinates">coordinates</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusions">exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repo">repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coordinatesInput`<sup>Optional</sup> <a name="coordinatesInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinatesInput"></a>

```typescript
public readonly coordinatesInput: string;
```

- *Type:* string

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusionsInput"></a>

```typescript
public readonly exclusionsInput: string[];
```

- *Type:* string[]

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repoInput"></a>

```typescript
public readonly repoInput: string;
```

- *Type:* string

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinates"></a>

```typescript
public readonly coordinates: string;
```

- *Type:* string

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LibraryPluginframeworkMaven;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven">LibraryPluginframeworkMaven</a>

---


### LibraryPluginframeworkPypiOutputReference <a name="LibraryPluginframeworkPypiOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer"></a>

```typescript
import { libraryPluginframework } from '@cdktf/provider-databricks'

new libraryPluginframework.LibraryPluginframeworkPypiOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resetRepo">resetRepo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRepo` <a name="resetRepo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resetRepo"></a>

```typescript
public resetRepo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.packageInput">packageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repoInput">repoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.package">package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repo">repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `packageInput`<sup>Optional</sup> <a name="packageInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.packageInput"></a>

```typescript
public readonly packageInput: string;
```

- *Type:* string

---

##### `repoInput`<sup>Optional</sup> <a name="repoInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repoInput"></a>

```typescript
public readonly repoInput: string;
```

- *Type:* string

---

##### `package`<sup>Required</sup> <a name="package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.package"></a>

```typescript
public readonly package: string;
```

- *Type:* string

---

##### `repo`<sup>Required</sup> <a name="repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repo"></a>

```typescript
public readonly repo: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LibraryPluginframeworkPypi;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi">LibraryPluginframeworkPypi</a>

---



