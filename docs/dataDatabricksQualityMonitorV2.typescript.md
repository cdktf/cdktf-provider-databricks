# `dataDatabricksQualityMonitorV2` Submodule <a name="`dataDatabricksQualityMonitorV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksQualityMonitorV2 <a name="DataDatabricksQualityMonitorV2" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/quality_monitor_v2 databricks_quality_monitor_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer"></a>

```typescript
import { dataDatabricksQualityMonitorV2 } from '@cdktf/provider-databricks'

new dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2(scope: Construct, id: string, config: DataDatabricksQualityMonitorV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config">DataDatabricksQualityMonitorV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config">DataDatabricksQualityMonitorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksQualityMonitorV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct"></a>

```typescript
import { dataDatabricksQualityMonitorV2 } from '@cdktf/provider-databricks'

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement"></a>

```typescript
import { dataDatabricksQualityMonitorV2 } from '@cdktf/provider-databricks'

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource"></a>

```typescript
import { dataDatabricksQualityMonitorV2 } from '@cdktf/provider-databricks'

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport"></a>

```typescript
import { dataDatabricksQualityMonitorV2 } from '@cdktf/provider-databricks'

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksQualityMonitorV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksQualityMonitorV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksQualityMonitorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/quality_monitor_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksQualityMonitorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.anomalyDetectionConfig">anomalyDetectionConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `anomalyDetectionConfig`<sup>Required</sup> <a name="anomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.anomalyDetectionConfig"></a>

```typescript
public readonly anomalyDetectionConfig: DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference</a>

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksQualityMonitorV2AnomalyDetectionConfig <a name="DataDatabricksQualityMonitorV2AnomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig.Initializer"></a>

```typescript
import { dataDatabricksQualityMonitorV2 } from '@cdktf/provider-databricks'

const dataDatabricksQualityMonitorV2AnomalyDetectionConfig: dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig = { ... }
```


### DataDatabricksQualityMonitorV2Config <a name="DataDatabricksQualityMonitorV2Config" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.Initializer"></a>

```typescript
import { dataDatabricksQualityMonitorV2 } from '@cdktf/provider-databricks'

const dataDatabricksQualityMonitorV2Config: dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectType">objectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}.

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference <a name="DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksQualityMonitorV2 } from '@cdktf/provider-databricks'

new dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId">lastRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus">latestRunStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig">DataDatabricksQualityMonitorV2AnomalyDetectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastRunId`<sup>Required</sup> <a name="lastRunId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId"></a>

```typescript
public readonly lastRunId: string;
```

- *Type:* string

---

##### `latestRunStatus`<sup>Required</sup> <a name="latestRunStatus" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus"></a>

```typescript
public readonly latestRunStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksQualityMonitorV2AnomalyDetectionConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig">DataDatabricksQualityMonitorV2AnomalyDetectionConfig</a>

---



