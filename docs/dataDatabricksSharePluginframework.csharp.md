# `dataDatabricksSharePluginframework` Submodule <a name="`dataDatabricksSharePluginframework` Submodule" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSharePluginframework <a name="DataDatabricksSharePluginframework" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework databricks_share_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSharePluginframework(Construct Scope, string Id, DataDatabricksSharePluginframeworkConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig">DataDatabricksSharePluginframeworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig">DataDatabricksSharePluginframeworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.putObject">PutObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetStorageRoot">ResetStorageRoot</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutObject` <a name="PutObject" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.putObject"></a>

```csharp
private void PutObject(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.putObject.parameter.value"></a>

- *Type:* object

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetObject` <a name="ResetObject" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetObject"></a>

```csharp
private void ResetObject()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetStorageLocation"></a>

```csharp
private void ResetStorageLocation()
```

##### `ResetStorageRoot` <a name="ResetStorageRoot" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.resetStorageRoot"></a>

```csharp
private void ResetStorageRoot()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksSharePluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksSharePluginframework.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksSharePluginframework.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksSharePluginframework.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksSharePluginframework.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksSharePluginframework resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksSharePluginframework to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksSharePluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSharePluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.effectiveOwner">EffectiveOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.object">Object</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList">DataDatabricksSharePluginframeworkObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.objectInput">ObjectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageLocationInput">StorageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRootInput">StorageRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageLocation">StorageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRoot">StorageRoot</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `EffectiveOwner`<sup>Required</sup> <a name="EffectiveOwner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.effectiveOwner"></a>

```csharp
public string EffectiveOwner { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.object"></a>

```csharp
public DataDatabricksSharePluginframeworkObjectList Object { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList">DataDatabricksSharePluginframeworkObjectList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.objectInput"></a>

```csharp
public object ObjectInput { get; }
```

- *Type:* object

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageLocationInput"></a>

```csharp
public string StorageLocationInput { get; }
```

- *Type:* string

---

##### `StorageRootInput`<sup>Optional</sup> <a name="StorageRootInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRootInput"></a>

```csharp
public string StorageRootInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageLocation"></a>

```csharp
public string StorageLocation { get; }
```

- *Type:* string

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.storageRoot"></a>

```csharp
public string StorageRoot { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframework.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSharePluginframeworkConfig <a name="DataDatabricksSharePluginframeworkConfig" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSharePluginframeworkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Comment = null,
    string Name = null,
    object Object = null,
    string Owner = null,
    string StorageLocation = null,
    string StorageRoot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.object">Object</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#object DataDatabricksSharePluginframework#object}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#owner DataDatabricksSharePluginframework#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.storageLocation">StorageLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#storage_location DataDatabricksSharePluginframework#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.storageRoot">StorageRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#storage_root DataDatabricksSharePluginframework#storage_root}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.object"></a>

```csharp
public object Object { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#object DataDatabricksSharePluginframework#object}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#owner DataDatabricksSharePluginframework#owner}.

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.storageLocation"></a>

```csharp
public string StorageLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#storage_location DataDatabricksSharePluginframework#storage_location}.

---

##### `StorageRoot`<sup>Optional</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkConfig.property.storageRoot"></a>

```csharp
public string StorageRoot { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#storage_root DataDatabricksSharePluginframework#storage_root}.

---

### DataDatabricksSharePluginframeworkObject <a name="DataDatabricksSharePluginframeworkObject" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSharePluginframeworkObject {
    string Name,
    object CdfEnabled = null,
    string Comment = null,
    string Content = null,
    string DataObjectType = null,
    string HistoryDataSharingStatus = null,
    object Partition = null,
    string SharedAs = null,
    double StartVersion = null,
    string StringSharedAs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.cdfEnabled">CdfEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#cdf_enabled DataDatabricksSharePluginframework#cdf_enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#content DataDatabricksSharePluginframework#content}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.dataObjectType">DataObjectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#data_object_type DataDatabricksSharePluginframework#data_object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.historyDataSharingStatus">HistoryDataSharingStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#history_data_sharing_status DataDatabricksSharePluginframework#history_data_sharing_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.partition">Partition</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#partition DataDatabricksSharePluginframework#partition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.sharedAs">SharedAs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#shared_as DataDatabricksSharePluginframework#shared_as}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.startVersion">StartVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#start_version DataDatabricksSharePluginframework#start_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.stringSharedAs">StringSharedAs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#string_shared_as DataDatabricksSharePluginframework#string_shared_as}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}.

---

##### `CdfEnabled`<sup>Optional</sup> <a name="CdfEnabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.cdfEnabled"></a>

```csharp
public object CdfEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#cdf_enabled DataDatabricksSharePluginframework#cdf_enabled}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#comment DataDatabricksSharePluginframework#comment}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#content DataDatabricksSharePluginframework#content}.

---

##### `DataObjectType`<sup>Optional</sup> <a name="DataObjectType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.dataObjectType"></a>

```csharp
public string DataObjectType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#data_object_type DataDatabricksSharePluginframework#data_object_type}.

---

##### `HistoryDataSharingStatus`<sup>Optional</sup> <a name="HistoryDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.historyDataSharingStatus"></a>

```csharp
public string HistoryDataSharingStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#history_data_sharing_status DataDatabricksSharePluginframework#history_data_sharing_status}.

---

##### `Partition`<sup>Optional</sup> <a name="Partition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.partition"></a>

```csharp
public object Partition { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#partition DataDatabricksSharePluginframework#partition}.

---

##### `SharedAs`<sup>Optional</sup> <a name="SharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.sharedAs"></a>

```csharp
public string SharedAs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#shared_as DataDatabricksSharePluginframework#shared_as}.

---

##### `StartVersion`<sup>Optional</sup> <a name="StartVersion" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.startVersion"></a>

```csharp
public double StartVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#start_version DataDatabricksSharePluginframework#start_version}.

---

##### `StringSharedAs`<sup>Optional</sup> <a name="StringSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObject.property.stringSharedAs"></a>

```csharp
public string StringSharedAs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#string_shared_as DataDatabricksSharePluginframework#string_shared_as}.

---

### DataDatabricksSharePluginframeworkObjectPartition <a name="DataDatabricksSharePluginframeworkObjectPartition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSharePluginframeworkObjectPartition {
    object Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition.property.value">Value</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartition.property.value"></a>

```csharp
public object Value { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}.

---

### DataDatabricksSharePluginframeworkObjectPartitionValue <a name="DataDatabricksSharePluginframeworkObjectPartitionValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSharePluginframeworkObjectPartitionValue {
    string Name = null,
    string Op = null,
    string RecipientPropertyKey = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.op">Op</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#op DataDatabricksSharePluginframework#op}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#recipient_property_key DataDatabricksSharePluginframework#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#name DataDatabricksSharePluginframework#name}.

---

##### `Op`<sup>Optional</sup> <a name="Op" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.op"></a>

```csharp
public string Op { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#op DataDatabricksSharePluginframework#op}.

---

##### `RecipientPropertyKey`<sup>Optional</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.recipientPropertyKey"></a>

```csharp
public string RecipientPropertyKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#recipient_property_key DataDatabricksSharePluginframework#recipient_property_key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValue.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.63.0/docs/data-sources/share_pluginframework#value DataDatabricksSharePluginframework#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSharePluginframeworkObjectList <a name="DataDatabricksSharePluginframeworkObjectList" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSharePluginframeworkObjectList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.get"></a>

```csharp
private DataDatabricksSharePluginframeworkObjectOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksSharePluginframeworkObjectOutputReference <a name="DataDatabricksSharePluginframeworkObjectOutputReference" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSharePluginframeworkObjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.putPartition">PutPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetCdfEnabled">ResetCdfEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetDataObjectType">ResetDataObjectType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetHistoryDataSharingStatus">ResetHistoryDataSharingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetPartition">ResetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetSharedAs">ResetSharedAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStartVersion">ResetStartVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStringSharedAs">ResetStringSharedAs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartition` <a name="PutPartition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.putPartition"></a>

```csharp
private void PutPartition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.putPartition.parameter.value"></a>

- *Type:* object

---

##### `ResetCdfEnabled` <a name="ResetCdfEnabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetCdfEnabled"></a>

```csharp
private void ResetCdfEnabled()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetDataObjectType` <a name="ResetDataObjectType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetDataObjectType"></a>

```csharp
private void ResetDataObjectType()
```

##### `ResetHistoryDataSharingStatus` <a name="ResetHistoryDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetHistoryDataSharingStatus"></a>

```csharp
private void ResetHistoryDataSharingStatus()
```

##### `ResetPartition` <a name="ResetPartition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetPartition"></a>

```csharp
private void ResetPartition()
```

##### `ResetSharedAs` <a name="ResetSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetSharedAs"></a>

```csharp
private void ResetSharedAs()
```

##### `ResetStartVersion` <a name="ResetStartVersion" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStartVersion"></a>

```csharp
private void ResetStartVersion()
```

##### `ResetStringSharedAs` <a name="ResetStringSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.resetStringSharedAs"></a>

```csharp
private void ResetStringSharedAs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedAt">AddedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedBy">AddedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveCdfEnabled">EffectiveCdfEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveHistoryDataSharingStatus">EffectiveHistoryDataSharingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveSharedAs">EffectiveSharedAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveStartVersion">EffectiveStartVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partition">Partition</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList">DataDatabricksSharePluginframeworkObjectPartitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabledInput">CdfEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectTypeInput">DataObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatusInput">HistoryDataSharingStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partitionInput">PartitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAsInput">SharedAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersionInput">StartVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAsInput">StringSharedAsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabled">CdfEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectType">DataObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatus">HistoryDataSharingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAs">SharedAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersion">StartVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAs">StringSharedAs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddedAt`<sup>Required</sup> <a name="AddedAt" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedAt"></a>

```csharp
public double AddedAt { get; }
```

- *Type:* double

---

##### `AddedBy`<sup>Required</sup> <a name="AddedBy" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.addedBy"></a>

```csharp
public string AddedBy { get; }
```

- *Type:* string

---

##### `EffectiveCdfEnabled`<sup>Required</sup> <a name="EffectiveCdfEnabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveCdfEnabled"></a>

```csharp
public IResolvable EffectiveCdfEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EffectiveHistoryDataSharingStatus`<sup>Required</sup> <a name="EffectiveHistoryDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveHistoryDataSharingStatus"></a>

```csharp
public string EffectiveHistoryDataSharingStatus { get; }
```

- *Type:* string

---

##### `EffectiveSharedAs`<sup>Required</sup> <a name="EffectiveSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveSharedAs"></a>

```csharp
public string EffectiveSharedAs { get; }
```

- *Type:* string

---

##### `EffectiveStartVersion`<sup>Required</sup> <a name="EffectiveStartVersion" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.effectiveStartVersion"></a>

```csharp
public double EffectiveStartVersion { get; }
```

- *Type:* double

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partition"></a>

```csharp
public DataDatabricksSharePluginframeworkObjectPartitionList Partition { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList">DataDatabricksSharePluginframeworkObjectPartitionList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `CdfEnabledInput`<sup>Optional</sup> <a name="CdfEnabledInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabledInput"></a>

```csharp
public object CdfEnabledInput { get; }
```

- *Type:* object

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `DataObjectTypeInput`<sup>Optional</sup> <a name="DataObjectTypeInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectTypeInput"></a>

```csharp
public string DataObjectTypeInput { get; }
```

- *Type:* string

---

##### `HistoryDataSharingStatusInput`<sup>Optional</sup> <a name="HistoryDataSharingStatusInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatusInput"></a>

```csharp
public string HistoryDataSharingStatusInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartitionInput`<sup>Optional</sup> <a name="PartitionInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.partitionInput"></a>

```csharp
public object PartitionInput { get; }
```

- *Type:* object

---

##### `SharedAsInput`<sup>Optional</sup> <a name="SharedAsInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAsInput"></a>

```csharp
public string SharedAsInput { get; }
```

- *Type:* string

---

##### `StartVersionInput`<sup>Optional</sup> <a name="StartVersionInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersionInput"></a>

```csharp
public double StartVersionInput { get; }
```

- *Type:* double

---

##### `StringSharedAsInput`<sup>Optional</sup> <a name="StringSharedAsInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAsInput"></a>

```csharp
public string StringSharedAsInput { get; }
```

- *Type:* string

---

##### `CdfEnabled`<sup>Required</sup> <a name="CdfEnabled" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.cdfEnabled"></a>

```csharp
public object CdfEnabled { get; }
```

- *Type:* object

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `DataObjectType`<sup>Required</sup> <a name="DataObjectType" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.dataObjectType"></a>

```csharp
public string DataObjectType { get; }
```

- *Type:* string

---

##### `HistoryDataSharingStatus`<sup>Required</sup> <a name="HistoryDataSharingStatus" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.historyDataSharingStatus"></a>

```csharp
public string HistoryDataSharingStatus { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SharedAs`<sup>Required</sup> <a name="SharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.sharedAs"></a>

```csharp
public string SharedAs { get; }
```

- *Type:* string

---

##### `StartVersion`<sup>Required</sup> <a name="StartVersion" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.startVersion"></a>

```csharp
public double StartVersion { get; }
```

- *Type:* double

---

##### `StringSharedAs`<sup>Required</sup> <a name="StringSharedAs" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.stringSharedAs"></a>

```csharp
public string StringSharedAs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksSharePluginframeworkObjectPartitionList <a name="DataDatabricksSharePluginframeworkObjectPartitionList" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSharePluginframeworkObjectPartitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.get"></a>

```csharp
private DataDatabricksSharePluginframeworkObjectPartitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksSharePluginframeworkObjectPartitionOutputReference <a name="DataDatabricksSharePluginframeworkObjectPartitionOutputReference" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSharePluginframeworkObjectPartitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.putValue"></a>

```csharp
private void PutValue(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.putValue.parameter.value"></a>

- *Type:* object

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList">DataDatabricksSharePluginframeworkObjectPartitionValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.valueInput">ValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.value"></a>

```csharp
public DataDatabricksSharePluginframeworkObjectPartitionValueList Value { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList">DataDatabricksSharePluginframeworkObjectPartitionValueList</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.valueInput"></a>

```csharp
public object ValueInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksSharePluginframeworkObjectPartitionValueList <a name="DataDatabricksSharePluginframeworkObjectPartitionValueList" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSharePluginframeworkObjectPartitionValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.get"></a>

```csharp
private DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference <a name="DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetOp">ResetOp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetRecipientPropertyKey">ResetRecipientPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOp` <a name="ResetOp" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetOp"></a>

```csharp
private void ResetOp()
```

##### `ResetRecipientPropertyKey` <a name="ResetRecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetRecipientPropertyKey"></a>

```csharp
private void ResetRecipientPropertyKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.opInput">OpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKeyInput">RecipientPropertyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.op">Op</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpInput`<sup>Optional</sup> <a name="OpInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.opInput"></a>

```csharp
public string OpInput { get; }
```

- *Type:* string

---

##### `RecipientPropertyKeyInput`<sup>Optional</sup> <a name="RecipientPropertyKeyInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKeyInput"></a>

```csharp
public string RecipientPropertyKeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.op"></a>

```csharp
public string Op { get; }
```

- *Type:* string

---

##### `RecipientPropertyKey`<sup>Required</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.recipientPropertyKey"></a>

```csharp
public string RecipientPropertyKey { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSharePluginframework.DataDatabricksSharePluginframeworkObjectPartitionValueOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



