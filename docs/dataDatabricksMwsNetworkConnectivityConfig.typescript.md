# `dataDatabricksMwsNetworkConnectivityConfig` Submodule <a name="`dataDatabricksMwsNetworkConnectivityConfig` Submodule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMwsNetworkConnectivityConfig <a name="DataDatabricksMwsNetworkConnectivityConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config databricks_mws_network_connectivity_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

new dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig(scope: Construct, id: string, config: DataDatabricksMwsNetworkConnectivityConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig">DataDatabricksMwsNetworkConnectivityConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig">DataDatabricksMwsNetworkConnectivityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.putEgressConfig">putEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetEgressConfig">resetEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetNetworkConnectivityConfigId">resetNetworkConnectivityConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetUpdatedTime">resetUpdatedTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEgressConfig` <a name="putEgressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.putEgressConfig"></a>

```typescript
public putEgressConfig(value: DataDatabricksMwsNetworkConnectivityConfigEgressConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.putEgressConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetCreationTime"></a>

```typescript
public resetCreationTime(): void
```

##### `resetEgressConfig` <a name="resetEgressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetEgressConfig"></a>

```typescript
public resetEgressConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkConnectivityConfigId` <a name="resetNetworkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetNetworkConnectivityConfigId"></a>

```typescript
public resetNetworkConnectivityConfigId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetUpdatedTime` <a name="resetUpdatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.resetUpdatedTime"></a>

```typescript
public resetUpdatedTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksMwsNetworkConnectivityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isConstruct"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksMwsNetworkConnectivityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMwsNetworkConnectivityConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMwsNetworkConnectivityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMwsNetworkConnectivityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfig">egressConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTimeInput">creationTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfigInput">egressConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigIdInput">networkConnectivityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTimeInput">updatedTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigId">networkConnectivityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTime">updatedTime</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `egressConfig`<sup>Required</sup> <a name="egressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfig"></a>

```typescript
public readonly egressConfig: DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTimeInput"></a>

```typescript
public readonly creationTimeInput: number;
```

- *Type:* number

---

##### `egressConfigInput`<sup>Optional</sup> <a name="egressConfigInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.egressConfigInput"></a>

```typescript
public readonly egressConfigInput: DataDatabricksMwsNetworkConnectivityConfigEgressConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConnectivityConfigIdInput`<sup>Optional</sup> <a name="networkConnectivityConfigIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigIdInput"></a>

```typescript
public readonly networkConnectivityConfigIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `updatedTimeInput`<sup>Optional</sup> <a name="updatedTimeInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTimeInput"></a>

```typescript
public readonly updatedTimeInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConnectivityConfigId`<sup>Required</sup> <a name="networkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.networkConnectivityConfigId"></a>

```typescript
public readonly networkConnectivityConfigId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `updatedTime`<sup>Required</sup> <a name="updatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.updatedTime"></a>

```typescript
public readonly updatedTime: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMwsNetworkConnectivityConfigConfig <a name="DataDatabricksMwsNetworkConnectivityConfigConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

const dataDatabricksMwsNetworkConnectivityConfigConfig: dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#name DataDatabricksMwsNetworkConnectivityConfig#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#account_id DataDatabricksMwsNetworkConnectivityConfig#account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.creationTime">creationTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.egressConfig">egressConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | egress_config block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#id DataDatabricksMwsNetworkConnectivityConfig#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.networkConnectivityConfigId">networkConnectivityConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#region DataDatabricksMwsNetworkConnectivityConfig#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.updatedTime">updatedTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#name DataDatabricksMwsNetworkConnectivityConfig#name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#account_id DataDatabricksMwsNetworkConnectivityConfig#account_id}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}.

---

##### `egressConfig`<sup>Optional</sup> <a name="egressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.egressConfig"></a>

```typescript
public readonly egressConfig: DataDatabricksMwsNetworkConnectivityConfigEgressConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

egress_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#egress_config DataDatabricksMwsNetworkConnectivityConfig#egress_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#id DataDatabricksMwsNetworkConnectivityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkConnectivityConfigId`<sup>Optional</sup> <a name="networkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.networkConnectivityConfigId"></a>

```typescript
public readonly networkConnectivityConfigId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#region DataDatabricksMwsNetworkConnectivityConfig#region}.

---

##### `updatedTime`<sup>Optional</sup> <a name="updatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigConfig.property.updatedTime"></a>

```typescript
public readonly updatedTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}.

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfig <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfig" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

const dataDatabricksMwsNetworkConnectivityConfigEgressConfig: dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.defaultRules">defaultRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | default_rules block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.targetRules">targetRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | target_rules block. |

---

##### `defaultRules`<sup>Optional</sup> <a name="defaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.defaultRules"></a>

```typescript
public readonly defaultRules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

default_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#default_rules DataDatabricksMwsNetworkConnectivityConfig#default_rules}

---

##### `targetRules`<sup>Optional</sup> <a name="targetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig.property.targetRules"></a>

```typescript
public readonly targetRules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

target_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#target_rules DataDatabricksMwsNetworkConnectivityConfig#target_rules}

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

const dataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules: dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.awsStableIpRule">awsStableIpRule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | aws_stable_ip_rule block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.azureServiceEndpointRule">azureServiceEndpointRule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | azure_service_endpoint_rule block. |

---

##### `awsStableIpRule`<sup>Optional</sup> <a name="awsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.awsStableIpRule"></a>

```typescript
public readonly awsStableIpRule: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

aws_stable_ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#aws_stable_ip_rule DataDatabricksMwsNetworkConnectivityConfig#aws_stable_ip_rule}

---

##### `azureServiceEndpointRule`<sup>Optional</sup> <a name="azureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules.property.azureServiceEndpointRule"></a>

```typescript
public readonly azureServiceEndpointRule: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

azure_service_endpoint_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#azure_service_endpoint_rule DataDatabricksMwsNetworkConnectivityConfig#azure_service_endpoint_rule}

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

const dataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule: dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#cidr_blocks DataDatabricksMwsNetworkConnectivityConfig#cidr_blocks}. |

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#cidr_blocks DataDatabricksMwsNetworkConnectivityConfig#cidr_blocks}.

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

const dataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule: dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#subnets DataDatabricksMwsNetworkConnectivityConfig#subnets}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetRegion">targetRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#target_region DataDatabricksMwsNetworkConnectivityConfig#target_region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetServices">targetServices</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#target_services DataDatabricksMwsNetworkConnectivityConfig#target_services}. |

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#subnets DataDatabricksMwsNetworkConnectivityConfig#subnets}.

---

##### `targetRegion`<sup>Optional</sup> <a name="targetRegion" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetRegion"></a>

```typescript
public readonly targetRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#target_region DataDatabricksMwsNetworkConnectivityConfig#target_region}.

---

##### `targetServices`<sup>Optional</sup> <a name="targetServices" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetServices"></a>

```typescript
public readonly targetServices: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#target_services DataDatabricksMwsNetworkConnectivityConfig#target_services}.

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

const dataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules: dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules.property.azurePrivateEndpointRules">azurePrivateEndpointRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>[]</code> | azure_private_endpoint_rules block. |

---

##### `azurePrivateEndpointRules`<sup>Optional</sup> <a name="azurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules.property.azurePrivateEndpointRules"></a>

```typescript
public readonly azurePrivateEndpointRules: IResolvable | DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>[]

azure_private_endpoint_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#azure_private_endpoint_rules DataDatabricksMwsNetworkConnectivityConfig#azure_private_endpoint_rules}

---

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

const dataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules: dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.connectionState">connectionState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#connection_state DataDatabricksMwsNetworkConnectivityConfig#connection_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.creationTime">creationTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivated">deactivated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#deactivated DataDatabricksMwsNetworkConnectivityConfig#deactivated}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivatedAt">deactivatedAt</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#deactivated_at DataDatabricksMwsNetworkConnectivityConfig#deactivated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.endpointName">endpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#endpoint_name DataDatabricksMwsNetworkConnectivityConfig#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#group_id DataDatabricksMwsNetworkConnectivityConfig#group_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.networkConnectivityConfigId">networkConnectivityConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#resource_id DataDatabricksMwsNetworkConnectivityConfig#resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.ruleId">ruleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#rule_id DataDatabricksMwsNetworkConnectivityConfig#rule_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.updatedTime">updatedTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}. |

---

##### `connectionState`<sup>Optional</sup> <a name="connectionState" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.connectionState"></a>

```typescript
public readonly connectionState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#connection_state DataDatabricksMwsNetworkConnectivityConfig#connection_state}.

---

##### `creationTime`<sup>Optional</sup> <a name="creationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#creation_time DataDatabricksMwsNetworkConnectivityConfig#creation_time}.

---

##### `deactivated`<sup>Optional</sup> <a name="deactivated" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivated"></a>

```typescript
public readonly deactivated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#deactivated DataDatabricksMwsNetworkConnectivityConfig#deactivated}.

---

##### `deactivatedAt`<sup>Optional</sup> <a name="deactivatedAt" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivatedAt"></a>

```typescript
public readonly deactivatedAt: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#deactivated_at DataDatabricksMwsNetworkConnectivityConfig#deactivated_at}.

---

##### `endpointName`<sup>Optional</sup> <a name="endpointName" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#endpoint_name DataDatabricksMwsNetworkConnectivityConfig#endpoint_name}.

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#group_id DataDatabricksMwsNetworkConnectivityConfig#group_id}.

---

##### `networkConnectivityConfigId`<sup>Optional</sup> <a name="networkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.networkConnectivityConfigId"></a>

```typescript
public readonly networkConnectivityConfigId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#network_connectivity_config_id DataDatabricksMwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#resource_id DataDatabricksMwsNetworkConnectivityConfig#resource_id}.

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#rule_id DataDatabricksMwsNetworkConnectivityConfig#rule_id}.

---

##### `updatedTime`<sup>Optional</sup> <a name="updatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.updatedTime"></a>

```typescript
public readonly updatedTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/mws_network_connectivity_config#updated_time DataDatabricksMwsNetworkConnectivityConfig#updated_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

new dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resetCidrBlocks"></a>

```typescript
public resetCidrBlocks(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocksInput"></a>

```typescript
public readonly cidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

new dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetRegion">resetTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetServices">resetTargetServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetSubnets"></a>

```typescript
public resetSubnets(): void
```

##### `resetTargetRegion` <a name="resetTargetRegion" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetRegion"></a>

```typescript
public resetTargetRegion(): void
```

##### `resetTargetServices` <a name="resetTargetServices" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetServices"></a>

```typescript
public resetTargetServices(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegionInput">targetRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServicesInput">targetServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegion">targetRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServices">targetServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `targetRegionInput`<sup>Optional</sup> <a name="targetRegionInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegionInput"></a>

```typescript
public readonly targetRegionInput: string;
```

- *Type:* string

---

##### `targetServicesInput`<sup>Optional</sup> <a name="targetServicesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServicesInput"></a>

```typescript
public readonly targetServicesInput: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `targetRegion`<sup>Required</sup> <a name="targetRegion" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegion"></a>

```typescript
public readonly targetRegion: string;
```

- *Type:* string

---

##### `targetServices`<sup>Required</sup> <a name="targetServices" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServices"></a>

```typescript
public readonly targetServices: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

new dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule">putAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule">putAzureServiceEndpointRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAwsStableIpRule">resetAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAzureServiceEndpointRule">resetAzureServiceEndpointRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsStableIpRule` <a name="putAwsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule"></a>

```typescript
public putAwsStableIpRule(value: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---

##### `putAzureServiceEndpointRule` <a name="putAzureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule"></a>

```typescript
public putAzureServiceEndpointRule(value: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---

##### `resetAwsStableIpRule` <a name="resetAwsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAwsStableIpRule"></a>

```typescript
public resetAwsStableIpRule(): void
```

##### `resetAzureServiceEndpointRule` <a name="resetAzureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAzureServiceEndpointRule"></a>

```typescript
public resetAzureServiceEndpointRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRule">awsStableIpRule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRule">azureServiceEndpointRule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRuleInput">awsStableIpRuleInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRuleInput">azureServiceEndpointRuleInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsStableIpRule`<sup>Required</sup> <a name="awsStableIpRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRule"></a>

```typescript
public readonly awsStableIpRule: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference</a>

---

##### `azureServiceEndpointRule`<sup>Required</sup> <a name="azureServiceEndpointRule" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRule"></a>

```typescript
public readonly azureServiceEndpointRule: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference</a>

---

##### `awsStableIpRuleInput`<sup>Optional</sup> <a name="awsStableIpRuleInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRuleInput"></a>

```typescript
public readonly awsStableIpRuleInput: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---

##### `azureServiceEndpointRuleInput`<sup>Optional</sup> <a name="azureServiceEndpointRuleInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRuleInput"></a>

```typescript
public readonly azureServiceEndpointRuleInput: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

new dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules">putDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules">putTargetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetDefaultRules">resetDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetTargetRules">resetTargetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefaultRules` <a name="putDefaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules"></a>

```typescript
public putDefaultRules(value: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---

##### `putTargetRules` <a name="putTargetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules"></a>

```typescript
public putTargetRules(value: DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---

##### `resetDefaultRules` <a name="resetDefaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetDefaultRules"></a>

```typescript
public resetDefaultRules(): void
```

##### `resetTargetRules` <a name="resetTargetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.resetTargetRules"></a>

```typescript
public resetTargetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRules">defaultRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRules">targetRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRulesInput">defaultRulesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRulesInput">targetRulesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultRules`<sup>Required</sup> <a name="defaultRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRules"></a>

```typescript
public readonly defaultRules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference</a>

---

##### `targetRules`<sup>Required</sup> <a name="targetRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRules"></a>

```typescript
public readonly targetRules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference</a>

---

##### `defaultRulesInput`<sup>Optional</sup> <a name="defaultRulesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRulesInput"></a>

```typescript
public readonly defaultRulesInput: DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---

##### `targetRulesInput`<sup>Optional</sup> <a name="targetRulesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRulesInput"></a>

```typescript
public readonly targetRulesInput: DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMwsNetworkConnectivityConfigEgressConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfig">DataDatabricksMwsNetworkConnectivityConfigEgressConfig</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

new dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get"></a>

```typescript
public get(index: number): DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>[]

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

new dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetConnectionState">resetConnectionState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetCreationTime">resetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivated">resetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivatedAt">resetDeactivatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetEndpointName">resetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId">resetNetworkConnectivityConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetRuleId">resetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetUpdatedTime">resetUpdatedTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionState` <a name="resetConnectionState" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetConnectionState"></a>

```typescript
public resetConnectionState(): void
```

##### `resetCreationTime` <a name="resetCreationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetCreationTime"></a>

```typescript
public resetCreationTime(): void
```

##### `resetDeactivated` <a name="resetDeactivated" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivated"></a>

```typescript
public resetDeactivated(): void
```

##### `resetDeactivatedAt` <a name="resetDeactivatedAt" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivatedAt"></a>

```typescript
public resetDeactivatedAt(): void
```

##### `resetEndpointName` <a name="resetEndpointName" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetEndpointName"></a>

```typescript
public resetEndpointName(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetNetworkConnectivityConfigId` <a name="resetNetworkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId"></a>

```typescript
public resetNetworkConnectivityConfigId(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetRuleId` <a name="resetRuleId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetRuleId"></a>

```typescript
public resetRuleId(): void
```

##### `resetUpdatedTime` <a name="resetUpdatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetUpdatedTime"></a>

```typescript
public resetUpdatedTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionStateInput">connectionStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTimeInput">creationTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAtInput">deactivatedAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedInput">deactivatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput">networkConnectivityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTimeInput">updatedTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionState">connectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTime">creationTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivated">deactivated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAt">deactivatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigId">networkConnectivityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTime">updatedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionStateInput`<sup>Optional</sup> <a name="connectionStateInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionStateInput"></a>

```typescript
public readonly connectionStateInput: string;
```

- *Type:* string

---

##### `creationTimeInput`<sup>Optional</sup> <a name="creationTimeInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTimeInput"></a>

```typescript
public readonly creationTimeInput: number;
```

- *Type:* number

---

##### `deactivatedAtInput`<sup>Optional</sup> <a name="deactivatedAtInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAtInput"></a>

```typescript
public readonly deactivatedAtInput: number;
```

- *Type:* number

---

##### `deactivatedInput`<sup>Optional</sup> <a name="deactivatedInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedInput"></a>

```typescript
public readonly deactivatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `networkConnectivityConfigIdInput`<sup>Optional</sup> <a name="networkConnectivityConfigIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput"></a>

```typescript
public readonly networkConnectivityConfigIdInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `updatedTimeInput`<sup>Optional</sup> <a name="updatedTimeInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTimeInput"></a>

```typescript
public readonly updatedTimeInput: number;
```

- *Type:* number

---

##### `connectionState`<sup>Required</sup> <a name="connectionState" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionState"></a>

```typescript
public readonly connectionState: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: number;
```

- *Type:* number

---

##### `deactivated`<sup>Required</sup> <a name="deactivated" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivated"></a>

```typescript
public readonly deactivated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deactivatedAt`<sup>Required</sup> <a name="deactivatedAt" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAt"></a>

```typescript
public readonly deactivatedAt: number;
```

- *Type:* number

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `networkConnectivityConfigId`<sup>Required</sup> <a name="networkConnectivityConfigId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigId"></a>

```typescript
public readonly networkConnectivityConfigId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `updatedTime`<sup>Required</sup> <a name="updatedTime" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTime"></a>

```typescript
public readonly updatedTime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>

---


### DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference <a name="DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksMwsNetworkConnectivityConfig } from '@cdktf/provider-databricks'

new dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules">putAzurePrivateEndpointRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAzurePrivateEndpointRules">resetAzurePrivateEndpointRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzurePrivateEndpointRules` <a name="putAzurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules"></a>

```typescript
public putAzurePrivateEndpointRules(value: IResolvable | DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>[]

---

##### `resetAzurePrivateEndpointRules` <a name="resetAzurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAzurePrivateEndpointRules"></a>

```typescript
public resetAzurePrivateEndpointRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRules">azurePrivateEndpointRules</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRulesInput">azurePrivateEndpointRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azurePrivateEndpointRules`<sup>Required</sup> <a name="azurePrivateEndpointRules" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRules"></a>

```typescript
public readonly azurePrivateEndpointRules: DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList</a>

---

##### `azurePrivateEndpointRulesInput`<sup>Optional</sup> <a name="azurePrivateEndpointRulesInput" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRulesInput"></a>

```typescript
public readonly azurePrivateEndpointRulesInput: IResolvable | DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsNetworkConnectivityConfig.DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules">DataDatabricksMwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---



