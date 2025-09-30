# `dataDatabricksAlertV2` Submodule <a name="`dataDatabricksAlertV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksAlertV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAlertV2 <a name="DataDatabricksAlertV2" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2 databricks_alert_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertV2.DataDatabricksAlertV2(scope: Construct, id: string, config?: DataDatabricksAlertV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config">DataDatabricksAlertV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config">DataDatabricksAlertV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation">putEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putRunAs">putRunAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomDescription">resetCustomDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomSummary">resetCustomSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetEvaluation">resetEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetParentPath">resetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetQueryText">resetQueryText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetRunAs">resetRunAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetRunAsUserName">resetRunAsUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetWarehouseId">resetWarehouseId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEvaluation` <a name="putEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation"></a>

```typescript
public putEvaluation(value: DataDatabricksAlertV2Evaluation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>

---

##### `putRunAs` <a name="putRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putRunAs"></a>

```typescript
public putRunAs(value: DataDatabricksAlertV2RunAs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putRunAs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule"></a>

```typescript
public putSchedule(value: DataDatabricksAlertV2Schedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>

---

##### `resetCustomDescription` <a name="resetCustomDescription" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomDescription"></a>

```typescript
public resetCustomDescription(): void
```

##### `resetCustomSummary` <a name="resetCustomSummary" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomSummary"></a>

```typescript
public resetCustomSummary(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEvaluation` <a name="resetEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetEvaluation"></a>

```typescript
public resetEvaluation(): void
```

##### `resetParentPath` <a name="resetParentPath" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetParentPath"></a>

```typescript
public resetParentPath(): void
```

##### `resetQueryText` <a name="resetQueryText" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetQueryText"></a>

```typescript
public resetQueryText(): void
```

##### `resetRunAs` <a name="resetRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetRunAs"></a>

```typescript
public resetRunAs(): void
```

##### `resetRunAsUserName` <a name="resetRunAsUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetRunAsUserName"></a>

```typescript
public resetRunAsUserName(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetWarehouseId` <a name="resetWarehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetWarehouseId"></a>

```typescript
public resetWarehouseId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAlertV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksAlertV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAlertV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAlertV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAlertV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.effectiveRunAs">effectiveRunAs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference">DataDatabricksAlertV2EffectiveRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluation">evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference">DataDatabricksAlertV2EvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycleState">lifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.ownerUserName">ownerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAs">runAs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference">DataDatabricksAlertV2RunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference">DataDatabricksAlertV2ScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescriptionInput">customDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummaryInput">customSummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluationInput">evaluationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPathInput">parentPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryTextInput">queryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsInput">runAsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserNameInput">runAsUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.scheduleInput">scheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseIdInput">warehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescription">customDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummary">customSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPath">parentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryText">queryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserName">runAsUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseId">warehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveRunAs`<sup>Required</sup> <a name="effectiveRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.effectiveRunAs"></a>

```typescript
public readonly effectiveRunAs: DataDatabricksAlertV2EffectiveRunAsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference">DataDatabricksAlertV2EffectiveRunAsOutputReference</a>

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluation"></a>

```typescript
public readonly evaluation: DataDatabricksAlertV2EvaluationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference">DataDatabricksAlertV2EvaluationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycleState"></a>

```typescript
public readonly lifecycleState: string;
```

- *Type:* string

---

##### `ownerUserName`<sup>Required</sup> <a name="ownerUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.ownerUserName"></a>

```typescript
public readonly ownerUserName: string;
```

- *Type:* string

---

##### `runAs`<sup>Required</sup> <a name="runAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAs"></a>

```typescript
public readonly runAs: DataDatabricksAlertV2RunAsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference">DataDatabricksAlertV2RunAsOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.schedule"></a>

```typescript
public readonly schedule: DataDatabricksAlertV2ScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference">DataDatabricksAlertV2ScheduleOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `customDescriptionInput`<sup>Optional</sup> <a name="customDescriptionInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescriptionInput"></a>

```typescript
public readonly customDescriptionInput: string;
```

- *Type:* string

---

##### `customSummaryInput`<sup>Optional</sup> <a name="customSummaryInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummaryInput"></a>

```typescript
public readonly customSummaryInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `evaluationInput`<sup>Optional</sup> <a name="evaluationInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluationInput"></a>

```typescript
public readonly evaluationInput: IResolvable | DataDatabricksAlertV2Evaluation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>

---

##### `parentPathInput`<sup>Optional</sup> <a name="parentPathInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPathInput"></a>

```typescript
public readonly parentPathInput: string;
```

- *Type:* string

---

##### `queryTextInput`<sup>Optional</sup> <a name="queryTextInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryTextInput"></a>

```typescript
public readonly queryTextInput: string;
```

- *Type:* string

---

##### `runAsInput`<sup>Optional</sup> <a name="runAsInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsInput"></a>

```typescript
public readonly runAsInput: IResolvable | DataDatabricksAlertV2RunAs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a>

---

##### `runAsUserNameInput`<sup>Optional</sup> <a name="runAsUserNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserNameInput"></a>

```typescript
public readonly runAsUserNameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: IResolvable | DataDatabricksAlertV2Schedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>

---

##### `warehouseIdInput`<sup>Optional</sup> <a name="warehouseIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseIdInput"></a>

```typescript
public readonly warehouseIdInput: string;
```

- *Type:* string

---

##### `customDescription`<sup>Required</sup> <a name="customDescription" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescription"></a>

```typescript
public readonly customDescription: string;
```

- *Type:* string

---

##### `customSummary`<sup>Required</sup> <a name="customSummary" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummary"></a>

```typescript
public readonly customSummary: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `parentPath`<sup>Required</sup> <a name="parentPath" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

---

##### `queryText`<sup>Required</sup> <a name="queryText" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryText"></a>

```typescript
public readonly queryText: string;
```

- *Type:* string

---

##### `runAsUserName`<sup>Required</sup> <a name="runAsUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserName"></a>

```typescript
public readonly runAsUserName: string;
```

- *Type:* string

---

##### `warehouseId`<sup>Required</sup> <a name="warehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAlertV2Config <a name="DataDatabricksAlertV2Config" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertV2Config: dataDatabricksAlertV2.DataDatabricksAlertV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customDescription">customDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#custom_description DataDatabricksAlertV2#custom_description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customSummary">customSummary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#custom_summary DataDatabricksAlertV2#custom_summary}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display_name DataDatabricksAlertV2#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.evaluation">evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#evaluation DataDatabricksAlertV2#evaluation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.parentPath">parentPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#parent_path DataDatabricksAlertV2#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.queryText">queryText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#query_text DataDatabricksAlertV2#query_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.runAs">runAs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#run_as DataDatabricksAlertV2#run_as}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.runAsUserName">runAsUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#run_as_user_name DataDatabricksAlertV2#run_as_user_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#schedule DataDatabricksAlertV2#schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.warehouseId">warehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#warehouse_id DataDatabricksAlertV2#warehouse_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customDescription`<sup>Optional</sup> <a name="customDescription" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customDescription"></a>

```typescript
public readonly customDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#custom_description DataDatabricksAlertV2#custom_description}.

---

##### `customSummary`<sup>Optional</sup> <a name="customSummary" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customSummary"></a>

```typescript
public readonly customSummary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#custom_summary DataDatabricksAlertV2#custom_summary}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display_name DataDatabricksAlertV2#display_name}.

---

##### `evaluation`<sup>Optional</sup> <a name="evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.evaluation"></a>

```typescript
public readonly evaluation: DataDatabricksAlertV2Evaluation;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#evaluation DataDatabricksAlertV2#evaluation}.

---

##### `parentPath`<sup>Optional</sup> <a name="parentPath" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.parentPath"></a>

```typescript
public readonly parentPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#parent_path DataDatabricksAlertV2#parent_path}.

---

##### `queryText`<sup>Optional</sup> <a name="queryText" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.queryText"></a>

```typescript
public readonly queryText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#query_text DataDatabricksAlertV2#query_text}.

---

##### `runAs`<sup>Optional</sup> <a name="runAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.runAs"></a>

```typescript
public readonly runAs: DataDatabricksAlertV2RunAs;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#run_as DataDatabricksAlertV2#run_as}.

---

##### `runAsUserName`<sup>Optional</sup> <a name="runAsUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.runAsUserName"></a>

```typescript
public readonly runAsUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#run_as_user_name DataDatabricksAlertV2#run_as_user_name}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.schedule"></a>

```typescript
public readonly schedule: DataDatabricksAlertV2Schedule;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#schedule DataDatabricksAlertV2#schedule}.

---

##### `warehouseId`<sup>Optional</sup> <a name="warehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.warehouseId"></a>

```typescript
public readonly warehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#warehouse_id DataDatabricksAlertV2#warehouse_id}.

---

### DataDatabricksAlertV2EffectiveRunAs <a name="DataDatabricksAlertV2EffectiveRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertV2EffectiveRunAs: dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}. |

---

##### `servicePrincipalName`<sup>Optional</sup> <a name="servicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}.

---

### DataDatabricksAlertV2Evaluation <a name="DataDatabricksAlertV2Evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertV2Evaluation: dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#comparison_operator DataDatabricksAlertV2#comparison_operator}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.emptyResultState">emptyResultState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#empty_result_state DataDatabricksAlertV2#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#notification DataDatabricksAlertV2#notification}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#source DataDatabricksAlertV2#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#threshold DataDatabricksAlertV2#threshold}. |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#comparison_operator DataDatabricksAlertV2#comparison_operator}.

---

##### `emptyResultState`<sup>Optional</sup> <a name="emptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.emptyResultState"></a>

```typescript
public readonly emptyResultState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#empty_result_state DataDatabricksAlertV2#empty_result_state}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.notification"></a>

```typescript
public readonly notification: DataDatabricksAlertV2EvaluationNotification;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#notification DataDatabricksAlertV2#notification}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.source"></a>

```typescript
public readonly source: DataDatabricksAlertV2EvaluationSource;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#source DataDatabricksAlertV2#source}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.threshold"></a>

```typescript
public readonly threshold: DataDatabricksAlertV2EvaluationThreshold;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#threshold DataDatabricksAlertV2#threshold}.

---

### DataDatabricksAlertV2EvaluationNotification <a name="DataDatabricksAlertV2EvaluationNotification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertV2EvaluationNotification: dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.notifyOnOk">notifyOnOk</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#notify_on_ok DataDatabricksAlertV2#notify_on_ok}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.retriggerSeconds">retriggerSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#retrigger_seconds DataDatabricksAlertV2#retrigger_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.subscriptions">subscriptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#subscriptions DataDatabricksAlertV2#subscriptions}. |

---

##### `notifyOnOk`<sup>Optional</sup> <a name="notifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.notifyOnOk"></a>

```typescript
public readonly notifyOnOk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#notify_on_ok DataDatabricksAlertV2#notify_on_ok}.

---

##### `retriggerSeconds`<sup>Optional</sup> <a name="retriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.retriggerSeconds"></a>

```typescript
public readonly retriggerSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#retrigger_seconds DataDatabricksAlertV2#retrigger_seconds}.

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.subscriptions"></a>

```typescript
public readonly subscriptions: IResolvable | DataDatabricksAlertV2EvaluationNotificationSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#subscriptions DataDatabricksAlertV2#subscriptions}.

---

### DataDatabricksAlertV2EvaluationNotificationSubscriptions <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertV2EvaluationNotificationSubscriptions: dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.destinationId">destinationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#destination_id DataDatabricksAlertV2#destination_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.userEmail">userEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#user_email DataDatabricksAlertV2#user_email}. |

---

##### `destinationId`<sup>Optional</sup> <a name="destinationId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.destinationId"></a>

```typescript
public readonly destinationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#destination_id DataDatabricksAlertV2#destination_id}.

---

##### `userEmail`<sup>Optional</sup> <a name="userEmail" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#user_email DataDatabricksAlertV2#user_email}.

---

### DataDatabricksAlertV2EvaluationSource <a name="DataDatabricksAlertV2EvaluationSource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertV2EvaluationSource: dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.aggregation">aggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.display">display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}.

---

### DataDatabricksAlertV2EvaluationThreshold <a name="DataDatabricksAlertV2EvaluationThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertV2EvaluationThreshold: dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#column DataDatabricksAlertV2#column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#value DataDatabricksAlertV2#value}. |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.column"></a>

```typescript
public readonly column: DataDatabricksAlertV2EvaluationThresholdColumn;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#column DataDatabricksAlertV2#column}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.value"></a>

```typescript
public readonly value: DataDatabricksAlertV2EvaluationThresholdValue;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#value DataDatabricksAlertV2#value}.

---

### DataDatabricksAlertV2EvaluationThresholdColumn <a name="DataDatabricksAlertV2EvaluationThresholdColumn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertV2EvaluationThresholdColumn: dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.aggregation">aggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.display">display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}.

---

### DataDatabricksAlertV2EvaluationThresholdValue <a name="DataDatabricksAlertV2EvaluationThresholdValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertV2EvaluationThresholdValue: dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.boolValue">boolValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#bool_value DataDatabricksAlertV2#bool_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.doubleValue">doubleValue</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#double_value DataDatabricksAlertV2#double_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.stringValue">stringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#string_value DataDatabricksAlertV2#string_value}. |

---

##### `boolValue`<sup>Optional</sup> <a name="boolValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#bool_value DataDatabricksAlertV2#bool_value}.

---

##### `doubleValue`<sup>Optional</sup> <a name="doubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#double_value DataDatabricksAlertV2#double_value}.

---

##### `stringValue`<sup>Optional</sup> <a name="stringValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#string_value DataDatabricksAlertV2#string_value}.

---

### DataDatabricksAlertV2RunAs <a name="DataDatabricksAlertV2RunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertV2RunAs: dataDatabricksAlertV2.DataDatabricksAlertV2RunAs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}. |

---

##### `servicePrincipalName`<sup>Optional</sup> <a name="servicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}.

---

### DataDatabricksAlertV2Schedule <a name="DataDatabricksAlertV2Schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

const dataDatabricksAlertV2Schedule: dataDatabricksAlertV2.DataDatabricksAlertV2Schedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.pauseStatus">pauseStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#pause_status DataDatabricksAlertV2#pause_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.quartzCronSchedule">quartzCronSchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#quartz_cron_schedule DataDatabricksAlertV2#quartz_cron_schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.timezoneId">timezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#timezone_id DataDatabricksAlertV2#timezone_id}. |

---

##### `pauseStatus`<sup>Optional</sup> <a name="pauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.pauseStatus"></a>

```typescript
public readonly pauseStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#pause_status DataDatabricksAlertV2#pause_status}.

---

##### `quartzCronSchedule`<sup>Optional</sup> <a name="quartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.quartzCronSchedule"></a>

```typescript
public readonly quartzCronSchedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#quartz_cron_schedule DataDatabricksAlertV2#quartz_cron_schedule}.

---

##### `timezoneId`<sup>Optional</sup> <a name="timezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#timezone_id DataDatabricksAlertV2#timezone_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAlertV2EffectiveRunAsOutputReference <a name="DataDatabricksAlertV2EffectiveRunAsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetServicePrincipalName">resetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServicePrincipalName` <a name="resetServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetServicePrincipalName"></a>

```typescript
public resetServicePrincipalName(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalNameInput">servicePrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs">DataDatabricksAlertV2EffectiveRunAs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `servicePrincipalNameInput`<sup>Optional</sup> <a name="servicePrincipalNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalNameInput"></a>

```typescript
public readonly servicePrincipalNameInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAlertV2EffectiveRunAs;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs">DataDatabricksAlertV2EffectiveRunAs</a>

---


### DataDatabricksAlertV2EvaluationNotificationOutputReference <a name="DataDatabricksAlertV2EvaluationNotificationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions">putSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetNotifyOnOk">resetNotifyOnOk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetRetriggerSeconds">resetRetriggerSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetSubscriptions">resetSubscriptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubscriptions` <a name="putSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions"></a>

```typescript
public putSubscriptions(value: IResolvable | DataDatabricksAlertV2EvaluationNotificationSubscriptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>[]

---

##### `resetNotifyOnOk` <a name="resetNotifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetNotifyOnOk"></a>

```typescript
public resetNotifyOnOk(): void
```

##### `resetRetriggerSeconds` <a name="resetRetriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetRetriggerSeconds"></a>

```typescript
public resetRetriggerSeconds(): void
```

##### `resetSubscriptions` <a name="resetSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetSubscriptions"></a>

```typescript
public resetSubscriptions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList">DataDatabricksAlertV2EvaluationNotificationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOkInput">notifyOnOkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSecondsInput">retriggerSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptionsInput">subscriptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOk">notifyOnOk</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSeconds">retriggerSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptions"></a>

```typescript
public readonly subscriptions: DataDatabricksAlertV2EvaluationNotificationSubscriptionsList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList">DataDatabricksAlertV2EvaluationNotificationSubscriptionsList</a>

---

##### `notifyOnOkInput`<sup>Optional</sup> <a name="notifyOnOkInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOkInput"></a>

```typescript
public readonly notifyOnOkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retriggerSecondsInput`<sup>Optional</sup> <a name="retriggerSecondsInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSecondsInput"></a>

```typescript
public readonly retriggerSecondsInput: number;
```

- *Type:* number

---

##### `subscriptionsInput`<sup>Optional</sup> <a name="subscriptionsInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptionsInput"></a>

```typescript
public readonly subscriptionsInput: IResolvable | DataDatabricksAlertV2EvaluationNotificationSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>[]

---

##### `notifyOnOk`<sup>Required</sup> <a name="notifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOk"></a>

```typescript
public readonly notifyOnOk: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retriggerSeconds`<sup>Required</sup> <a name="retriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSeconds"></a>

```typescript
public readonly retriggerSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertV2EvaluationNotification;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

---


### DataDatabricksAlertV2EvaluationNotificationSubscriptionsList <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptionsList" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get"></a>

```typescript
public get(index: number): DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertV2EvaluationNotificationSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>[]

---


### DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetDestinationId">resetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetUserEmail">resetUserEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationId` <a name="resetDestinationId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetDestinationId"></a>

```typescript
public resetDestinationId(): void
```

##### `resetUserEmail` <a name="resetUserEmail" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetUserEmail"></a>

```typescript
public resetUserEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput">destinationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmailInput">userEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationId">destinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmail">userEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationIdInput`<sup>Optional</sup> <a name="destinationIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput"></a>

```typescript
public readonly destinationIdInput: string;
```

- *Type:* string

---

##### `userEmailInput`<sup>Optional</sup> <a name="userEmailInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmailInput"></a>

```typescript
public readonly userEmailInput: string;
```

- *Type:* string

---

##### `destinationId`<sup>Required</sup> <a name="destinationId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationId"></a>

```typescript
public readonly destinationId: string;
```

- *Type:* string

---

##### `userEmail`<sup>Required</sup> <a name="userEmail" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmail"></a>

```typescript
public readonly userEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertV2EvaluationNotificationSubscriptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>

---


### DataDatabricksAlertV2EvaluationOutputReference <a name="DataDatabricksAlertV2EvaluationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification">putNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold">putThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetEmptyResultState">resetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetNotification">resetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotification` <a name="putNotification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification"></a>

```typescript
public putNotification(value: DataDatabricksAlertV2EvaluationNotification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource"></a>

```typescript
public putSource(value: DataDatabricksAlertV2EvaluationSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

---

##### `putThreshold` <a name="putThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold"></a>

```typescript
public putThreshold(value: DataDatabricksAlertV2EvaluationThreshold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

---

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetComparisonOperator"></a>

```typescript
public resetComparisonOperator(): void
```

##### `resetEmptyResultState` <a name="resetEmptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetEmptyResultState"></a>

```typescript
public resetEmptyResultState(): void
```

##### `resetNotification` <a name="resetNotification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetNotification"></a>

```typescript
public resetNotification(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetThreshold"></a>

```typescript
public resetThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.lastEvaluatedAt">lastEvaluatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference">DataDatabricksAlertV2EvaluationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference">DataDatabricksAlertV2EvaluationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference">DataDatabricksAlertV2EvaluationThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultStateInput">emptyResultStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notificationInput">notificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.sourceInput">sourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultState">emptyResultState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastEvaluatedAt`<sup>Required</sup> <a name="lastEvaluatedAt" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.lastEvaluatedAt"></a>

```typescript
public readonly lastEvaluatedAt: string;
```

- *Type:* string

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notification"></a>

```typescript
public readonly notification: DataDatabricksAlertV2EvaluationNotificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference">DataDatabricksAlertV2EvaluationNotificationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.source"></a>

```typescript
public readonly source: DataDatabricksAlertV2EvaluationSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference">DataDatabricksAlertV2EvaluationSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.threshold"></a>

```typescript
public readonly threshold: DataDatabricksAlertV2EvaluationThresholdOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference">DataDatabricksAlertV2EvaluationThresholdOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `emptyResultStateInput`<sup>Optional</sup> <a name="emptyResultStateInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultStateInput"></a>

```typescript
public readonly emptyResultStateInput: string;
```

- *Type:* string

---

##### `notificationInput`<sup>Optional</sup> <a name="notificationInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notificationInput"></a>

```typescript
public readonly notificationInput: IResolvable | DataDatabricksAlertV2EvaluationNotification;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | DataDatabricksAlertV2EvaluationSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: IResolvable | DataDatabricksAlertV2EvaluationThreshold;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `emptyResultState`<sup>Required</sup> <a name="emptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultState"></a>

```typescript
public readonly emptyResultState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertV2Evaluation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>

---


### DataDatabricksAlertV2EvaluationSourceOutputReference <a name="DataDatabricksAlertV2EvaluationSourceOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregation` <a name="resetAggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetAggregation"></a>

```typescript
public resetAggregation(): void
```

##### `resetDisplay` <a name="resetDisplay" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetDisplay"></a>

```typescript
public resetDisplay(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.displayInput">displayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregationInput"></a>

```typescript
public readonly aggregationInput: string;
```

- *Type:* string

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.displayInput"></a>

```typescript
public readonly displayInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertV2EvaluationSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

---


### DataDatabricksAlertV2EvaluationThresholdColumnOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdColumnOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetDisplay">resetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregation` <a name="resetAggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetAggregation"></a>

```typescript
public resetAggregation(): void
```

##### `resetDisplay` <a name="resetDisplay" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetDisplay"></a>

```typescript
public resetDisplay(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregationInput">aggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.displayInput">displayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregation">aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.display">display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregationInput"></a>

```typescript
public readonly aggregationInput: string;
```

- *Type:* string

---

##### `displayInput`<sup>Optional</sup> <a name="displayInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.displayInput"></a>

```typescript
public readonly displayInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregation"></a>

```typescript
public readonly aggregation: string;
```

- *Type:* string

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.display"></a>

```typescript
public readonly display: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertV2EvaluationThresholdColumn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

---


### DataDatabricksAlertV2EvaluationThresholdOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn">putColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetColumn">resetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumn` <a name="putColumn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn"></a>

```typescript
public putColumn(value: DataDatabricksAlertV2EvaluationThresholdColumn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

---

##### `putValue` <a name="putValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue"></a>

```typescript
public putValue(value: DataDatabricksAlertV2EvaluationThresholdValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

---

##### `resetColumn` <a name="resetColumn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetColumn"></a>

```typescript
public resetColumn(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference">DataDatabricksAlertV2EvaluationThresholdColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference">DataDatabricksAlertV2EvaluationThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.columnInput">columnInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.valueInput">valueInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.column"></a>

```typescript
public readonly column: DataDatabricksAlertV2EvaluationThresholdColumnOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference">DataDatabricksAlertV2EvaluationThresholdColumnOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.value"></a>

```typescript
public readonly value: DataDatabricksAlertV2EvaluationThresholdValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference">DataDatabricksAlertV2EvaluationThresholdValueOutputReference</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: IResolvable | DataDatabricksAlertV2EvaluationThresholdColumn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | DataDatabricksAlertV2EvaluationThresholdValue;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertV2EvaluationThreshold;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

---


### DataDatabricksAlertV2EvaluationThresholdValueOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetBoolValue">resetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetDoubleValue">resetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetStringValue">resetStringValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBoolValue` <a name="resetBoolValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetBoolValue"></a>

```typescript
public resetBoolValue(): void
```

##### `resetDoubleValue` <a name="resetDoubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetDoubleValue"></a>

```typescript
public resetDoubleValue(): void
```

##### `resetStringValue` <a name="resetStringValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetStringValue"></a>

```typescript
public resetStringValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValueInput">boolValueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValueInput">doubleValueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValueInput">stringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValue">boolValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValue">doubleValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `boolValueInput`<sup>Optional</sup> <a name="boolValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValueInput"></a>

```typescript
public readonly boolValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `doubleValueInput`<sup>Optional</sup> <a name="doubleValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValueInput"></a>

```typescript
public readonly doubleValueInput: number;
```

- *Type:* number

---

##### `stringValueInput`<sup>Optional</sup> <a name="stringValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValueInput"></a>

```typescript
public readonly stringValueInput: string;
```

- *Type:* string

---

##### `boolValue`<sup>Required</sup> <a name="boolValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValue"></a>

```typescript
public readonly boolValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertV2EvaluationThresholdValue;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

---


### DataDatabricksAlertV2RunAsOutputReference <a name="DataDatabricksAlertV2RunAsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetServicePrincipalName">resetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServicePrincipalName` <a name="resetServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetServicePrincipalName"></a>

```typescript
public resetServicePrincipalName(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalNameInput">servicePrincipalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `servicePrincipalNameInput`<sup>Optional</sup> <a name="servicePrincipalNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalNameInput"></a>

```typescript
public readonly servicePrincipalNameInput: string;
```

- *Type:* string

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertV2RunAs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a>

---


### DataDatabricksAlertV2ScheduleOutputReference <a name="DataDatabricksAlertV2ScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAlertV2 } from '@cdktf/provider-databricks'

new dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetPauseStatus">resetPauseStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetQuartzCronSchedule">resetQuartzCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetTimezoneId">resetTimezoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPauseStatus` <a name="resetPauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetPauseStatus"></a>

```typescript
public resetPauseStatus(): void
```

##### `resetQuartzCronSchedule` <a name="resetQuartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetQuartzCronSchedule"></a>

```typescript
public resetQuartzCronSchedule(): void
```

##### `resetTimezoneId` <a name="resetTimezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetTimezoneId"></a>

```typescript
public resetTimezoneId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatusInput">pauseStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronScheduleInput">quartzCronScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneIdInput">timezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatus">pauseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronSchedule">quartzCronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneId">timezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pauseStatusInput`<sup>Optional</sup> <a name="pauseStatusInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatusInput"></a>

```typescript
public readonly pauseStatusInput: string;
```

- *Type:* string

---

##### `quartzCronScheduleInput`<sup>Optional</sup> <a name="quartzCronScheduleInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronScheduleInput"></a>

```typescript
public readonly quartzCronScheduleInput: string;
```

- *Type:* string

---

##### `timezoneIdInput`<sup>Optional</sup> <a name="timezoneIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneIdInput"></a>

```typescript
public readonly timezoneIdInput: string;
```

- *Type:* string

---

##### `pauseStatus`<sup>Required</sup> <a name="pauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatus"></a>

```typescript
public readonly pauseStatus: string;
```

- *Type:* string

---

##### `quartzCronSchedule`<sup>Required</sup> <a name="quartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronSchedule"></a>

```typescript
public readonly quartzCronSchedule: string;
```

- *Type:* string

---

##### `timezoneId`<sup>Required</sup> <a name="timezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneId"></a>

```typescript
public readonly timezoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAlertV2Schedule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>

---



