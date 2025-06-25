# `dataDatabricksAwsUnityCatalogPolicy` Submodule <a name="`dataDatabricksAwsUnityCatalogPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsUnityCatalogPolicy <a name="DataDatabricksAwsUnityCatalogPolicy" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy databricks_aws_unity_catalog_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAwsUnityCatalogPolicy(Construct Scope, string Id, DataDatabricksAwsUnityCatalogPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig">DataDatabricksAwsUnityCatalogPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig">DataDatabricksAwsUnityCatalogPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetAwsPartition">ResetAwsPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetKmsName">ResetKmsName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAwsPartition` <a name="ResetAwsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetAwsPartition"></a>

```csharp
private void ResetAwsPartition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsName` <a name="ResetKmsName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.resetKmsName"></a>

```csharp
private void ResetKmsName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAwsUnityCatalogPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAwsUnityCatalogPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAwsUnityCatalogPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAwsUnityCatalogPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAwsUnityCatalogPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAwsUnityCatalogPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsUnityCatalogPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.json">Json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsPartitionInput">AwsPartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.kmsNameInput">KmsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsPartition">AwsPartition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.kmsName">KmsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.json"></a>

```csharp
public string Json { get; }
```

- *Type:* string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `AwsPartitionInput`<sup>Optional</sup> <a name="AwsPartitionInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsPartitionInput"></a>

```csharp
public string AwsPartitionInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KmsNameInput`<sup>Optional</sup> <a name="KmsNameInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.kmsNameInput"></a>

```csharp
public string KmsNameInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `AwsPartition`<sup>Required</sup> <a name="AwsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.awsPartition"></a>

```csharp
public string AwsPartition { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsName`<sup>Required</sup> <a name="KmsName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.kmsName"></a>

```csharp
public string KmsName { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsUnityCatalogPolicyConfig <a name="DataDatabricksAwsUnityCatalogPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAwsUnityCatalogPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AwsAccountId,
    string BucketName,
    string RoleName,
    string AwsPartition = null,
    string Id = null,
    string KmsName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy#aws_account_id DataDatabricksAwsUnityCatalogPolicy#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy#bucket_name DataDatabricksAwsUnityCatalogPolicy#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.roleName">RoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy#role_name DataDatabricksAwsUnityCatalogPolicy#role_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.awsPartition">AwsPartition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy#aws_partition DataDatabricksAwsUnityCatalogPolicy#aws_partition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy#id DataDatabricksAwsUnityCatalogPolicy#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.kmsName">KmsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy#kms_name DataDatabricksAwsUnityCatalogPolicy#kms_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy#aws_account_id DataDatabricksAwsUnityCatalogPolicy#aws_account_id}.

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy#bucket_name DataDatabricksAwsUnityCatalogPolicy#bucket_name}.

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy#role_name DataDatabricksAwsUnityCatalogPolicy#role_name}.

---

##### `AwsPartition`<sup>Optional</sup> <a name="AwsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.awsPartition"></a>

```csharp
public string AwsPartition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy#aws_partition DataDatabricksAwsUnityCatalogPolicy#aws_partition}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy#id DataDatabricksAwsUnityCatalogPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsName`<sup>Optional</sup> <a name="KmsName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogPolicy.DataDatabricksAwsUnityCatalogPolicyConfig.property.kmsName"></a>

```csharp
public string KmsName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/aws_unity_catalog_policy#kms_name DataDatabricksAwsUnityCatalogPolicy#kms_name}.

---



