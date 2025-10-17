# `dataDatabricksFeatureEngineeringFeatures` Submodule <a name="`dataDatabricksFeatureEngineeringFeatures` Submodule" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringFeatures <a name="DataDatabricksFeatureEngineeringFeatures" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features databricks_feature_engineering_features}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures(scope: Construct, id: string, config?: DataDatabricksFeatureEngineeringFeaturesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig">DataDatabricksFeatureEngineeringFeaturesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig">DataDatabricksFeatureEngineeringFeaturesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksFeatureEngineeringFeatures resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isConstruct"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformElement"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformDataSource"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataDatabricksFeatureEngineeringFeatures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksFeatureEngineeringFeatures to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksFeatureEngineeringFeatures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringFeatures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.features">features</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList">DataDatabricksFeatureEngineeringFeaturesFeaturesList</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.features"></a>

```typescript
public readonly features: DataDatabricksFeatureEngineeringFeaturesFeaturesList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList">DataDatabricksFeatureEngineeringFeaturesFeaturesList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeatures.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringFeaturesConfig <a name="DataDatabricksFeatureEngineeringFeaturesConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesConfig: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

### DataDatabricksFeatureEngineeringFeaturesFeatures <a name="DataDatabricksFeatureEngineeringFeaturesFeatures" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeatures: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#full_name DataDatabricksFeatureEngineeringFeatures#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.function">function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction">DataDatabricksFeatureEngineeringFeaturesFeaturesFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#function DataDatabricksFeatureEngineeringFeatures#function}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.inputs">inputs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#inputs DataDatabricksFeatureEngineeringFeatures#inputs}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#source DataDatabricksFeatureEngineeringFeatures#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#time_window DataDatabricksFeatureEngineeringFeatures#time_window}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#description DataDatabricksFeatureEngineeringFeatures#description}. |

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#full_name DataDatabricksFeatureEngineeringFeatures#full_name}.

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.function"></a>

```typescript
public readonly function: DataDatabricksFeatureEngineeringFeaturesFeaturesFunction;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction">DataDatabricksFeatureEngineeringFeaturesFeaturesFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#function DataDatabricksFeatureEngineeringFeatures#function}.

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#inputs DataDatabricksFeatureEngineeringFeatures#inputs}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.source"></a>

```typescript
public readonly source: DataDatabricksFeatureEngineeringFeaturesFeaturesSource;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#source DataDatabricksFeatureEngineeringFeatures#source}.

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.timeWindow"></a>

```typescript
public readonly timeWindow: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#time_window DataDatabricksFeatureEngineeringFeatures#time_window}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#description DataDatabricksFeatureEngineeringFeatures#description}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesFunction <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesFunction" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesFunction: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction.property.functionType">functionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#function_type DataDatabricksFeatureEngineeringFeatures#function_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction.property.extraParameters">extraParameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#extra_parameters DataDatabricksFeatureEngineeringFeatures#extra_parameters}. |

---

##### `functionType`<sup>Required</sup> <a name="functionType" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction.property.functionType"></a>

```typescript
public readonly functionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#function_type DataDatabricksFeatureEngineeringFeatures#function_type}.

---

##### `extraParameters`<sup>Optional</sup> <a name="extraParameters" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction.property.extraParameters"></a>

```typescript
public readonly extraParameters: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#extra_parameters DataDatabricksFeatureEngineeringFeatures#extra_parameters}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#key DataDatabricksFeatureEngineeringFeatures#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#value DataDatabricksFeatureEngineeringFeatures#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#key DataDatabricksFeatureEngineeringFeatures#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#value DataDatabricksFeatureEngineeringFeatures#value}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesSource <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesSource: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#delta_table_source DataDatabricksFeatureEngineeringFeatures#delta_table_source}. |

---

##### `deltaTableSource`<sup>Optional</sup> <a name="deltaTableSource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource.property.deltaTableSource"></a>

```typescript
public readonly deltaTableSource: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#delta_table_source DataDatabricksFeatureEngineeringFeatures#delta_table_source}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.property.entityColumns">entityColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#entity_columns DataDatabricksFeatureEngineeringFeatures#entity_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.property.fullName">fullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#full_name DataDatabricksFeatureEngineeringFeatures#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.property.timeseriesColumn">timeseriesColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#timeseries_column DataDatabricksFeatureEngineeringFeatures#timeseries_column}. |

---

##### `entityColumns`<sup>Required</sup> <a name="entityColumns" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.property.entityColumns"></a>

```typescript
public readonly entityColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#entity_columns DataDatabricksFeatureEngineeringFeatures#entity_columns}.

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#full_name DataDatabricksFeatureEngineeringFeatures#full_name}.

---

##### `timeseriesColumn`<sup>Required</sup> <a name="timeseriesColumn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#timeseries_column DataDatabricksFeatureEngineeringFeatures#timeseries_column}.

---

### DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

const dataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow: dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#duration DataDatabricksFeatureEngineeringFeatures#duration}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow.property.offset">offset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#offset DataDatabricksFeatureEngineeringFeatures#offset}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#duration DataDatabricksFeatureEngineeringFeatures#duration}.

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/feature_engineering_features#offset DataDatabricksFeatureEngineeringFeatures#offset}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.get"></a>

```typescript
public get(index: number): DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.putExtraParameters">putExtraParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.resetExtraParameters">resetExtraParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtraParameters` <a name="putExtraParameters" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.putExtraParameters"></a>

```typescript
public putExtraParameters(value: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.putExtraParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]

---

##### `resetExtraParameters` <a name="resetExtraParameters" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.resetExtraParameters"></a>

```typescript
public resetExtraParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.extraParameters">extraParameters</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.extraParametersInput">extraParametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.functionTypeInput">functionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.functionType">functionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction">DataDatabricksFeatureEngineeringFeaturesFeaturesFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extraParameters`<sup>Required</sup> <a name="extraParameters" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.extraParameters"></a>

```typescript
public readonly extraParameters: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParametersList</a>

---

##### `extraParametersInput`<sup>Optional</sup> <a name="extraParametersInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.extraParametersInput"></a>

```typescript
public readonly extraParametersInput: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionExtraParameters</a>[]

---

##### `functionTypeInput`<sup>Optional</sup> <a name="functionTypeInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.functionTypeInput"></a>

```typescript
public readonly functionTypeInput: string;
```

- *Type:* string

---

##### `functionType`<sup>Required</sup> <a name="functionType" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.functionType"></a>

```typescript
public readonly functionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringFeaturesFeaturesFunction;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction">DataDatabricksFeatureEngineeringFeaturesFeaturesFunction</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesList <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesList" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.get"></a>

```typescript
public get(index: number): DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures">DataDatabricksFeatureEngineeringFeaturesFeatures</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeatures[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures">DataDatabricksFeatureEngineeringFeaturesFeatures</a>[]

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.putFunction">putFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.putTimeWindow">putTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFunction` <a name="putFunction" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.putFunction"></a>

```typescript
public putFunction(value: DataDatabricksFeatureEngineeringFeaturesFeaturesFunction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.putFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction">DataDatabricksFeatureEngineeringFeaturesFeaturesFunction</a>

---

##### `putSource` <a name="putSource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.putSource"></a>

```typescript
public putSource(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSource</a>

---

##### `putTimeWindow` <a name="putTimeWindow" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.putTimeWindow"></a>

```typescript
public putTimeWindow(value: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.function">function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.timeWindow">timeWindow</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.functionInput">functionInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction">DataDatabricksFeatureEngineeringFeaturesFeaturesFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.inputsInput">inputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.timeWindowInput">timeWindowInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.inputs">inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures">DataDatabricksFeatureEngineeringFeaturesFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.function"></a>

```typescript
public readonly function: DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesFunctionOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.source"></a>

```typescript
public readonly source: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.timeWindow"></a>

```typescript
public readonly timeWindow: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `functionInput`<sup>Optional</sup> <a name="functionInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.functionInput"></a>

```typescript
public readonly functionInput: DataDatabricksFeatureEngineeringFeaturesFeaturesFunction;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesFunction">DataDatabricksFeatureEngineeringFeaturesFeaturesFunction</a>

---

##### `inputsInput`<sup>Optional</sup> <a name="inputsInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.inputsInput"></a>

```typescript
public readonly inputsInput: string[];
```

- *Type:* string[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: DataDatabricksFeatureEngineeringFeaturesFeaturesSource;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSource</a>

---

##### `timeWindowInput`<sup>Optional</sup> <a name="timeWindowInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.timeWindowInput"></a>

```typescript
public readonly timeWindowInput: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.inputs"></a>

```typescript
public readonly inputs: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringFeaturesFeatures;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeatures">DataDatabricksFeatureEngineeringFeaturesFeatures</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.entityColumnsInput">entityColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.fullNameInput">fullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">timeseriesColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.entityColumns">entityColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.fullName">fullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.timeseriesColumn">timeseriesColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityColumnsInput`<sup>Optional</sup> <a name="entityColumnsInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```typescript
public readonly entityColumnsInput: string[];
```

- *Type:* string[]

---

##### `fullNameInput`<sup>Optional</sup> <a name="fullNameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```typescript
public readonly fullNameInput: string;
```

- *Type:* string

---

##### `timeseriesColumnInput`<sup>Optional</sup> <a name="timeseriesColumnInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```typescript
public readonly timeseriesColumnInput: string;
```

- *Type:* string

---

##### `entityColumns`<sup>Required</sup> <a name="entityColumns" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```typescript
public readonly entityColumns: string[];
```

- *Type:* string[]

---

##### `fullName`<sup>Required</sup> <a name="fullName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.fullName"></a>

```typescript
public readonly fullName: string;
```

- *Type:* string

---

##### `timeseriesColumn`<sup>Required</sup> <a name="timeseriesColumn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```typescript
public readonly timeseriesColumn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.putDeltaTableSource">putDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.resetDeltaTableSource">resetDeltaTableSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeltaTableSource` <a name="putDeltaTableSource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.putDeltaTableSource"></a>

```typescript
public putDeltaTableSource(value: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a>

---

##### `resetDeltaTableSource` <a name="resetDeltaTableSource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.resetDeltaTableSource"></a>

```typescript
public resetDeltaTableSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.deltaTableSource">deltaTableSource</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.deltaTableSourceInput">deltaTableSourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deltaTableSource`<sup>Required</sup> <a name="deltaTableSource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.deltaTableSource"></a>

```typescript
public readonly deltaTableSource: DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSourceOutputReference</a>

---

##### `deltaTableSourceInput`<sup>Optional</sup> <a name="deltaTableSourceInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.deltaTableSourceInput"></a>

```typescript
public readonly deltaTableSourceInput: IResolvable | DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSourceDeltaTableSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringFeaturesFeaturesSource;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesSource">DataDatabricksFeatureEngineeringFeaturesFeaturesSource</a>

---


### DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference <a name="DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.Initializer"></a>

```typescript
import { dataDatabricksFeatureEngineeringFeatures } from '@cdktf/provider-databricks'

new dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resetOffset">resetOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.offsetInput">offsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow;
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringFeatures.DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow">DataDatabricksFeatureEngineeringFeaturesFeaturesTimeWindow</a>

---



