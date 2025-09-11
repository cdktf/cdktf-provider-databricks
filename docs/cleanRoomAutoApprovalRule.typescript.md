# `cleanRoomAutoApprovalRule` Submodule <a name="`cleanRoomAutoApprovalRule` Submodule" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanRoomAutoApprovalRule <a name="CleanRoomAutoApprovalRule" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/clean_room_auto_approval_rule databricks_clean_room_auto_approval_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer"></a>

```typescript
import { cleanRoomAutoApprovalRule } from '@cdktf/provider-databricks'

new cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule(scope: Construct, id: string, config?: CleanRoomAutoApprovalRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig">CleanRoomAutoApprovalRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig">CleanRoomAutoApprovalRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetAuthorCollaboratorAlias">resetAuthorCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetAuthorScope">resetAuthorScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetCleanRoomName">resetCleanRoomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetRunnerCollaboratorAlias">resetRunnerCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAuthorCollaboratorAlias` <a name="resetAuthorCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetAuthorCollaboratorAlias"></a>

```typescript
public resetAuthorCollaboratorAlias(): void
```

##### `resetAuthorScope` <a name="resetAuthorScope" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetAuthorScope"></a>

```typescript
public resetAuthorScope(): void
```

##### `resetCleanRoomName` <a name="resetCleanRoomName" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetCleanRoomName"></a>

```typescript
public resetCleanRoomName(): void
```

##### `resetRunnerCollaboratorAlias` <a name="resetRunnerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetRunnerCollaboratorAlias"></a>

```typescript
public resetRunnerCollaboratorAlias(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CleanRoomAutoApprovalRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isConstruct"></a>

```typescript
import { cleanRoomAutoApprovalRule } from '@cdktf/provider-databricks'

cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformElement"></a>

```typescript
import { cleanRoomAutoApprovalRule } from '@cdktf/provider-databricks'

cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformResource"></a>

```typescript
import { cleanRoomAutoApprovalRule } from '@cdktf/provider-databricks'

cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.generateConfigForImport"></a>

```typescript
import { cleanRoomAutoApprovalRule } from '@cdktf/provider-databricks'

cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CleanRoomAutoApprovalRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanRoomAutoApprovalRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanRoomAutoApprovalRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/clean_room_auto_approval_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CleanRoomAutoApprovalRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.ruleOwnerCollaboratorAlias">ruleOwnerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorCollaboratorAliasInput">authorCollaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorScopeInput">authorScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.cleanRoomNameInput">cleanRoomNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.runnerCollaboratorAliasInput">runnerCollaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorCollaboratorAlias">authorCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorScope">authorScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.cleanRoomName">cleanRoomName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.runnerCollaboratorAlias">runnerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `ruleOwnerCollaboratorAlias`<sup>Required</sup> <a name="ruleOwnerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.ruleOwnerCollaboratorAlias"></a>

```typescript
public readonly ruleOwnerCollaboratorAlias: string;
```

- *Type:* string

---

##### `authorCollaboratorAliasInput`<sup>Optional</sup> <a name="authorCollaboratorAliasInput" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorCollaboratorAliasInput"></a>

```typescript
public readonly authorCollaboratorAliasInput: string;
```

- *Type:* string

---

##### `authorScopeInput`<sup>Optional</sup> <a name="authorScopeInput" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorScopeInput"></a>

```typescript
public readonly authorScopeInput: string;
```

- *Type:* string

---

##### `cleanRoomNameInput`<sup>Optional</sup> <a name="cleanRoomNameInput" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.cleanRoomNameInput"></a>

```typescript
public readonly cleanRoomNameInput: string;
```

- *Type:* string

---

##### `runnerCollaboratorAliasInput`<sup>Optional</sup> <a name="runnerCollaboratorAliasInput" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.runnerCollaboratorAliasInput"></a>

```typescript
public readonly runnerCollaboratorAliasInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `authorCollaboratorAlias`<sup>Required</sup> <a name="authorCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorCollaboratorAlias"></a>

```typescript
public readonly authorCollaboratorAlias: string;
```

- *Type:* string

---

##### `authorScope`<sup>Required</sup> <a name="authorScope" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorScope"></a>

```typescript
public readonly authorScope: string;
```

- *Type:* string

---

##### `cleanRoomName`<sup>Required</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.cleanRoomName"></a>

```typescript
public readonly cleanRoomName: string;
```

- *Type:* string

---

##### `runnerCollaboratorAlias`<sup>Required</sup> <a name="runnerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.runnerCollaboratorAlias"></a>

```typescript
public readonly runnerCollaboratorAlias: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanRoomAutoApprovalRuleConfig <a name="CleanRoomAutoApprovalRuleConfig" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.Initializer"></a>

```typescript
import { cleanRoomAutoApprovalRule } from '@cdktf/provider-databricks'

const cleanRoomAutoApprovalRuleConfig: cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.authorCollaboratorAlias">authorCollaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/clean_room_auto_approval_rule#author_collaborator_alias CleanRoomAutoApprovalRule#author_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.authorScope">authorScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/clean_room_auto_approval_rule#author_scope CleanRoomAutoApprovalRule#author_scope}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.cleanRoomName">cleanRoomName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/clean_room_auto_approval_rule#clean_room_name CleanRoomAutoApprovalRule#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.runnerCollaboratorAlias">runnerCollaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/clean_room_auto_approval_rule#runner_collaborator_alias CleanRoomAutoApprovalRule#runner_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/clean_room_auto_approval_rule#workspace_id CleanRoomAutoApprovalRule#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authorCollaboratorAlias`<sup>Optional</sup> <a name="authorCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.authorCollaboratorAlias"></a>

```typescript
public readonly authorCollaboratorAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/clean_room_auto_approval_rule#author_collaborator_alias CleanRoomAutoApprovalRule#author_collaborator_alias}.

---

##### `authorScope`<sup>Optional</sup> <a name="authorScope" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.authorScope"></a>

```typescript
public readonly authorScope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/clean_room_auto_approval_rule#author_scope CleanRoomAutoApprovalRule#author_scope}.

---

##### `cleanRoomName`<sup>Optional</sup> <a name="cleanRoomName" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.cleanRoomName"></a>

```typescript
public readonly cleanRoomName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/clean_room_auto_approval_rule#clean_room_name CleanRoomAutoApprovalRule#clean_room_name}.

---

##### `runnerCollaboratorAlias`<sup>Optional</sup> <a name="runnerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.runnerCollaboratorAlias"></a>

```typescript
public readonly runnerCollaboratorAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/clean_room_auto_approval_rule#runner_collaborator_alias CleanRoomAutoApprovalRule#runner_collaborator_alias}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/resources/clean_room_auto_approval_rule#workspace_id CleanRoomAutoApprovalRule#workspace_id}.

---



