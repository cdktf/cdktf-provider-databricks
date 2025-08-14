# `accountNetworkPolicy` Submodule <a name="`accountNetworkPolicy` Submodule" id="@cdktf/provider-databricks.accountNetworkPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountNetworkPolicy <a name="AccountNetworkPolicy" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy databricks_account_network_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

new accountNetworkPolicy.AccountNetworkPolicy(scope: Construct, id: string, config?: AccountNetworkPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig">AccountNetworkPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig">AccountNetworkPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.putEgress">putEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetEgress">resetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetNetworkPolicyId">resetNetworkPolicyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgress` <a name="putEgress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.putEgress"></a>

```typescript
public putEgress(value: AccountNetworkPolicyEgress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.putEgress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetEgress` <a name="resetEgress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetEgress"></a>

```typescript
public resetEgress(): void
```

##### `resetNetworkPolicyId` <a name="resetNetworkPolicyId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.resetNetworkPolicyId"></a>

```typescript
public resetNetworkPolicyId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccountNetworkPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isConstruct"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

accountNetworkPolicy.AccountNetworkPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformElement"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

accountNetworkPolicy.AccountNetworkPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformResource"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

accountNetworkPolicy.AccountNetworkPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccountNetworkPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountNetworkPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountNetworkPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountNetworkPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference">AccountNetworkPolicyEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.egressInput">egressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.networkPolicyIdInput">networkPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.networkPolicyId">networkPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `egress`<sup>Required</sup> <a name="egress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.egress"></a>

```typescript
public readonly egress: AccountNetworkPolicyEgressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference">AccountNetworkPolicyEgressOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `egressInput`<sup>Optional</sup> <a name="egressInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.egressInput"></a>

```typescript
public readonly egressInput: IResolvable | AccountNetworkPolicyEgress;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a>

---

##### `networkPolicyIdInput`<sup>Optional</sup> <a name="networkPolicyIdInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.networkPolicyIdInput"></a>

```typescript
public readonly networkPolicyIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `networkPolicyId`<sup>Required</sup> <a name="networkPolicyId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.networkPolicyId"></a>

```typescript
public readonly networkPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountNetworkPolicyConfig <a name="AccountNetworkPolicyConfig" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

const accountNetworkPolicyConfig: accountNetworkPolicy.AccountNetworkPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#account_id AccountNetworkPolicy#account_id}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.egress">egress</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#egress AccountNetworkPolicy#egress}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.networkPolicyId">networkPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#network_policy_id AccountNetworkPolicy#network_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#account_id AccountNetworkPolicy#account_id}.

---

##### `egress`<sup>Optional</sup> <a name="egress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.egress"></a>

```typescript
public readonly egress: AccountNetworkPolicyEgress;
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#egress AccountNetworkPolicy#egress}.

---

##### `networkPolicyId`<sup>Optional</sup> <a name="networkPolicyId" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyConfig.property.networkPolicyId"></a>

```typescript
public readonly networkPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#network_policy_id AccountNetworkPolicy#network_policy_id}.

---

### AccountNetworkPolicyEgress <a name="AccountNetworkPolicyEgress" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

const accountNetworkPolicyEgress: accountNetworkPolicy.AccountNetworkPolicyEgress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress.property.networkAccess">networkAccess</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#network_access AccountNetworkPolicy#network_access}. |

---

##### `networkAccess`<sup>Optional</sup> <a name="networkAccess" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress.property.networkAccess"></a>

```typescript
public readonly networkAccess: AccountNetworkPolicyEgressNetworkAccess;
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#network_access AccountNetworkPolicy#network_access}.

---

### AccountNetworkPolicyEgressNetworkAccess <a name="AccountNetworkPolicyEgressNetworkAccess" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

const accountNetworkPolicyEgressNetworkAccess: accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.restrictionMode">restrictionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.allowedInternetDestinations">allowedInternetDestinations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#allowed_internet_destinations AccountNetworkPolicy#allowed_internet_destinations}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.allowedStorageDestinations">allowedStorageDestinations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#allowed_storage_destinations AccountNetworkPolicy#allowed_storage_destinations}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.policyEnforcement">policyEnforcement</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#policy_enforcement AccountNetworkPolicy#policy_enforcement}. |

---

##### `restrictionMode`<sup>Required</sup> <a name="restrictionMode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.restrictionMode"></a>

```typescript
public readonly restrictionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#restriction_mode AccountNetworkPolicy#restriction_mode}.

---

##### `allowedInternetDestinations`<sup>Optional</sup> <a name="allowedInternetDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.allowedInternetDestinations"></a>

```typescript
public readonly allowedInternetDestinations: IResolvable | AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#allowed_internet_destinations AccountNetworkPolicy#allowed_internet_destinations}.

---

##### `allowedStorageDestinations`<sup>Optional</sup> <a name="allowedStorageDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.allowedStorageDestinations"></a>

```typescript
public readonly allowedStorageDestinations: IResolvable | AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#allowed_storage_destinations AccountNetworkPolicy#allowed_storage_destinations}.

---

##### `policyEnforcement`<sup>Optional</sup> <a name="policyEnforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess.property.policyEnforcement"></a>

```typescript
public readonly policyEnforcement: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement;
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#policy_enforcement AccountNetworkPolicy#policy_enforcement}.

---

### AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations <a name="AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

const accountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations: accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.internetDestinationType">internetDestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#internet_destination_type AccountNetworkPolicy#internet_destination_type}. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#destination AccountNetworkPolicy#destination}.

---

##### `internetDestinationType`<sup>Optional</sup> <a name="internetDestinationType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations.property.internetDestinationType"></a>

```typescript
public readonly internetDestinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#internet_destination_type AccountNetworkPolicy#internet_destination_type}.

---

### AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations <a name="AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

const accountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations: accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageAccount">azureStorageAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#azure_storage_account AccountNetworkPolicy#azure_storage_account}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageService">azureStorageService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#azure_storage_service AccountNetworkPolicy#azure_storage_service}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#bucket_name AccountNetworkPolicy#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#region AccountNetworkPolicy#region}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.storageDestinationType">storageDestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#storage_destination_type AccountNetworkPolicy#storage_destination_type}. |

---

##### `azureStorageAccount`<sup>Optional</sup> <a name="azureStorageAccount" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageAccount"></a>

```typescript
public readonly azureStorageAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#azure_storage_account AccountNetworkPolicy#azure_storage_account}.

---

##### `azureStorageService`<sup>Optional</sup> <a name="azureStorageService" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.azureStorageService"></a>

```typescript
public readonly azureStorageService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#azure_storage_service AccountNetworkPolicy#azure_storage_service}.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#bucket_name AccountNetworkPolicy#bucket_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#region AccountNetworkPolicy#region}.

---

##### `storageDestinationType`<sup>Optional</sup> <a name="storageDestinationType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations.property.storageDestinationType"></a>

```typescript
public readonly storageDestinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#storage_destination_type AccountNetworkPolicy#storage_destination_type}.

---

### AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement <a name="AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

const accountNetworkPolicyEgressNetworkAccessPolicyEnforcement: accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.dryRunModeProductFilter">dryRunModeProductFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#dry_run_mode_product_filter AccountNetworkPolicy#dry_run_mode_product_filter}. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#enforcement_mode AccountNetworkPolicy#enforcement_mode}. |

---

##### `dryRunModeProductFilter`<sup>Optional</sup> <a name="dryRunModeProductFilter" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.dryRunModeProductFilter"></a>

```typescript
public readonly dryRunModeProductFilter: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#dry_run_mode_product_filter AccountNetworkPolicy#dry_run_mode_product_filter}.

---

##### `enforcementMode`<sup>Optional</sup> <a name="enforcementMode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/account_network_policy#enforcement_mode AccountNetworkPolicy#enforcement_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList <a name="AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

new accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.get"></a>

```typescript
public get(index: number): AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>[]

---


### AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference <a name="AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

new accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetInternetDestinationType">resetInternetDestinationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestination` <a name="resetDestination" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetInternetDestinationType` <a name="resetInternetDestinationType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetInternetDestinationType"></a>

```typescript
public resetInternetDestinationType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationTypeInput">internetDestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationType">internetDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `internetDestinationTypeInput`<sup>Optional</sup> <a name="internetDestinationTypeInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationTypeInput"></a>

```typescript
public readonly internetDestinationTypeInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `internetDestinationType`<sup>Required</sup> <a name="internetDestinationType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationType"></a>

```typescript
public readonly internetDestinationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>

---


### AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList <a name="AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

new accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.get"></a>

```typescript
public get(index: number): AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>[]

---


### AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference <a name="AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

new accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount">resetAzureStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService">resetAzureStorageService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetStorageDestinationType">resetStorageDestinationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAzureStorageAccount` <a name="resetAzureStorageAccount" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount"></a>

```typescript
public resetAzureStorageAccount(): void
```

##### `resetAzureStorageService` <a name="resetAzureStorageService" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService"></a>

```typescript
public resetAzureStorageService(): void
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStorageDestinationType` <a name="resetStorageDestinationType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetStorageDestinationType"></a>

```typescript
public resetStorageDestinationType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput">azureStorageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput">azureStorageServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationTypeInput">storageDestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount">azureStorageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageService">azureStorageService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationType">storageDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureStorageAccountInput`<sup>Optional</sup> <a name="azureStorageAccountInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput"></a>

```typescript
public readonly azureStorageAccountInput: string;
```

- *Type:* string

---

##### `azureStorageServiceInput`<sup>Optional</sup> <a name="azureStorageServiceInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput"></a>

```typescript
public readonly azureStorageServiceInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `storageDestinationTypeInput`<sup>Optional</sup> <a name="storageDestinationTypeInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationTypeInput"></a>

```typescript
public readonly storageDestinationTypeInput: string;
```

- *Type:* string

---

##### `azureStorageAccount`<sup>Required</sup> <a name="azureStorageAccount" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount"></a>

```typescript
public readonly azureStorageAccount: string;
```

- *Type:* string

---

##### `azureStorageService`<sup>Required</sup> <a name="azureStorageService" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageService"></a>

```typescript
public readonly azureStorageService: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `storageDestinationType`<sup>Required</sup> <a name="storageDestinationType" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationType"></a>

```typescript
public readonly storageDestinationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>

---


### AccountNetworkPolicyEgressNetworkAccessOutputReference <a name="AccountNetworkPolicyEgressNetworkAccessOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

new accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedInternetDestinations">putAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedStorageDestinations">putAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement">putPolicyEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedInternetDestinations">resetAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedStorageDestinations">resetAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetPolicyEnforcement">resetPolicyEnforcement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedInternetDestinations` <a name="putAllowedInternetDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedInternetDestinations"></a>

```typescript
public putAllowedInternetDestinations(value: IResolvable | AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedInternetDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>[]

---

##### `putAllowedStorageDestinations` <a name="putAllowedStorageDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedStorageDestinations"></a>

```typescript
public putAllowedStorageDestinations(value: IResolvable | AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putAllowedStorageDestinations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>[]

---

##### `putPolicyEnforcement` <a name="putPolicyEnforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement"></a>

```typescript
public putPolicyEnforcement(value: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.putPolicyEnforcement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>

---

##### `resetAllowedInternetDestinations` <a name="resetAllowedInternetDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedInternetDestinations"></a>

```typescript
public resetAllowedInternetDestinations(): void
```

##### `resetAllowedStorageDestinations` <a name="resetAllowedStorageDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetAllowedStorageDestinations"></a>

```typescript
public resetAllowedStorageDestinations(): void
```

##### `resetPolicyEnforcement` <a name="resetPolicyEnforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.resetPolicyEnforcement"></a>

```typescript
public resetPolicyEnforcement(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinations">allowedInternetDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinations">allowedStorageDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcement">policyEnforcement</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinationsInput">allowedInternetDestinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinationsInput">allowedStorageDestinationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcementInput">policyEnforcementInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionModeInput">restrictionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionMode">restrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedInternetDestinations`<sup>Required</sup> <a name="allowedInternetDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinations"></a>

```typescript
public readonly allowedInternetDestinations: AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinationsList</a>

---

##### `allowedStorageDestinations`<sup>Required</sup> <a name="allowedStorageDestinations" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinations"></a>

```typescript
public readonly allowedStorageDestinations: AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinationsList</a>

---

##### `policyEnforcement`<sup>Required</sup> <a name="policyEnforcement" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcement"></a>

```typescript
public readonly policyEnforcement: AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference</a>

---

##### `allowedInternetDestinationsInput`<sup>Optional</sup> <a name="allowedInternetDestinationsInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedInternetDestinationsInput"></a>

```typescript
public readonly allowedInternetDestinationsInput: IResolvable | AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedInternetDestinations</a>[]

---

##### `allowedStorageDestinationsInput`<sup>Optional</sup> <a name="allowedStorageDestinationsInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.allowedStorageDestinationsInput"></a>

```typescript
public readonly allowedStorageDestinationsInput: IResolvable | AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations">AccountNetworkPolicyEgressNetworkAccessAllowedStorageDestinations</a>[]

---

##### `policyEnforcementInput`<sup>Optional</sup> <a name="policyEnforcementInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.policyEnforcementInput"></a>

```typescript
public readonly policyEnforcementInput: IResolvable | AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>

---

##### `restrictionModeInput`<sup>Optional</sup> <a name="restrictionModeInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionModeInput"></a>

```typescript
public readonly restrictionModeInput: string;
```

- *Type:* string

---

##### `restrictionMode`<sup>Required</sup> <a name="restrictionMode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.restrictionMode"></a>

```typescript
public readonly restrictionMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountNetworkPolicyEgressNetworkAccess;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a>

---


### AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference <a name="AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

new accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetDryRunModeProductFilter">resetDryRunModeProductFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetEnforcementMode">resetEnforcementMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDryRunModeProductFilter` <a name="resetDryRunModeProductFilter" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetDryRunModeProductFilter"></a>

```typescript
public resetDryRunModeProductFilter(): void
```

##### `resetEnforcementMode` <a name="resetEnforcementMode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.resetEnforcementMode"></a>

```typescript
public resetEnforcementMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilterInput">dryRunModeProductFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementModeInput">enforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilter">dryRunModeProductFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementMode">enforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dryRunModeProductFilterInput`<sup>Optional</sup> <a name="dryRunModeProductFilterInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilterInput"></a>

```typescript
public readonly dryRunModeProductFilterInput: string[];
```

- *Type:* string[]

---

##### `enforcementModeInput`<sup>Optional</sup> <a name="enforcementModeInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementModeInput"></a>

```typescript
public readonly enforcementModeInput: string;
```

- *Type:* string

---

##### `dryRunModeProductFilter`<sup>Required</sup> <a name="dryRunModeProductFilter" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilter"></a>

```typescript
public readonly dryRunModeProductFilter: string[];
```

- *Type:* string[]

---

##### `enforcementMode`<sup>Required</sup> <a name="enforcementMode" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementMode"></a>

```typescript
public readonly enforcementMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement">AccountNetworkPolicyEgressNetworkAccessPolicyEnforcement</a>

---


### AccountNetworkPolicyEgressOutputReference <a name="AccountNetworkPolicyEgressOutputReference" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer"></a>

```typescript
import { accountNetworkPolicy } from '@cdktf/provider-databricks'

new accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.putNetworkAccess">putNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resetNetworkAccess">resetNetworkAccess</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkAccess` <a name="putNetworkAccess" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.putNetworkAccess"></a>

```typescript
public putNetworkAccess(value: AccountNetworkPolicyEgressNetworkAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.putNetworkAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a>

---

##### `resetNetworkAccess` <a name="resetNetworkAccess" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.resetNetworkAccess"></a>

```typescript
public resetNetworkAccess(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.networkAccess">networkAccess</a></code> | <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference">AccountNetworkPolicyEgressNetworkAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.networkAccessInput">networkAccessInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkAccess`<sup>Required</sup> <a name="networkAccess" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.networkAccess"></a>

```typescript
public readonly networkAccess: AccountNetworkPolicyEgressNetworkAccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccessOutputReference">AccountNetworkPolicyEgressNetworkAccessOutputReference</a>

---

##### `networkAccessInput`<sup>Optional</sup> <a name="networkAccessInput" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.networkAccessInput"></a>

```typescript
public readonly networkAccessInput: IResolvable | AccountNetworkPolicyEgressNetworkAccess;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressNetworkAccess">AccountNetworkPolicyEgressNetworkAccess</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountNetworkPolicyEgress;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.accountNetworkPolicy.AccountNetworkPolicyEgress">AccountNetworkPolicyEgress</a>

---



