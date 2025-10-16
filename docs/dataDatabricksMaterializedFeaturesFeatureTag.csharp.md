# `dataDatabricksMaterializedFeaturesFeatureTag` Submodule <a name="`dataDatabricksMaterializedFeaturesFeatureTag` Submodule" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMaterializedFeaturesFeatureTag <a name="DataDatabricksMaterializedFeaturesFeatureTag" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/materialized_features_feature_tag databricks_materialized_features_feature_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTag(Construct Scope, string Id, DataDatabricksMaterializedFeaturesFeatureTagConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig">DataDatabricksMaterializedFeaturesFeatureTagConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig">DataDatabricksMaterializedFeaturesFeatureTagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.resetValue"></a>

```csharp
private void ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksMaterializedFeaturesFeatureTag resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMaterializedFeaturesFeatureTag.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMaterializedFeaturesFeatureTag.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMaterializedFeaturesFeatureTag.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMaterializedFeaturesFeatureTag.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksMaterializedFeaturesFeatureTag resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMaterializedFeaturesFeatureTag to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMaterializedFeaturesFeatureTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/materialized_features_feature_tag#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMaterializedFeaturesFeatureTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTag.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMaterializedFeaturesFeatureTagConfig <a name="DataDatabricksMaterializedFeaturesFeatureTagConfig" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMaterializedFeaturesFeatureTagConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/materialized_features_feature_tag#key DataDatabricksMaterializedFeaturesFeatureTag#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/materialized_features_feature_tag#value DataDatabricksMaterializedFeaturesFeatureTag#value}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/materialized_features_feature_tag#key DataDatabricksMaterializedFeaturesFeatureTag#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMaterializedFeaturesFeatureTag.DataDatabricksMaterializedFeaturesFeatureTagConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/data-sources/materialized_features_feature_tag#value DataDatabricksMaterializedFeaturesFeatureTag#value}.

---



