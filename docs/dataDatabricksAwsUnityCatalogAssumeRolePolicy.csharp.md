# `dataDatabricksAwsUnityCatalogAssumeRolePolicy` Submodule <a name="`dataDatabricksAwsUnityCatalogAssumeRolePolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsUnityCatalogAssumeRolePolicy <a name="DataDatabricksAwsUnityCatalogAssumeRolePolicy" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_assume_role_policy databricks_aws_unity_catalog_assume_role_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAwsUnityCatalogAssumeRolePolicy(Construct Scope, string Id, DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig">DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig">DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetAwsPartition">ResetAwsPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetUnityCatalogIamArn">ResetUnityCatalogIamArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAwsPartition` <a name="ResetAwsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetAwsPartition"></a>

```csharp
private void ResetAwsPartition()
```

##### `ResetUnityCatalogIamArn` <a name="ResetUnityCatalogIamArn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetUnityCatalogIamArn"></a>

```csharp
private void ResetUnityCatalogIamArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogAssumeRolePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAwsUnityCatalogAssumeRolePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAwsUnityCatalogAssumeRolePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAwsUnityCatalogAssumeRolePolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAwsUnityCatalogAssumeRolePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogAssumeRolePolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAwsUnityCatalogAssumeRolePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAwsUnityCatalogAssumeRolePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_assume_role_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsUnityCatalogAssumeRolePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.json">Json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsPartitionInput">AwsPartitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArnInput">UnityCatalogIamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsPartition">AwsPartition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArn">UnityCatalogIamArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.json"></a>

```csharp
public string Json { get; }
```

- *Type:* string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `AwsPartitionInput`<sup>Optional</sup> <a name="AwsPartitionInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsPartitionInput"></a>

```csharp
public string AwsPartitionInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `UnityCatalogIamArnInput`<sup>Optional</sup> <a name="UnityCatalogIamArnInput" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArnInput"></a>

```csharp
public string UnityCatalogIamArnInput { get; }
```

- *Type:* string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `AwsPartition`<sup>Required</sup> <a name="AwsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsPartition"></a>

```csharp
public string AwsPartition { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `UnityCatalogIamArn`<sup>Required</sup> <a name="UnityCatalogIamArn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArn"></a>

```csharp
public string UnityCatalogIamArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig <a name="DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AwsAccountId,
    string ExternalId,
    string RoleName,
    string AwsPartition = null,
    string UnityCatalogIamArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_account_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_assume_role_policy#external_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.roleName">RoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_assume_role_policy#role_name DataDatabricksAwsUnityCatalogAssumeRolePolicy#role_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsPartition">AwsPartition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_partition DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_partition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.unityCatalogIamArn">UnityCatalogIamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_assume_role_policy#unity_catalog_iam_arn DataDatabricksAwsUnityCatalogAssumeRolePolicy#unity_catalog_iam_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_account_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_account_id}.

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_assume_role_policy#external_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#external_id}.

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_assume_role_policy#role_name DataDatabricksAwsUnityCatalogAssumeRolePolicy#role_name}.

---

##### `AwsPartition`<sup>Optional</sup> <a name="AwsPartition" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsPartition"></a>

```csharp
public string AwsPartition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_partition DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_partition}.

---

##### `UnityCatalogIamArn`<sup>Optional</sup> <a name="UnityCatalogIamArn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.unityCatalogIamArn"></a>

```csharp
public string UnityCatalogIamArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/data-sources/aws_unity_catalog_assume_role_policy#unity_catalog_iam_arn DataDatabricksAwsUnityCatalogAssumeRolePolicy#unity_catalog_iam_arn}.

---



