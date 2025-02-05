# `customAppIntegration` Submodule <a name="`customAppIntegration` Submodule" id="@cdktf/provider-databricks.customAppIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomAppIntegration <a name="CustomAppIntegration" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration databricks_custom_app_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer"></a>

```typescript
import { customAppIntegration } from '@cdktf/provider-databricks'

new customAppIntegration.CustomAppIntegration(scope: Construct, id: string, config?: CustomAppIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig">CustomAppIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig">CustomAppIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy">putTokenAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetConfidential">resetConfidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatedBy">resetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreateTime">resetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatorUsername">resetCreatorUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetIntegrationId">resetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetRedirectUrls">resetRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetTokenAccessPolicy">resetTokenAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetUserAuthorizedScopes">resetUserAuthorizedScopes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTokenAccessPolicy` <a name="putTokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy"></a>

```typescript
public putTokenAccessPolicy(value: CustomAppIntegrationTokenAccessPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---

##### `resetClientId` <a name="resetClientId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetConfidential` <a name="resetConfidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetConfidential"></a>

```typescript
public resetConfidential(): void
```

##### `resetCreatedBy` <a name="resetCreatedBy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatedBy"></a>

```typescript
public resetCreatedBy(): void
```

##### `resetCreateTime` <a name="resetCreateTime" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreateTime"></a>

```typescript
public resetCreateTime(): void
```

##### `resetCreatorUsername` <a name="resetCreatorUsername" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatorUsername"></a>

```typescript
public resetCreatorUsername(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntegrationId` <a name="resetIntegrationId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetIntegrationId"></a>

```typescript
public resetIntegrationId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRedirectUrls` <a name="resetRedirectUrls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetRedirectUrls"></a>

```typescript
public resetRedirectUrls(): void
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetScopes"></a>

```typescript
public resetScopes(): void
```

##### `resetTokenAccessPolicy` <a name="resetTokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetTokenAccessPolicy"></a>

```typescript
public resetTokenAccessPolicy(): void
```

##### `resetUserAuthorizedScopes` <a name="resetUserAuthorizedScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetUserAuthorizedScopes"></a>

```typescript
public resetUserAuthorizedScopes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomAppIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct"></a>

```typescript
import { customAppIntegration } from '@cdktf/provider-databricks'

customAppIntegration.CustomAppIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement"></a>

```typescript
import { customAppIntegration } from '@cdktf/provider-databricks'

customAppIntegration.CustomAppIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource"></a>

```typescript
import { customAppIntegration } from '@cdktf/provider-databricks'

customAppIntegration.CustomAppIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport"></a>

```typescript
import { customAppIntegration } from '@cdktf/provider-databricks'

customAppIntegration.CustomAppIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CustomAppIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomAppIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomAppIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomAppIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicy">tokenAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference">CustomAppIntegrationTokenAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidentialInput">confidentialInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdByInput">createdByInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTimeInput">createTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsernameInput">creatorUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationIdInput">integrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrlsInput">redirectUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicyInput">tokenAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopesInput">userAuthorizedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidential">confidential</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdBy">createdBy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsername">creatorUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrls">redirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopes">userAuthorizedScopes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tokenAccessPolicy`<sup>Required</sup> <a name="tokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicy"></a>

```typescript
public readonly tokenAccessPolicy: CustomAppIntegrationTokenAccessPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference">CustomAppIntegrationTokenAccessPolicyOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `confidentialInput`<sup>Optional</sup> <a name="confidentialInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidentialInput"></a>

```typescript
public readonly confidentialInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createdByInput`<sup>Optional</sup> <a name="createdByInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdByInput"></a>

```typescript
public readonly createdByInput: number;
```

- *Type:* number

---

##### `createTimeInput`<sup>Optional</sup> <a name="createTimeInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTimeInput"></a>

```typescript
public readonly createTimeInput: string;
```

- *Type:* string

---

##### `creatorUsernameInput`<sup>Optional</sup> <a name="creatorUsernameInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsernameInput"></a>

```typescript
public readonly creatorUsernameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationIdInput"></a>

```typescript
public readonly integrationIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `redirectUrlsInput`<sup>Optional</sup> <a name="redirectUrlsInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrlsInput"></a>

```typescript
public readonly redirectUrlsInput: string[];
```

- *Type:* string[]

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `tokenAccessPolicyInput`<sup>Optional</sup> <a name="tokenAccessPolicyInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicyInput"></a>

```typescript
public readonly tokenAccessPolicyInput: CustomAppIntegrationTokenAccessPolicy;
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---

##### `userAuthorizedScopesInput`<sup>Optional</sup> <a name="userAuthorizedScopesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopesInput"></a>

```typescript
public readonly userAuthorizedScopesInput: string[];
```

- *Type:* string[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `confidential`<sup>Required</sup> <a name="confidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidential"></a>

```typescript
public readonly confidential: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdBy"></a>

```typescript
public readonly createdBy: number;
```

- *Type:* number

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `creatorUsername`<sup>Required</sup> <a name="creatorUsername" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsername"></a>

```typescript
public readonly creatorUsername: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `redirectUrls`<sup>Required</sup> <a name="redirectUrls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrls"></a>

```typescript
public readonly redirectUrls: string[];
```

- *Type:* string[]

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `userAuthorizedScopes`<sup>Required</sup> <a name="userAuthorizedScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopes"></a>

```typescript
public readonly userAuthorizedScopes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomAppIntegrationConfig <a name="CustomAppIntegrationConfig" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.Initializer"></a>

```typescript
import { customAppIntegration } from '@cdktf/provider-databricks'

const customAppIntegrationConfig: customAppIntegration.CustomAppIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.confidential">confidential</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createdBy">createdBy</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createTime">createTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.creatorUsername">creatorUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.integrationId">integrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.redirectUrls">redirectUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.scopes">scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.tokenAccessPolicy">tokenAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | token_access_policy block. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.userAuthorizedScopes">userAuthorizedScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#user_authorized_scopes CustomAppIntegration#user_authorized_scopes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}.

---

##### `confidential`<sup>Optional</sup> <a name="confidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.confidential"></a>

```typescript
public readonly confidential: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}.

---

##### `createdBy`<sup>Optional</sup> <a name="createdBy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createdBy"></a>

```typescript
public readonly createdBy: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}.

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}.

---

##### `creatorUsername`<sup>Optional</sup> <a name="creatorUsername" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.creatorUsername"></a>

```typescript
public readonly creatorUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}.

---

##### `redirectUrls`<sup>Optional</sup> <a name="redirectUrls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.redirectUrls"></a>

```typescript
public readonly redirectUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}.

---

##### `tokenAccessPolicy`<sup>Optional</sup> <a name="tokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.tokenAccessPolicy"></a>

```typescript
public readonly tokenAccessPolicy: CustomAppIntegrationTokenAccessPolicy;
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

token_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#token_access_policy CustomAppIntegration#token_access_policy}

---

##### `userAuthorizedScopes`<sup>Optional</sup> <a name="userAuthorizedScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.userAuthorizedScopes"></a>

```typescript
public readonly userAuthorizedScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#user_authorized_scopes CustomAppIntegration#user_authorized_scopes}.

---

### CustomAppIntegrationTokenAccessPolicy <a name="CustomAppIntegrationTokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.Initializer"></a>

```typescript
import { customAppIntegration } from '@cdktf/provider-databricks'

const customAppIntegrationTokenAccessPolicy: customAppIntegration.CustomAppIntegrationTokenAccessPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.accessTokenTtlInMinutes">accessTokenTtlInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#access_token_ttl_in_minutes CustomAppIntegration#access_token_ttl_in_minutes}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.refreshTokenTtlInMinutes">refreshTokenTtlInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#refresh_token_ttl_in_minutes CustomAppIntegration#refresh_token_ttl_in_minutes}. |

---

##### `accessTokenTtlInMinutes`<sup>Optional</sup> <a name="accessTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.accessTokenTtlInMinutes"></a>

```typescript
public readonly accessTokenTtlInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#access_token_ttl_in_minutes CustomAppIntegration#access_token_ttl_in_minutes}.

---

##### `refreshTokenTtlInMinutes`<sup>Optional</sup> <a name="refreshTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.refreshTokenTtlInMinutes"></a>

```typescript
public readonly refreshTokenTtlInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/resources/custom_app_integration#refresh_token_ttl_in_minutes CustomAppIntegration#refresh_token_ttl_in_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomAppIntegrationTokenAccessPolicyOutputReference <a name="CustomAppIntegrationTokenAccessPolicyOutputReference" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer"></a>

```typescript
import { customAppIntegration } from '@cdktf/provider-databricks'

new customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetAccessTokenTtlInMinutes">resetAccessTokenTtlInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetRefreshTokenTtlInMinutes">resetRefreshTokenTtlInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessTokenTtlInMinutes` <a name="resetAccessTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetAccessTokenTtlInMinutes"></a>

```typescript
public resetAccessTokenTtlInMinutes(): void
```

##### `resetRefreshTokenTtlInMinutes` <a name="resetRefreshTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetRefreshTokenTtlInMinutes"></a>

```typescript
public resetRefreshTokenTtlInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutesInput">accessTokenTtlInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutesInput">refreshTokenTtlInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutes">accessTokenTtlInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutes">refreshTokenTtlInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokenTtlInMinutesInput`<sup>Optional</sup> <a name="accessTokenTtlInMinutesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutesInput"></a>

```typescript
public readonly accessTokenTtlInMinutesInput: number;
```

- *Type:* number

---

##### `refreshTokenTtlInMinutesInput`<sup>Optional</sup> <a name="refreshTokenTtlInMinutesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutesInput"></a>

```typescript
public readonly refreshTokenTtlInMinutesInput: number;
```

- *Type:* number

---

##### `accessTokenTtlInMinutes`<sup>Required</sup> <a name="accessTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutes"></a>

```typescript
public readonly accessTokenTtlInMinutes: number;
```

- *Type:* number

---

##### `refreshTokenTtlInMinutes`<sup>Required</sup> <a name="refreshTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutes"></a>

```typescript
public readonly refreshTokenTtlInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CustomAppIntegrationTokenAccessPolicy;
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---



