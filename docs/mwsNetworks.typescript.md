# `databricks_mws_networks`

Refer to the Terraform Registory for docs: [`databricks_mws_networks`](https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks).

# `mwsNetworks` Submodule <a name="`mwsNetworks` Submodule" id="@cdktf/provider-databricks.mwsNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNetworks <a name="MwsNetworks" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks databricks_mws_networks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer"></a>

```typescript
import { mwsNetworks } from '@cdktf/provider-databricks'

new mwsNetworks.MwsNetworks(scope: Construct, id: string, config: MwsNetworksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig">MwsNetworksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig">MwsNetworksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages">putErrorMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo">putGcpNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints">putVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetErrorMessages">resetErrorMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetGcpNetworkInfo">resetGcpNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetNetworkId">resetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcEndpoints">resetVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcId">resetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcStatus">resetVpcStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putErrorMessages` <a name="putErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages"></a>

```typescript
public putErrorMessages(value: IResolvable | MwsNetworksErrorMessages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putErrorMessages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>[]

---

##### `putGcpNetworkInfo` <a name="putGcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo"></a>

```typescript
public putGcpNetworkInfo(value: MwsNetworksGcpNetworkInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putGcpNetworkInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---

##### `putVpcEndpoints` <a name="putVpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints"></a>

```typescript
public putVpcEndpoints(value: MwsNetworksVpcEndpoints): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.putVpcEndpoints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetCreationTime"></a>

```typescript
public resetCreationTime(): void
```

##### `resetErrorMessages` <a name="resetErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetErrorMessages"></a>

```typescript
public resetErrorMessages(): void
```

##### `resetGcpNetworkInfo` <a name="resetGcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetGcpNetworkInfo"></a>

```typescript
public resetGcpNetworkInfo(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkId` <a name="resetNetworkId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetNetworkId"></a>

```typescript
public resetNetworkId(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetVpcEndpoints` <a name="resetVpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcEndpoints"></a>

```typescript
public resetVpcEndpoints(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

##### `resetVpcStatus` <a name="resetVpcStatus" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetVpcStatus"></a>

```typescript
public resetVpcStatus(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MwsNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isConstruct"></a>

```typescript
import { mwsNetworks } from '@cdktf/provider-databricks'

mwsNetworks.MwsNetworks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement"></a>

```typescript
import { mwsNetworks } from '@cdktf/provider-databricks'

mwsNetworks.MwsNetworks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource"></a>

```typescript
import { mwsNetworks } from '@cdktf/provider-databricks'

mwsNetworks.MwsNetworks.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport"></a>

```typescript
import { mwsNetworks } from '@cdktf/provider-databricks'

mwsNetworks.MwsNetworks.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MwsNetworks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwsNetworks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwsNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MwsNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessages">errorMessages</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList">MwsNetworksErrorMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfo">gcpNetworkInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference">MwsNetworksGcpNetworkInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpoints">vpcEndpoints</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference">MwsNetworksVpcEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTimeInput">creationTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessagesInput">errorMessagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfoInput">gcpNetworkInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkNameInput">networkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpointsInput">vpcEndpointsInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatusInput">vpcStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceIdInput">workspaceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkName">networkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatus">vpcStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceId">workspaceId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessages"></a>

```typescript
public readonly errorMessages: MwsNetworksErrorMessagesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList">MwsNetworksErrorMessagesList</a>

---

##### `gcpNetworkInfo`<sup>Required</sup> <a name="gcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfo"></a>

```typescript
public readonly gcpNetworkInfo: MwsNetworksGcpNetworkInfoOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference">MwsNetworksGcpNetworkInfoOutputReference</a>

---

##### `vpcEndpoints`<sup>Required</sup> <a name="vpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpoints"></a>

```typescript
public readonly vpcEndpoints: MwsNetworksVpcEndpointsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference">MwsNetworksVpcEndpointsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTimeInput"></a>

```typescript
public readonly creationTimeInput: number;
```

- *Type:* number

---

##### `errorMessagesInput`<sup>Optional</sup> <a name="errorMessagesInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.errorMessagesInput"></a>

```typescript
public readonly errorMessagesInput: IResolvable | MwsNetworksErrorMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>[]

---

##### `gcpNetworkInfoInput`<sup>Optional</sup> <a name="gcpNetworkInfoInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.gcpNetworkInfoInput"></a>

```typescript
public readonly gcpNetworkInfoInput: MwsNetworksGcpNetworkInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `networkNameInput`<sup>Optional</sup> <a name="networkNameInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkNameInput"></a>

```typescript
public readonly networkNameInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcEndpointsInput`<sup>Optional</sup> <a name="vpcEndpointsInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcEndpointsInput"></a>

```typescript
public readonly vpcEndpointsInput: MwsNetworksVpcEndpoints;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `vpcStatusInput`<sup>Optional</sup> <a name="vpcStatusInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatusInput"></a>

```typescript
public readonly vpcStatusInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpcStatus`<sup>Required</sup> <a name="vpcStatus" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.vpcStatus"></a>

```typescript
public readonly vpcStatus: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNetworksConfig <a name="MwsNetworksConfig" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.Initializer"></a>

```typescript
import { mwsNetworks } from '@cdktf/provider-databricks'

const mwsNetworksConfig: mwsNetworks.MwsNetworksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#account_id MwsNetworks#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkName">networkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#network_name MwsNetworks#network_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.creationTime">creationTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.errorMessages">errorMessages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>[]</code> | error_messages block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.gcpNetworkInfo">gcpNetworkInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | gcp_network_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#id MwsNetworks#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#network_id MwsNetworks#network_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcEndpoints">vpcEndpoints</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | vpc_endpoints block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcStatus">vpcStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.workspaceId">workspaceId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#account_id MwsNetworks#account_id}.

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#network_name MwsNetworks#network_name}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#creation_time MwsNetworks#creation_time}.

---

##### `errorMessages`<sup>Optional</sup> <a name="errorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.errorMessages"></a>

```typescript
public readonly errorMessages: IResolvable | MwsNetworksErrorMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>[]

error_messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#error_messages MwsNetworks#error_messages}

---

##### `gcpNetworkInfo`<sup>Optional</sup> <a name="gcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.gcpNetworkInfo"></a>

```typescript
public readonly gcpNetworkInfo: MwsNetworksGcpNetworkInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

gcp_network_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#gcp_network_info MwsNetworks#gcp_network_info}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#id MwsNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#network_id MwsNetworks#network_id}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#security_group_ids MwsNetworks#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#subnet_ids MwsNetworks#subnet_ids}.

---

##### `vpcEndpoints`<sup>Optional</sup> <a name="vpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcEndpoints"></a>

```typescript
public readonly vpcEndpoints: MwsNetworksVpcEndpoints;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

vpc_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#vpc_endpoints MwsNetworks#vpc_endpoints}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}.

---

##### `vpcStatus`<sup>Optional</sup> <a name="vpcStatus" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.vpcStatus"></a>

```typescript
public readonly vpcStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#vpc_status MwsNetworks#vpc_status}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#workspace_id MwsNetworks#workspace_id}.

---

### MwsNetworksErrorMessages <a name="MwsNetworksErrorMessages" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.Initializer"></a>

```typescript
import { mwsNetworks } from '@cdktf/provider-databricks'

const mwsNetworksErrorMessages: mwsNetworks.MwsNetworksErrorMessages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorMessage">errorMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#error_message MwsNetworks#error_message}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorType">errorType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#error_type MwsNetworks#error_type}. |

---

##### `errorMessage`<sup>Optional</sup> <a name="errorMessage" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#error_message MwsNetworks#error_message}.

---

##### `errorType`<sup>Optional</sup> <a name="errorType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages.property.errorType"></a>

```typescript
public readonly errorType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#error_type MwsNetworks#error_type}.

---

### MwsNetworksGcpNetworkInfo <a name="MwsNetworksGcpNetworkInfo" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.Initializer"></a>

```typescript
import { mwsNetworks } from '@cdktf/provider-databricks'

const mwsNetworksGcpNetworkInfo: mwsNetworks.MwsNetworksGcpNetworkInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.networkProjectId">networkProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#network_project_id MwsNetworks#network_project_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.podIpRangeName">podIpRangeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#pod_ip_range_name MwsNetworks#pod_ip_range_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.serviceIpRangeName">serviceIpRangeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#service_ip_range_name MwsNetworks#service_ip_range_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#subnet_id MwsNetworks#subnet_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetRegion">subnetRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#subnet_region MwsNetworks#subnet_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}. |

---

##### `networkProjectId`<sup>Required</sup> <a name="networkProjectId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.networkProjectId"></a>

```typescript
public readonly networkProjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#network_project_id MwsNetworks#network_project_id}.

---

##### `podIpRangeName`<sup>Required</sup> <a name="podIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.podIpRangeName"></a>

```typescript
public readonly podIpRangeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#pod_ip_range_name MwsNetworks#pod_ip_range_name}.

---

##### `serviceIpRangeName`<sup>Required</sup> <a name="serviceIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.serviceIpRangeName"></a>

```typescript
public readonly serviceIpRangeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#service_ip_range_name MwsNetworks#service_ip_range_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#subnet_id MwsNetworks#subnet_id}.

---

##### `subnetRegion`<sup>Required</sup> <a name="subnetRegion" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.subnetRegion"></a>

```typescript
public readonly subnetRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#subnet_region MwsNetworks#subnet_region}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#vpc_id MwsNetworks#vpc_id}.

---

### MwsNetworksVpcEndpoints <a name="MwsNetworksVpcEndpoints" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.Initializer"></a>

```typescript
import { mwsNetworks } from '@cdktf/provider-databricks'

const mwsNetworksVpcEndpoints: mwsNetworks.MwsNetworksVpcEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.dataplaneRelay">dataplaneRelay</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#dataplane_relay MwsNetworks#dataplane_relay}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.restApi">restApi</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#rest_api MwsNetworks#rest_api}. |

---

##### `dataplaneRelay`<sup>Required</sup> <a name="dataplaneRelay" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.dataplaneRelay"></a>

```typescript
public readonly dataplaneRelay: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#dataplane_relay MwsNetworks#dataplane_relay}.

---

##### `restApi`<sup>Required</sup> <a name="restApi" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints.property.restApi"></a>

```typescript
public readonly restApi: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/resources/mws_networks#rest_api MwsNetworks#rest_api}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsNetworksErrorMessagesList <a name="MwsNetworksErrorMessagesList" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer"></a>

```typescript
import { mwsNetworks } from '@cdktf/provider-databricks'

new mwsNetworks.MwsNetworksErrorMessagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get"></a>

```typescript
public get(index: number): MwsNetworksErrorMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MwsNetworksErrorMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>[]

---


### MwsNetworksErrorMessagesOutputReference <a name="MwsNetworksErrorMessagesOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer"></a>

```typescript
import { mwsNetworks } from '@cdktf/provider-databricks'

new mwsNetworks.MwsNetworksErrorMessagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorMessage">resetErrorMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorType">resetErrorType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorMessage` <a name="resetErrorMessage" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorMessage"></a>

```typescript
public resetErrorMessage(): void
```

##### `resetErrorType` <a name="resetErrorType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.resetErrorType"></a>

```typescript
public resetErrorType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessageInput">errorMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorTypeInput">errorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorType">errorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorMessageInput`<sup>Optional</sup> <a name="errorMessageInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessageInput"></a>

```typescript
public readonly errorMessageInput: string;
```

- *Type:* string

---

##### `errorTypeInput`<sup>Optional</sup> <a name="errorTypeInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorTypeInput"></a>

```typescript
public readonly errorTypeInput: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `errorType`<sup>Required</sup> <a name="errorType" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.errorType"></a>

```typescript
public readonly errorType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MwsNetworksErrorMessages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksErrorMessages">MwsNetworksErrorMessages</a>

---


### MwsNetworksGcpNetworkInfoOutputReference <a name="MwsNetworksGcpNetworkInfoOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer"></a>

```typescript
import { mwsNetworks } from '@cdktf/provider-databricks'

new mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectIdInput">networkProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeNameInput">podIpRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeNameInput">serviceIpRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegionInput">subnetRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectId">networkProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeName">podIpRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeName">serviceIpRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegion">subnetRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkProjectIdInput`<sup>Optional</sup> <a name="networkProjectIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectIdInput"></a>

```typescript
public readonly networkProjectIdInput: string;
```

- *Type:* string

---

##### `podIpRangeNameInput`<sup>Optional</sup> <a name="podIpRangeNameInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeNameInput"></a>

```typescript
public readonly podIpRangeNameInput: string;
```

- *Type:* string

---

##### `serviceIpRangeNameInput`<sup>Optional</sup> <a name="serviceIpRangeNameInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeNameInput"></a>

```typescript
public readonly serviceIpRangeNameInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subnetRegionInput`<sup>Optional</sup> <a name="subnetRegionInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegionInput"></a>

```typescript
public readonly subnetRegionInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `networkProjectId`<sup>Required</sup> <a name="networkProjectId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.networkProjectId"></a>

```typescript
public readonly networkProjectId: string;
```

- *Type:* string

---

##### `podIpRangeName`<sup>Required</sup> <a name="podIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.podIpRangeName"></a>

```typescript
public readonly podIpRangeName: string;
```

- *Type:* string

---

##### `serviceIpRangeName`<sup>Required</sup> <a name="serviceIpRangeName" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.serviceIpRangeName"></a>

```typescript
public readonly serviceIpRangeName: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `subnetRegion`<sup>Required</sup> <a name="subnetRegion" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.subnetRegion"></a>

```typescript
public readonly subnetRegion: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MwsNetworksGcpNetworkInfo;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksGcpNetworkInfo">MwsNetworksGcpNetworkInfo</a>

---


### MwsNetworksVpcEndpointsOutputReference <a name="MwsNetworksVpcEndpointsOutputReference" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer"></a>

```typescript
import { mwsNetworks } from '@cdktf/provider-databricks'

new mwsNetworks.MwsNetworksVpcEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelayInput">dataplaneRelayInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApiInput">restApiInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelay">dataplaneRelay</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApi">restApi</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataplaneRelayInput`<sup>Optional</sup> <a name="dataplaneRelayInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelayInput"></a>

```typescript
public readonly dataplaneRelayInput: string[];
```

- *Type:* string[]

---

##### `restApiInput`<sup>Optional</sup> <a name="restApiInput" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApiInput"></a>

```typescript
public readonly restApiInput: string[];
```

- *Type:* string[]

---

##### `dataplaneRelay`<sup>Required</sup> <a name="dataplaneRelay" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.dataplaneRelay"></a>

```typescript
public readonly dataplaneRelay: string[];
```

- *Type:* string[]

---

##### `restApi`<sup>Required</sup> <a name="restApi" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.restApi"></a>

```typescript
public readonly restApi: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MwsNetworksVpcEndpoints;
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworks.MwsNetworksVpcEndpoints">MwsNetworksVpcEndpoints</a>

---



