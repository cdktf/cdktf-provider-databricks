# `dataDatabricksFeatureEngineeringMaterializedFeatures` Submodule <a name="`dataDatabricksFeatureEngineeringMaterializedFeatures` Submodule" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeatures <a name="DataDatabricksFeatureEngineeringMaterializedFeatures" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features databricks_feature_engineering_materialized_features}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeatures(Construct Scope, string Id, DataDatabricksFeatureEngineeringMaterializedFeaturesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetFeatureName">ResetFeatureName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFeatureName` <a name="ResetFeatureName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetFeatureName"></a>

```csharp
private void ResetFeatureName()
```

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksFeatureEngineeringMaterializedFeatures resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksFeatureEngineeringMaterializedFeatures.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksFeatureEngineeringMaterializedFeatures.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksFeatureEngineeringMaterializedFeatures.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksFeatureEngineeringMaterializedFeatures.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksFeatureEngineeringMaterializedFeatures resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksFeatureEngineeringMaterializedFeatures to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksFeatureEngineeringMaterializedFeatures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksFeatureEngineeringMaterializedFeatures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.materializedFeatures">MaterializedFeatures</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureNameInput">FeatureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureName">FeatureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `MaterializedFeatures`<sup>Required</sup> <a name="MaterializedFeatures" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.materializedFeatures"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList MaterializedFeatures { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList</a>

---

##### `FeatureNameInput`<sup>Optional</sup> <a name="FeatureNameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureNameInput"></a>

```csharp
public string FeatureNameInput { get; }
```

- *Type:* string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.featureName"></a>

```csharp
public string FeatureName { get; }
```

- *Type:* string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeatures.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFeatureEngineeringMaterializedFeaturesConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeaturesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FeatureName = null,
    double PageSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.featureName">FeatureName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#feature_name DataDatabricksFeatureEngineeringMaterializedFeatures#feature_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#page_size DataDatabricksFeatureEngineeringMaterializedFeatures#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `FeatureName`<sup>Optional</sup> <a name="FeatureName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.featureName"></a>

```csharp
public string FeatureName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#feature_name DataDatabricksFeatureEngineeringMaterializedFeatures#feature_name}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#page_size DataDatabricksFeatureEngineeringMaterializedFeatures#page_size}.

---

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures {
    string MaterializedFeatureId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures.property.materializedFeatureId">MaterializedFeatureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeatures#materialized_feature_id}. |

---

##### `MaterializedFeatureId`<sup>Required</sup> <a name="MaterializedFeatureId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures.property.materializedFeatureId"></a>

```csharp
public string MaterializedFeatureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#materialized_feature_id DataDatabricksFeatureEngineeringMaterializedFeatures#materialized_feature_id}.

---

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig {
    string CatalogName,
    string SchemaName,
    string TableNamePrefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#catalog_name DataDatabricksFeatureEngineeringMaterializedFeatures#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#schema_name DataDatabricksFeatureEngineeringMaterializedFeatures#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.tableNamePrefix">TableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeatures#table_name_prefix}. |

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#catalog_name DataDatabricksFeatureEngineeringMaterializedFeatures#catalog_name}.

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#schema_name DataDatabricksFeatureEngineeringMaterializedFeatures#schema_name}.

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig.property.tableNamePrefix"></a>

```csharp
public string TableNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#table_name_prefix DataDatabricksFeatureEngineeringMaterializedFeatures#table_name_prefix}.

---

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig {
    string Capacity,
    string Name,
    double ReadReplicaCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.capacity">Capacity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#capacity DataDatabricksFeatureEngineeringMaterializedFeatures#capacity}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#name DataDatabricksFeatureEngineeringMaterializedFeatures#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.readReplicaCount">ReadReplicaCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#read_replica_count DataDatabricksFeatureEngineeringMaterializedFeatures#read_replica_count}. |

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.capacity"></a>

```csharp
public string Capacity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#capacity DataDatabricksFeatureEngineeringMaterializedFeatures#capacity}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#name DataDatabricksFeatureEngineeringMaterializedFeatures#name}.

---

##### `ReadReplicaCount`<sup>Optional</sup> <a name="ReadReplicaCount" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig.property.readReplicaCount"></a>

```csharp
public double ReadReplicaCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/feature_engineering_materialized_features#read_replica_count DataDatabricksFeatureEngineeringMaterializedFeatures#read_replica_count}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.get"></a>

```csharp
private DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a>[]

---


### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```csharp
public string TableNamePrefixInput { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.tableNamePrefix"></a>

```csharp
public string TableNamePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resetReadReplicaCount">ResetReadReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadReplicaCount` <a name="ResetReadReplicaCount" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.resetReadReplicaCount"></a>

```csharp
private void ResetReadReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacityInput">CapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCountInput">ReadReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacity">Capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCount">ReadReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacityInput"></a>

```csharp
public string CapacityInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReadReplicaCountInput`<sup>Optional</sup> <a name="ReadReplicaCountInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCountInput"></a>

```csharp
public double ReadReplicaCountInput { get; }
```

- *Type:* double

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.capacity"></a>

```csharp
public string Capacity { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReadReplicaCount`<sup>Required</sup> <a name="ReadReplicaCount" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.readReplicaCount"></a>

```csharp
public double ReadReplicaCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfig</a>

---


### DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference <a name="DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.featureName">FeatureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.lastMaterializationTime">LastMaterializationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.offlineStoreConfig">OfflineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.onlineStoreConfig">OnlineStoreConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.pipelineScheduleState">PipelineScheduleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureIdInput">MaterializedFeatureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureId">MaterializedFeatureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FeatureName`<sup>Required</sup> <a name="FeatureName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.featureName"></a>

```csharp
public string FeatureName { get; }
```

- *Type:* string

---

##### `LastMaterializationTime`<sup>Required</sup> <a name="LastMaterializationTime" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.lastMaterializationTime"></a>

```csharp
public string LastMaterializationTime { get; }
```

- *Type:* string

---

##### `OfflineStoreConfig`<sup>Required</sup> <a name="OfflineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.offlineStoreConfig"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference OfflineStoreConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOfflineStoreConfigOutputReference</a>

---

##### `OnlineStoreConfig`<sup>Required</sup> <a name="OnlineStoreConfig" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.onlineStoreConfig"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference OnlineStoreConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOnlineStoreConfigOutputReference</a>

---

##### `PipelineScheduleState`<sup>Required</sup> <a name="PipelineScheduleState" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.pipelineScheduleState"></a>

```csharp
public string PipelineScheduleState { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `MaterializedFeatureIdInput`<sup>Optional</sup> <a name="MaterializedFeatureIdInput" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureIdInput"></a>

```csharp
public string MaterializedFeatureIdInput { get; }
```

- *Type:* string

---

##### `MaterializedFeatureId`<sup>Required</sup> <a name="MaterializedFeatureId" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.materializedFeatureId"></a>

```csharp
public string MaterializedFeatureId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeaturesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFeatureEngineeringMaterializedFeatures.DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures">DataDatabricksFeatureEngineeringMaterializedFeaturesMaterializedFeatures</a>

---



