# `dataDatabricksServicePrincipals` Submodule <a name="`dataDatabricksServicePrincipals` Submodule" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipals <a name="DataDatabricksServicePrincipals" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/data-sources/service_principals databricks_service_principals}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServicePrincipals(Construct Scope, string Id, DataDatabricksServicePrincipalsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig">DataDatabricksServicePrincipalsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig">DataDatabricksServicePrincipalsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetApplicationIds">ResetApplicationIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetApplicationIds` <a name="ResetApplicationIds" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetApplicationIds"></a>

```csharp
private void ResetApplicationIds()
```

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetDisplayNameContains"></a>

```csharp
private void ResetDisplayNameContains()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksServicePrincipals resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServicePrincipals.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServicePrincipals.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServicePrincipals.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServicePrincipals.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksServicePrincipals resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksServicePrincipals to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksServicePrincipals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/data-sources/service_principals#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksServicePrincipals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIdsInput">ApplicationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIds">ApplicationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ApplicationIdsInput`<sup>Optional</sup> <a name="ApplicationIdsInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIdsInput"></a>

```csharp
public string[] ApplicationIdsInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContainsInput"></a>

```csharp
public string DisplayNameContainsInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ApplicationIds`<sup>Required</sup> <a name="ApplicationIds" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.applicationIds"></a>

```csharp
public string[] ApplicationIds { get; }
```

- *Type:* string[]

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipals.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalsConfig <a name="DataDatabricksServicePrincipalsConfig" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServicePrincipalsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] ApplicationIds = null,
    string DisplayNameContains = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.applicationIds">ApplicationIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/data-sources/service_principals#application_ids DataDatabricksServicePrincipals#application_ids}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/data-sources/service_principals#display_name_contains DataDatabricksServicePrincipals#display_name_contains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationIds`<sup>Optional</sup> <a name="ApplicationIds" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.applicationIds"></a>

```csharp
public string[] ApplicationIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/data-sources/service_principals#application_ids DataDatabricksServicePrincipals#application_ids}.

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.displayNameContains"></a>

```csharp
public string DisplayNameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/data-sources/service_principals#display_name_contains DataDatabricksServicePrincipals#display_name_contains}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipals.DataDatabricksServicePrincipalsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.44.0/docs/data-sources/service_principals#id DataDatabricksServicePrincipals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



