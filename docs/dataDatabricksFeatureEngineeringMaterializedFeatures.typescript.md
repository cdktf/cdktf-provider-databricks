# `dataDatabricksFeatureEngineeringMaterializedFeatures` Submodule <a name="`dataDatabricksFeatureEngineeringMaterializedFeatures` Submodule" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeatures <a name="DataDatabricksFeatureEngineeringMaterializedFeatures" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features databricks_feature_engineering_materialized_features}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures(scope: Construct, id: string, config?: DataDatabricksFeatureEngineeringMaterializedFeaturesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetFeatureName">resetFeatureName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetPageSize">resetPageSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFeatureName` <a name="resetFeatureName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetFeatureName"></a>

```typescript
public resetFeatureName(): void
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksFeatureEngineeringMaterializedFeatures resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeatures } from '@cdktf/provider-databricks'

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeatures } from '@cdktf/provider-databricks'

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeatures } from '@cdktf/provider-databricks'

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeatures } from '@cdktf/provider-databricks'

dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksFeatureEngineeringMaterializedFeatures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksFeatureEngineeringMaterializedFeatures to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksFeatureEngineeringMaterializedFeatures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringMaterializedFeatures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.materializedFeatures">materializedFeatures</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureNameInput">featureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureName">featureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `materializedFeatures`<sup>Required</sup> <a name="materializedFeatures" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.materializedFeatures"></a>

```typescript
public readonly materializedFeatures: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList</a>

---

##### `featureNameInput`<sup>Optional</sup> <a name="featureNameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureNameInput"></a>

```typescript
public readonly featureNameInput: string;
```

- *Type:* string

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeaturesConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeatures } from '@cdktf/provider-databricks'

const dataDatabricksFeatureEngineeringMaterializedFeaturesConfig: dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.featureName">featureName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#feature_name DataDatabricksFeatureEngineeringMaterializedFeatures#feature_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#page_size DataDatabricksFeatureEngineeringMaterializedFeatures#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `featureName`<sup>Optional</sup> <a name="featureName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#feature_name DataDatabricksFeatureEngineeringMaterializedFeatures#feature_name}.

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#page_size DataDatabricksFeatureEngineeringMaterializedFeatures#page_size}.

---

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeatures } from '@cdktf/provider-databricks'

const dataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures: dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures.property.materializedFeatureId">materializedFeatureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeatures#materialized_feature_id}. |

---

##### `materializedFeatureId`<sup>Required</sup> <a name="materializedFeatureId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures.property.materializedFeatureId"></a>

```typescript
public readonly materializedFeatureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeatures#materialized_feature_id}.

---

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeatures } from '@cdktf/provider-databricks'

const dataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig: dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.catalogName">catalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#catalog_name DataDatabricksFeatureEngineeringMaterializedFeatures#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#schema_name DataDatabricksFeatureEngineeringMaterializedFeatures#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeatures#table_name_prefix}. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#catalog_name DataDatabricksFeatureEngineeringMaterializedFeatures#catalog_name}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#schema_name DataDatabricksFeatureEngineeringMaterializedFeatures#schema_name}.

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeatures#table_name_prefix}.

---

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeatures } from '@cdktf/provider-databricks'

const dataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig: dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.capacity">capacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#capacity DataDatabricksFeatureEngineeringMaterializedFeatures#capacity}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#name DataDatabricksFeatureEngineeringMaterializedFeatures#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.readReplicaCount">readReplicaCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#read_replica_count DataDatabricksFeatureEngineeringMaterializedFeatures#read_replica_count}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#capacity DataDatabricksFeatureEngineeringMaterializedFeatures#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#name DataDatabricksFeatureEngineeringMaterializedFeatures#name}.

---

##### `readReplicaCount`<sup>Optional</sup> <a name="readReplicaCount" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.readReplicaCount"></a>

```typescript
public readonly readReplicaCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#read_replica_count DataDatabricksFeatureEngineeringMaterializedFeatures#read_replica_count}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.get"></a>

```typescript
public get(index: number): DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a>[]

---


### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefixInput">tableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogName">catalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefix">tableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogNameInput"></a>

```typescript
public readonly catalogNameInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tableNamePrefixInput`<sup>Optional</sup> <a name="tableNamePrefixInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```typescript
public readonly tableNamePrefixInput: string;
```

- *Type:* string

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogName"></a>

```typescript
public readonly catalogName: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableNamePrefix`<sup>Required</sup> <a name="tableNamePrefix" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefix"></a>

```typescript
public readonly tableNamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resetReadReplicaCount">resetReadReplicaCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadReplicaCount` <a name="resetReadReplicaCount" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resetReadReplicaCount"></a>

```typescript
public resetReadReplicaCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creator">creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacityInput">capacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCountInput">readReplicaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacity">capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCount">readReplicaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creator"></a>

```typescript
public readonly creator: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacityInput"></a>

```typescript
public readonly capacityInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `readReplicaCountInput`<sup>Optional</sup> <a name="readReplicaCountInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCountInput"></a>

```typescript
public readonly readReplicaCountInput: number;
```

- *Type:* number

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacity"></a>

```typescript
public readonly capacity: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `readReplicaCount`<sup>Required</sup> <a name="readReplicaCount" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCount"></a>

```typescript
public readonly readReplicaCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringMaterializedFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.featureName">featureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.lastMaterializationTime">lastMaterializationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.offlineStoreConfig">offlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.onlineStoreConfig">onlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.pipelineScheduleState">pipelineScheduleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureIdInput">materializedFeatureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureId">materializedFeatureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

---

##### `lastMaterializationTime`<sup>Required</sup> <a name="lastMaterializationTime" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.lastMaterializationTime"></a>

```typescript
public readonly lastMaterializationTime: string;
```

- *Type:* string

---

##### `offlineStoreConfig`<sup>Required</sup> <a name="offlineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.offlineStoreConfig"></a>

```typescript
public readonly offlineStoreConfig: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference</a>

---

##### `onlineStoreConfig`<sup>Required</sup> <a name="onlineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.onlineStoreConfig"></a>

```typescript
public readonly onlineStoreConfig: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference</a>

---

##### `pipelineScheduleState`<sup>Required</sup> <a name="pipelineScheduleState" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.pipelineScheduleState"></a>

```typescript
public readonly pipelineScheduleState: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `materializedFeatureIdInput`<sup>Optional</sup> <a name="materializedFeatureIdInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureIdInput"></a>

```typescript
public readonly materializedFeatureIdInput: string;
```

- *Type:* string

---

##### `materializedFeatureId`<sup>Required</sup> <a name="materializedFeatureId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureId"></a>

```typescript
public readonly materializedFeatureId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a>

---



