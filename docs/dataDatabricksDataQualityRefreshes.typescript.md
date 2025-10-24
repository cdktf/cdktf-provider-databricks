# `dataDatabricksDataQualityRefreshes` Submodule <a name="`dataDatabricksDataQualityRefreshes` Submodule" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataQualityRefreshes <a name="DataDatabricksDataQualityRefreshes" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes databricks_data_quality_refreshes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer"></a>

```typescript
import { dataDatabricksDataQualityRefreshes } from '@cdktf/provider-databricks'

new dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes(scope: Construct, id: string, config: DataDatabricksDataQualityRefreshesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig">DataDatabricksDataQualityRefreshesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig">DataDatabricksDataQualityRefreshesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetPageSize">resetPageSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDataQualityRefreshes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isConstruct"></a>

```typescript
import { dataDatabricksDataQualityRefreshes } from '@cdktf/provider-databricks'

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformElement"></a>

```typescript
import { dataDatabricksDataQualityRefreshes } from '@cdktf/provider-databricks'

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformDataSource"></a>

```typescript
import { dataDatabricksDataQualityRefreshes } from '@cdktf/provider-databricks'

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport"></a>

```typescript
import { dataDatabricksDataQualityRefreshes } from '@cdktf/provider-databricks'

dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksDataQualityRefreshes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDataQualityRefreshes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDataQualityRefreshes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataQualityRefreshes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.refreshes">refreshes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList">DataDatabricksDataQualityRefreshesRefreshesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `refreshes`<sup>Required</sup> <a name="refreshes" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.refreshes"></a>

```typescript
public readonly refreshes: DataDatabricksDataQualityRefreshesRefreshesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList">DataDatabricksDataQualityRefreshesRefreshesList</a>

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataQualityRefreshesConfig <a name="DataDatabricksDataQualityRefreshesConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.Initializer"></a>

```typescript
import { dataDatabricksDataQualityRefreshes } from '@cdktf/provider-databricks'

const dataDatabricksDataQualityRefreshesConfig: dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.objectType">objectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes#page_size DataDatabricksDataQualityRefreshes#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}.

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes#page_size DataDatabricksDataQualityRefreshes#page_size}.

---

### DataDatabricksDataQualityRefreshesRefreshes <a name="DataDatabricksDataQualityRefreshesRefreshes" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.Initializer"></a>

```typescript
import { dataDatabricksDataQualityRefreshes } from '@cdktf/provider-databricks'

const dataDatabricksDataQualityRefreshesRefreshes: dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.objectType">objectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.refreshId">refreshId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes#refresh_id DataDatabricksDataQualityRefreshes#refresh_id}. |

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes#object_id DataDatabricksDataQualityRefreshes#object_id}.

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes#object_type DataDatabricksDataQualityRefreshes#object_type}.

---

##### `refreshId`<sup>Required</sup> <a name="refreshId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes.property.refreshId"></a>

```typescript
public readonly refreshId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_refreshes#refresh_id DataDatabricksDataQualityRefreshes#refresh_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataQualityRefreshesRefreshesList <a name="DataDatabricksDataQualityRefreshesRefreshesList" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer"></a>

```typescript
import { dataDatabricksDataQualityRefreshes } from '@cdktf/provider-databricks'

new dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.get"></a>

```typescript
public get(index: number): DataDatabricksDataQualityRefreshesRefreshesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes">DataDatabricksDataQualityRefreshesRefreshes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksDataQualityRefreshesRefreshes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes">DataDatabricksDataQualityRefreshesRefreshes</a>[]

---


### DataDatabricksDataQualityRefreshesRefreshesOutputReference <a name="DataDatabricksDataQualityRefreshesRefreshesOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksDataQualityRefreshes } from '@cdktf/provider-databricks'

new dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.endTimeMs">endTimeMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.startTimeMs">startTimeMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.trigger">trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.refreshIdInput">refreshIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.refreshId">refreshId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes">DataDatabricksDataQualityRefreshesRefreshes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeMs`<sup>Required</sup> <a name="endTimeMs" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.endTimeMs"></a>

```typescript
public readonly endTimeMs: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `startTimeMs`<sup>Required</sup> <a name="startTimeMs" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.startTimeMs"></a>

```typescript
public readonly startTimeMs: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.trigger"></a>

```typescript
public readonly trigger: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `refreshIdInput`<sup>Optional</sup> <a name="refreshIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.refreshIdInput"></a>

```typescript
public readonly refreshIdInput: number;
```

- *Type:* number

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `refreshId`<sup>Required</sup> <a name="refreshId" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.refreshId"></a>

```typescript
public readonly refreshId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksDataQualityRefreshesRefreshes;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefreshes.DataDatabricksDataQualityRefreshesRefreshes">DataDatabricksDataQualityRefreshesRefreshes</a>

---



