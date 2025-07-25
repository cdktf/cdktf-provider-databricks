# `servicePrincipalSecret` Submodule <a name="`servicePrincipalSecret` Submodule" id="@cdktf/provider-databricks.servicePrincipalSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalSecret <a name="ServicePrincipalSecret" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret databricks_service_principal_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer"></a>

```typescript
import { servicePrincipalSecret } from '@cdktf/provider-databricks'

new servicePrincipalSecret.ServicePrincipalSecret(scope: Construct, id: string, config: ServicePrincipalSecretConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig">ServicePrincipalSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig">ServicePrincipalSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetCreateTime">resetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetLifetime">resetLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetSecretHash">resetSecretHash</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetTimeRotating">resetTimeRotating</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetUpdateTime">resetUpdateTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCreateTime` <a name="resetCreateTime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetCreateTime"></a>

```typescript
public resetCreateTime(): void
```

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetExpireTime"></a>

```typescript
public resetExpireTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetLifetime"></a>

```typescript
public resetLifetime(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetSecretHash` <a name="resetSecretHash" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetSecretHash"></a>

```typescript
public resetSecretHash(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTimeRotating` <a name="resetTimeRotating" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetTimeRotating"></a>

```typescript
public resetTimeRotating(): void
```

##### `resetUpdateTime` <a name="resetUpdateTime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.resetUpdateTime"></a>

```typescript
public resetUpdateTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipalSecret resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isConstruct"></a>

```typescript
import { servicePrincipalSecret } from '@cdktf/provider-databricks'

servicePrincipalSecret.ServicePrincipalSecret.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformElement"></a>

```typescript
import { servicePrincipalSecret } from '@cdktf/provider-databricks'

servicePrincipalSecret.ServicePrincipalSecret.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformResource"></a>

```typescript
import { servicePrincipalSecret } from '@cdktf/provider-databricks'

servicePrincipalSecret.ServicePrincipalSecret.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport"></a>

```typescript
import { servicePrincipalSecret } from '@cdktf/provider-databricks'

servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServicePrincipalSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicePrincipalSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicePrincipalSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.createTimeInput">createTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.expireTimeInput">expireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifetimeInput">lifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretHashInput">secretHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.timeRotatingInput">timeRotatingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.updateTimeInput">updateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifetime">lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretHash">secretHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.timeRotating">timeRotating</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTimeInput`<sup>Optional</sup> <a name="createTimeInput" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.createTimeInput"></a>

```typescript
public readonly createTimeInput: string;
```

- *Type:* string

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.expireTimeInput"></a>

```typescript
public readonly expireTimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifetimeInput"></a>

```typescript
public readonly lifetimeInput: string;
```

- *Type:* string

---

##### `secretHashInput`<sup>Optional</sup> <a name="secretHashInput" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretHashInput"></a>

```typescript
public readonly secretHashInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `timeRotatingInput`<sup>Optional</sup> <a name="timeRotatingInput" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.timeRotatingInput"></a>

```typescript
public readonly timeRotatingInput: string;
```

- *Type:* string

---

##### `updateTimeInput`<sup>Optional</sup> <a name="updateTimeInput" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.updateTimeInput"></a>

```typescript
public readonly updateTimeInput: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `secretHash`<sup>Required</sup> <a name="secretHash" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.secretHash"></a>

```typescript
public readonly secretHash: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeRotating`<sup>Required</sup> <a name="timeRotating" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.timeRotating"></a>

```typescript
public readonly timeRotating: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecret.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalSecretConfig <a name="ServicePrincipalSecretConfig" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.Initializer"></a>

```typescript
import { servicePrincipalSecret } from '@cdktf/provider-databricks'

const servicePrincipalSecretConfig: servicePrincipalSecret.ServicePrincipalSecretConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#service_principal_id ServicePrincipalSecret#service_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.createTime">createTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#create_time ServicePrincipalSecret#create_time}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.expireTime">expireTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#expire_time ServicePrincipalSecret#expire_time}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#id ServicePrincipalSecret#id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.lifetime">lifetime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#lifetime ServicePrincipalSecret#lifetime}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.secret">secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#secret ServicePrincipalSecret#secret}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.secretHash">secretHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#secret_hash ServicePrincipalSecret#secret_hash}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#status ServicePrincipalSecret#status}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.timeRotating">timeRotating</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#time_rotating ServicePrincipalSecret#time_rotating}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.updateTime">updateTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#update_time ServicePrincipalSecret#update_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#service_principal_id ServicePrincipalSecret#service_principal_id}.

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#create_time ServicePrincipalSecret#create_time}.

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#expire_time ServicePrincipalSecret#expire_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#id ServicePrincipalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.lifetime"></a>

```typescript
public readonly lifetime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#lifetime ServicePrincipalSecret#lifetime}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#secret ServicePrincipalSecret#secret}.

---

##### `secretHash`<sup>Optional</sup> <a name="secretHash" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.secretHash"></a>

```typescript
public readonly secretHash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#secret_hash ServicePrincipalSecret#secret_hash}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#status ServicePrincipalSecret#status}.

---

##### `timeRotating`<sup>Optional</sup> <a name="timeRotating" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.timeRotating"></a>

```typescript
public readonly timeRotating: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#time_rotating ServicePrincipalSecret#time_rotating}.

---

##### `updateTime`<sup>Optional</sup> <a name="updateTime" id="@cdktf/provider-databricks.servicePrincipalSecret.ServicePrincipalSecretConfig.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/resources/service_principal_secret#update_time ServicePrincipalSecret#update_time}.

---



