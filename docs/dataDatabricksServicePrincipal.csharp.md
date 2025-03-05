# `dataDatabricksServicePrincipal` Submodule <a name="`dataDatabricksServicePrincipal` Submodule" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipal <a name="DataDatabricksServicePrincipal" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal databricks_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServicePrincipal(Construct Scope, string Id, DataDatabricksServicePrincipalConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig">DataDatabricksServicePrincipalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig">DataDatabricksServicePrincipalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetAclPrincipalId">ResetAclPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetHome">ResetHome</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetRepos">ResetRepos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetSpId">ResetSpId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAclPrincipalId` <a name="ResetAclPrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetAclPrincipalId"></a>

```csharp
private void ResetAclPrincipalId()
```

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetApplicationId"></a>

```csharp
private void ResetApplicationId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetHome` <a name="ResetHome" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetHome"></a>

```csharp
private void ResetHome()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRepos` <a name="ResetRepos" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetRepos"></a>

```csharp
private void ResetRepos()
```

##### `ResetSpId` <a name="ResetSpId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.resetSpId"></a>

```csharp
private void ResetSpId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksServicePrincipal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServicePrincipal.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServicePrincipal.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServicePrincipal.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServicePrincipal.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksServicePrincipal resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksServicePrincipal to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksServicePrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksServicePrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.aclPrincipalIdInput">AclPrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.homeInput">HomeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.reposInput">ReposInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.spIdInput">SpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.aclPrincipalId">AclPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.home">Home</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.repos">Repos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.spId">SpId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AclPrincipalIdInput`<sup>Optional</sup> <a name="AclPrincipalIdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.aclPrincipalIdInput"></a>

```csharp
public string AclPrincipalIdInput { get; }
```

- *Type:* string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `HomeInput`<sup>Optional</sup> <a name="HomeInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.homeInput"></a>

```csharp
public string HomeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ReposInput`<sup>Optional</sup> <a name="ReposInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.reposInput"></a>

```csharp
public string ReposInput { get; }
```

- *Type:* string

---

##### `SpIdInput`<sup>Optional</sup> <a name="SpIdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.spIdInput"></a>

```csharp
public string SpIdInput { get; }
```

- *Type:* string

---

##### `AclPrincipalId`<sup>Required</sup> <a name="AclPrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.aclPrincipalId"></a>

```csharp
public string AclPrincipalId { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Home`<sup>Required</sup> <a name="Home" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.home"></a>

```csharp
public string Home { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Repos`<sup>Required</sup> <a name="Repos" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.repos"></a>

```csharp
public string Repos { get; }
```

- *Type:* string

---

##### `SpId`<sup>Required</sup> <a name="SpId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.spId"></a>

```csharp
public string SpId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipal.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalConfig <a name="DataDatabricksServicePrincipalConfig" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServicePrincipalConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AclPrincipalId = null,
    object Active = null,
    string ApplicationId = null,
    string DisplayName = null,
    string ExternalId = null,
    string Home = null,
    string Id = null,
    string Repos = null,
    string SpId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.aclPrincipalId">AclPrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#acl_principal_id DataDatabricksServicePrincipal#acl_principal_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.active">Active</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#active DataDatabricksServicePrincipal#active}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#application_id DataDatabricksServicePrincipal#application_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#display_name DataDatabricksServicePrincipal#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#external_id DataDatabricksServicePrincipal#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.home">Home</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#home DataDatabricksServicePrincipal#home}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#id DataDatabricksServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.repos">Repos</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#repos DataDatabricksServicePrincipal#repos}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.spId">SpId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#sp_id DataDatabricksServicePrincipal#sp_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AclPrincipalId`<sup>Optional</sup> <a name="AclPrincipalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.aclPrincipalId"></a>

```csharp
public string AclPrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#acl_principal_id DataDatabricksServicePrincipal#acl_principal_id}.

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#active DataDatabricksServicePrincipal#active}.

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#application_id DataDatabricksServicePrincipal#application_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#display_name DataDatabricksServicePrincipal#display_name}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#external_id DataDatabricksServicePrincipal#external_id}.

---

##### `Home`<sup>Optional</sup> <a name="Home" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.home"></a>

```csharp
public string Home { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#home DataDatabricksServicePrincipal#home}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#id DataDatabricksServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Repos`<sup>Optional</sup> <a name="Repos" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.repos"></a>

```csharp
public string Repos { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#repos DataDatabricksServicePrincipal#repos}.

---

##### `SpId`<sup>Optional</sup> <a name="SpId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipal.DataDatabricksServicePrincipalConfig.property.spId"></a>

```csharp
public string SpId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/data-sources/service_principal#sp_id DataDatabricksServicePrincipal#sp_id}.

---



