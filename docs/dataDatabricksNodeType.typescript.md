# `data_databricks_node_type`

Refer to the Terraform Registory for docs: [`data_databricks_node_type`](https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type).

# `dataDatabricksNodeType` Submodule <a name="`dataDatabricksNodeType` Submodule" id="@cdktf/provider-databricks.dataDatabricksNodeType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksNodeType <a name="DataDatabricksNodeType" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type databricks_node_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer"></a>

```typescript
import { dataDatabricksNodeType } from '@cdktf/provider-databricks'

new dataDatabricksNodeType.DataDatabricksNodeType(scope: Construct, id: string, config?: DataDatabricksNodeTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig">DataDatabricksNodeTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig">DataDatabricksNodeTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetCategory">resetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetFleet">resetFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGbPerCore">resetGbPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGraviton">resetGraviton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetIsIoCacheEnabled">resetIsIoCacheEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDisk">resetLocalDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDiskMinSize">resetLocalDiskMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinCores">resetMinCores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinGpus">resetMinGpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinMemoryGb">resetMinMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonDriverCapable">resetPhotonDriverCapable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonWorkerCapable">resetPhotonWorkerCapable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetSupportPortForwarding">resetSupportPortForwarding</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCategory` <a name="resetCategory" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetCategory"></a>

```typescript
public resetCategory(): void
```

##### `resetFleet` <a name="resetFleet" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetFleet"></a>

```typescript
public resetFleet(): void
```

##### `resetGbPerCore` <a name="resetGbPerCore" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGbPerCore"></a>

```typescript
public resetGbPerCore(): void
```

##### `resetGraviton` <a name="resetGraviton" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetGraviton"></a>

```typescript
public resetGraviton(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsIoCacheEnabled` <a name="resetIsIoCacheEnabled" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetIsIoCacheEnabled"></a>

```typescript
public resetIsIoCacheEnabled(): void
```

##### `resetLocalDisk` <a name="resetLocalDisk" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDisk"></a>

```typescript
public resetLocalDisk(): void
```

##### `resetLocalDiskMinSize` <a name="resetLocalDiskMinSize" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetLocalDiskMinSize"></a>

```typescript
public resetLocalDiskMinSize(): void
```

##### `resetMinCores` <a name="resetMinCores" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinCores"></a>

```typescript
public resetMinCores(): void
```

##### `resetMinGpus` <a name="resetMinGpus" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinGpus"></a>

```typescript
public resetMinGpus(): void
```

##### `resetMinMemoryGb` <a name="resetMinMemoryGb" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetMinMemoryGb"></a>

```typescript
public resetMinMemoryGb(): void
```

##### `resetPhotonDriverCapable` <a name="resetPhotonDriverCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonDriverCapable"></a>

```typescript
public resetPhotonDriverCapable(): void
```

##### `resetPhotonWorkerCapable` <a name="resetPhotonWorkerCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetPhotonWorkerCapable"></a>

```typescript
public resetPhotonWorkerCapable(): void
```

##### `resetSupportPortForwarding` <a name="resetSupportPortForwarding" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.resetSupportPortForwarding"></a>

```typescript
public resetSupportPortForwarding(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isConstruct"></a>

```typescript
import { dataDatabricksNodeType } from '@cdktf/provider-databricks'

dataDatabricksNodeType.DataDatabricksNodeType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformElement"></a>

```typescript
import { dataDatabricksNodeType } from '@cdktf/provider-databricks'

dataDatabricksNodeType.DataDatabricksNodeType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformDataSource"></a>

```typescript
import { dataDatabricksNodeType } from '@cdktf/provider-databricks'

dataDatabricksNodeType.DataDatabricksNodeType.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleetInput">fleetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCoreInput">gbPerCoreInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gravitonInput">gravitonInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabledInput">isIoCacheEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskInput">localDiskInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSizeInput">localDiskMinSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCoresInput">minCoresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpusInput">minGpusInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGbInput">minMemoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapableInput">photonDriverCapableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapableInput">photonWorkerCapableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwardingInput">supportPortForwardingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleet">fleet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCore">gbPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.graviton">graviton</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabled">isIoCacheEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDisk">localDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSize">localDiskMinSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCores">minCores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpus">minGpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGb">minMemoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapable">photonDriverCapable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapable">photonWorkerCapable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwarding">supportPortForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `fleetInput`<sup>Optional</sup> <a name="fleetInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleetInput"></a>

```typescript
public readonly fleetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gbPerCoreInput`<sup>Optional</sup> <a name="gbPerCoreInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCoreInput"></a>

```typescript
public readonly gbPerCoreInput: number;
```

- *Type:* number

---

##### `gravitonInput`<sup>Optional</sup> <a name="gravitonInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gravitonInput"></a>

```typescript
public readonly gravitonInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isIoCacheEnabledInput`<sup>Optional</sup> <a name="isIoCacheEnabledInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabledInput"></a>

```typescript
public readonly isIoCacheEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localDiskInput`<sup>Optional</sup> <a name="localDiskInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskInput"></a>

```typescript
public readonly localDiskInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localDiskMinSizeInput`<sup>Optional</sup> <a name="localDiskMinSizeInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSizeInput"></a>

```typescript
public readonly localDiskMinSizeInput: number;
```

- *Type:* number

---

##### `minCoresInput`<sup>Optional</sup> <a name="minCoresInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCoresInput"></a>

```typescript
public readonly minCoresInput: number;
```

- *Type:* number

---

##### `minGpusInput`<sup>Optional</sup> <a name="minGpusInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpusInput"></a>

```typescript
public readonly minGpusInput: number;
```

- *Type:* number

---

##### `minMemoryGbInput`<sup>Optional</sup> <a name="minMemoryGbInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGbInput"></a>

```typescript
public readonly minMemoryGbInput: number;
```

- *Type:* number

---

##### `photonDriverCapableInput`<sup>Optional</sup> <a name="photonDriverCapableInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapableInput"></a>

```typescript
public readonly photonDriverCapableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `photonWorkerCapableInput`<sup>Optional</sup> <a name="photonWorkerCapableInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapableInput"></a>

```typescript
public readonly photonWorkerCapableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportPortForwardingInput`<sup>Optional</sup> <a name="supportPortForwardingInput" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwardingInput"></a>

```typescript
public readonly supportPortForwardingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.fleet"></a>

```typescript
public readonly fleet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gbPerCore`<sup>Required</sup> <a name="gbPerCore" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.gbPerCore"></a>

```typescript
public readonly gbPerCore: number;
```

- *Type:* number

---

##### `graviton`<sup>Required</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.graviton"></a>

```typescript
public readonly graviton: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isIoCacheEnabled`<sup>Required</sup> <a name="isIoCacheEnabled" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.isIoCacheEnabled"></a>

```typescript
public readonly isIoCacheEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localDisk`<sup>Required</sup> <a name="localDisk" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDisk"></a>

```typescript
public readonly localDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localDiskMinSize`<sup>Required</sup> <a name="localDiskMinSize" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.localDiskMinSize"></a>

```typescript
public readonly localDiskMinSize: number;
```

- *Type:* number

---

##### `minCores`<sup>Required</sup> <a name="minCores" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minCores"></a>

```typescript
public readonly minCores: number;
```

- *Type:* number

---

##### `minGpus`<sup>Required</sup> <a name="minGpus" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minGpus"></a>

```typescript
public readonly minGpus: number;
```

- *Type:* number

---

##### `minMemoryGb`<sup>Required</sup> <a name="minMemoryGb" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.minMemoryGb"></a>

```typescript
public readonly minMemoryGb: number;
```

- *Type:* number

---

##### `photonDriverCapable`<sup>Required</sup> <a name="photonDriverCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonDriverCapable"></a>

```typescript
public readonly photonDriverCapable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `photonWorkerCapable`<sup>Required</sup> <a name="photonWorkerCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.photonWorkerCapable"></a>

```typescript
public readonly photonWorkerCapable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `supportPortForwarding`<sup>Required</sup> <a name="supportPortForwarding" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.supportPortForwarding"></a>

```typescript
public readonly supportPortForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksNodeTypeConfig <a name="DataDatabricksNodeTypeConfig" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.Initializer"></a>

```typescript
import { dataDatabricksNodeType } from '@cdktf/provider-databricks'

const dataDatabricksNodeTypeConfig: dataDatabricksNodeType.DataDatabricksNodeTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#category DataDatabricksNodeType#category}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.fleet">fleet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#fleet DataDatabricksNodeType#fleet}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.gbPerCore">gbPerCore</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.graviton">graviton</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#graviton DataDatabricksNodeType#graviton}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#id DataDatabricksNodeType#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.isIoCacheEnabled">isIoCacheEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDisk">localDisk</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#local_disk DataDatabricksNodeType#local_disk}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDiskMinSize">localDiskMinSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#local_disk_min_size DataDatabricksNodeType#local_disk_min_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minCores">minCores</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#min_cores DataDatabricksNodeType#min_cores}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minGpus">minGpus</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#min_gpus DataDatabricksNodeType#min_gpus}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minMemoryGb">minMemoryGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonDriverCapable">photonDriverCapable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonWorkerCapable">photonWorkerCapable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.supportPortForwarding">supportPortForwarding</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `category`<sup>Optional</sup> <a name="category" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#category DataDatabricksNodeType#category}.

---

##### `fleet`<sup>Optional</sup> <a name="fleet" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.fleet"></a>

```typescript
public readonly fleet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#fleet DataDatabricksNodeType#fleet}.

---

##### `gbPerCore`<sup>Optional</sup> <a name="gbPerCore" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.gbPerCore"></a>

```typescript
public readonly gbPerCore: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}.

---

##### `graviton`<sup>Optional</sup> <a name="graviton" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.graviton"></a>

```typescript
public readonly graviton: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#graviton DataDatabricksNodeType#graviton}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#id DataDatabricksNodeType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isIoCacheEnabled`<sup>Optional</sup> <a name="isIoCacheEnabled" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.isIoCacheEnabled"></a>

```typescript
public readonly isIoCacheEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}.

---

##### `localDisk`<sup>Optional</sup> <a name="localDisk" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDisk"></a>

```typescript
public readonly localDisk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#local_disk DataDatabricksNodeType#local_disk}.

---

##### `localDiskMinSize`<sup>Optional</sup> <a name="localDiskMinSize" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.localDiskMinSize"></a>

```typescript
public readonly localDiskMinSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#local_disk_min_size DataDatabricksNodeType#local_disk_min_size}.

---

##### `minCores`<sup>Optional</sup> <a name="minCores" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minCores"></a>

```typescript
public readonly minCores: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#min_cores DataDatabricksNodeType#min_cores}.

---

##### `minGpus`<sup>Optional</sup> <a name="minGpus" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minGpus"></a>

```typescript
public readonly minGpus: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#min_gpus DataDatabricksNodeType#min_gpus}.

---

##### `minMemoryGb`<sup>Optional</sup> <a name="minMemoryGb" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.minMemoryGb"></a>

```typescript
public readonly minMemoryGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}.

---

##### `photonDriverCapable`<sup>Optional</sup> <a name="photonDriverCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonDriverCapable"></a>

```typescript
public readonly photonDriverCapable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}.

---

##### `photonWorkerCapable`<sup>Optional</sup> <a name="photonWorkerCapable" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.photonWorkerCapable"></a>

```typescript
public readonly photonWorkerCapable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}.

---

##### `supportPortForwarding`<sup>Optional</sup> <a name="supportPortForwarding" id="@cdktf/provider-databricks.dataDatabricksNodeType.DataDatabricksNodeTypeConfig.property.supportPortForwarding"></a>

```typescript
public readonly supportPortForwarding: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.1/docs/data-sources/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}.

---



