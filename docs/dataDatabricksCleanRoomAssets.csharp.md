# `dataDatabricksCleanRoomAssets` Submodule <a name="`dataDatabricksCleanRoomAssets` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomAssets <a name="DataDatabricksCleanRoomAssets" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets databricks_clean_room_assets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssets(Construct Scope, string Id, DataDatabricksCleanRoomAssetsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig">DataDatabricksCleanRoomAssetsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig">DataDatabricksCleanRoomAssetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomAssets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomAssets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomAssets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomAssets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomAssets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksCleanRoomAssets resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksCleanRoomAssets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksCleanRoomAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.assets">Assets</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList">DataDatabricksCleanRoomAssetsAssetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.cleanRoomNameInput">CleanRoomNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.cleanRoomName">CleanRoomName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Assets`<sup>Required</sup> <a name="Assets" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.assets"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsList Assets { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList">DataDatabricksCleanRoomAssetsAssetsList</a>

---

##### `CleanRoomNameInput`<sup>Optional</sup> <a name="CleanRoomNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.cleanRoomNameInput"></a>

```csharp
public string CleanRoomNameInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `CleanRoomName`<sup>Required</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.cleanRoomName"></a>

```csharp
public string CleanRoomName { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomAssetsAssets <a name="DataDatabricksCleanRoomAssetsAssets" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssets {
    string AssetType,
    string Name,
    string CleanRoomName = null,
    DataDatabricksCleanRoomAssetsAssetsForeignTable ForeignTable = null,
    DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails ForeignTableLocalDetails = null,
    DataDatabricksCleanRoomAssetsAssetsNotebook Notebook = null,
    DataDatabricksCleanRoomAssetsAssetsTable Table = null,
    DataDatabricksCleanRoomAssetsAssetsTableLocalDetails TableLocalDetails = null,
    DataDatabricksCleanRoomAssetsAssetsView View = null,
    DataDatabricksCleanRoomAssetsAssetsViewLocalDetails ViewLocalDetails = null,
    DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails VolumeLocalDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.assetType">AssetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#asset_type DataDatabricksCleanRoomAssets#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.cleanRoomName">CleanRoomName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#clean_room_name DataDatabricksCleanRoomAssets#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.foreignTable">ForeignTable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable">DataDatabricksCleanRoomAssetsAssetsForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#foreign_table DataDatabricksCleanRoomAssets#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.foreignTableLocalDetails">ForeignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#foreign_table_local_details DataDatabricksCleanRoomAssets#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook">DataDatabricksCleanRoomAssetsAssetsNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#notebook DataDatabricksCleanRoomAssets#notebook}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable">DataDatabricksCleanRoomAssetsAssetsTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#table DataDatabricksCleanRoomAssets#table}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.tableLocalDetails">TableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#table_local_details DataDatabricksCleanRoomAssets#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.view">View</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView">DataDatabricksCleanRoomAssetsAssetsView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#view DataDatabricksCleanRoomAssets#view}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.viewLocalDetails">ViewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails">DataDatabricksCleanRoomAssetsAssetsViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#view_local_details DataDatabricksCleanRoomAssets#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.volumeLocalDetails">VolumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails">DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#volume_local_details DataDatabricksCleanRoomAssets#volume_local_details}. |

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.assetType"></a>

```csharp
public string AssetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#asset_type DataDatabricksCleanRoomAssets#asset_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}.

---

##### `CleanRoomName`<sup>Optional</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.cleanRoomName"></a>

```csharp
public string CleanRoomName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#clean_room_name DataDatabricksCleanRoomAssets#clean_room_name}.

---

##### `ForeignTable`<sup>Optional</sup> <a name="ForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.foreignTable"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsForeignTable ForeignTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable">DataDatabricksCleanRoomAssetsAssetsForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#foreign_table DataDatabricksCleanRoomAssets#foreign_table}.

---

##### `ForeignTableLocalDetails`<sup>Optional</sup> <a name="ForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.foreignTableLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails ForeignTableLocalDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#foreign_table_local_details DataDatabricksCleanRoomAssets#foreign_table_local_details}.

---

##### `Notebook`<sup>Optional</sup> <a name="Notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.notebook"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsNotebook Notebook { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook">DataDatabricksCleanRoomAssetsAssetsNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#notebook DataDatabricksCleanRoomAssets#notebook}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.table"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsTable Table { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable">DataDatabricksCleanRoomAssetsAssetsTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#table DataDatabricksCleanRoomAssets#table}.

---

##### `TableLocalDetails`<sup>Optional</sup> <a name="TableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.tableLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsTableLocalDetails TableLocalDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#table_local_details DataDatabricksCleanRoomAssets#table_local_details}.

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.view"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsView View { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView">DataDatabricksCleanRoomAssetsAssetsView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#view DataDatabricksCleanRoomAssets#view}.

---

##### `ViewLocalDetails`<sup>Optional</sup> <a name="ViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.viewLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsViewLocalDetails ViewLocalDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails">DataDatabricksCleanRoomAssetsAssetsViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#view_local_details DataDatabricksCleanRoomAssets#view_local_details}.

---

##### `VolumeLocalDetails`<sup>Optional</sup> <a name="VolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets.property.volumeLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails VolumeLocalDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails">DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#volume_local_details DataDatabricksCleanRoomAssets#volume_local_details}.

---

### DataDatabricksCleanRoomAssetsAssetsForeignTable <a name="DataDatabricksCleanRoomAssetsAssetsForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsForeignTable {

};
```


### DataDatabricksCleanRoomAssetsAssetsForeignTableColumns <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsForeignTableColumns {
    string Comment = null,
    DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask Mask = null,
    string Name = null,
    object Nullable = null,
    double PartitionIndex = null,
    double Position = null,
    string TypeIntervalType = null,
    string TypeJson = null,
    string TypeName = null,
    double TypePrecision = null,
    double TypeScale = null,
    string TypeText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#mask DataDatabricksCleanRoomAssets#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.nullable">Nullable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#nullable DataDatabricksCleanRoomAssets#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#partition_index DataDatabricksCleanRoomAssets#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#position DataDatabricksCleanRoomAssets#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_interval_type DataDatabricksCleanRoomAssets#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeJson">TypeJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_json DataDatabricksCleanRoomAssets#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeName">TypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_name DataDatabricksCleanRoomAssets#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typePrecision">TypePrecision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_precision DataDatabricksCleanRoomAssets#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeScale">TypeScale</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_scale DataDatabricksCleanRoomAssets#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeText">TypeText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_text DataDatabricksCleanRoomAssets#type_text}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}.

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.mask"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask Mask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#mask DataDatabricksCleanRoomAssets#mask}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.nullable"></a>

```csharp
public object Nullable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#nullable DataDatabricksCleanRoomAssets#nullable}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#partition_index DataDatabricksCleanRoomAssets#partition_index}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#position DataDatabricksCleanRoomAssets#position}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_interval_type DataDatabricksCleanRoomAssets#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeJson"></a>

```csharp
public string TypeJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_json DataDatabricksCleanRoomAssets#type_json}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeName"></a>

```csharp
public string TypeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_name DataDatabricksCleanRoomAssets#type_name}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typePrecision"></a>

```csharp
public double TypePrecision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_precision DataDatabricksCleanRoomAssets#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeScale"></a>

```csharp
public double TypeScale { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_scale DataDatabricksCleanRoomAssets#type_scale}.

---

##### `TypeText`<sup>Optional</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns.property.typeText"></a>

```csharp
public string TypeText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_text DataDatabricksCleanRoomAssets#type_text}.

---

### DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask {
    string FunctionName = null,
    string[] UsingColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}. |

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}.

---

##### `UsingColumnNames`<sup>Optional</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}.

---

### DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails {
    string LocalName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails.property.localName">LocalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails.property.localName"></a>

```csharp
public string LocalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}.

---

### DataDatabricksCleanRoomAssetsAssetsNotebook <a name="DataDatabricksCleanRoomAssetsAssetsNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsNotebook {
    string NotebookContent,
    string[] RunnerCollaboratorAliases = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook.property.notebookContent">NotebookContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#notebook_content DataDatabricksCleanRoomAssets#notebook_content}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook.property.runnerCollaboratorAliases">RunnerCollaboratorAliases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#runner_collaborator_aliases DataDatabricksCleanRoomAssets#runner_collaborator_aliases}. |

---

##### `NotebookContent`<sup>Required</sup> <a name="NotebookContent" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook.property.notebookContent"></a>

```csharp
public string NotebookContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#notebook_content DataDatabricksCleanRoomAssets#notebook_content}.

---

##### `RunnerCollaboratorAliases`<sup>Optional</sup> <a name="RunnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook.property.runnerCollaboratorAliases"></a>

```csharp
public string[] RunnerCollaboratorAliases { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#runner_collaborator_aliases DataDatabricksCleanRoomAssets#runner_collaborator_aliases}.

---

### DataDatabricksCleanRoomAssetsAssetsNotebookReviews <a name="DataDatabricksCleanRoomAssetsAssetsNotebookReviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsNotebookReviews {
    string Comment = null,
    double CreatedAtMillis = null,
    string ReviewerCollaboratorAlias = null,
    string ReviewState = null,
    string ReviewSubReason = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.createdAtMillis">CreatedAtMillis</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#created_at_millis DataDatabricksCleanRoomAssets#created_at_millis}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.reviewerCollaboratorAlias">ReviewerCollaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#reviewer_collaborator_alias DataDatabricksCleanRoomAssets#reviewer_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.reviewState">ReviewState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#review_state DataDatabricksCleanRoomAssets#review_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.reviewSubReason">ReviewSubReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#review_sub_reason DataDatabricksCleanRoomAssets#review_sub_reason}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}.

---

##### `CreatedAtMillis`<sup>Optional</sup> <a name="CreatedAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.createdAtMillis"></a>

```csharp
public double CreatedAtMillis { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#created_at_millis DataDatabricksCleanRoomAssets#created_at_millis}.

---

##### `ReviewerCollaboratorAlias`<sup>Optional</sup> <a name="ReviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.reviewerCollaboratorAlias"></a>

```csharp
public string ReviewerCollaboratorAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#reviewer_collaborator_alias DataDatabricksCleanRoomAssets#reviewer_collaborator_alias}.

---

##### `ReviewState`<sup>Optional</sup> <a name="ReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.reviewState"></a>

```csharp
public string ReviewState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#review_state DataDatabricksCleanRoomAssets#review_state}.

---

##### `ReviewSubReason`<sup>Optional</sup> <a name="ReviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews.property.reviewSubReason"></a>

```csharp
public string ReviewSubReason { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#review_sub_reason DataDatabricksCleanRoomAssets#review_sub_reason}.

---

### DataDatabricksCleanRoomAssetsAssetsTable <a name="DataDatabricksCleanRoomAssetsAssetsTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTable {

};
```


### DataDatabricksCleanRoomAssetsAssetsTableColumns <a name="DataDatabricksCleanRoomAssetsAssetsTableColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableColumns {
    string Comment = null,
    DataDatabricksCleanRoomAssetsAssetsTableColumnsMask Mask = null,
    string Name = null,
    object Nullable = null,
    double PartitionIndex = null,
    double Position = null,
    string TypeIntervalType = null,
    string TypeJson = null,
    string TypeName = null,
    double TypePrecision = null,
    double TypeScale = null,
    string TypeText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#mask DataDatabricksCleanRoomAssets#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.nullable">Nullable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#nullable DataDatabricksCleanRoomAssets#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#partition_index DataDatabricksCleanRoomAssets#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#position DataDatabricksCleanRoomAssets#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_interval_type DataDatabricksCleanRoomAssets#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeJson">TypeJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_json DataDatabricksCleanRoomAssets#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeName">TypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_name DataDatabricksCleanRoomAssets#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typePrecision">TypePrecision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_precision DataDatabricksCleanRoomAssets#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeScale">TypeScale</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_scale DataDatabricksCleanRoomAssets#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeText">TypeText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_text DataDatabricksCleanRoomAssets#type_text}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}.

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.mask"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsTableColumnsMask Mask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#mask DataDatabricksCleanRoomAssets#mask}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.nullable"></a>

```csharp
public object Nullable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#nullable DataDatabricksCleanRoomAssets#nullable}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#partition_index DataDatabricksCleanRoomAssets#partition_index}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#position DataDatabricksCleanRoomAssets#position}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_interval_type DataDatabricksCleanRoomAssets#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeJson"></a>

```csharp
public string TypeJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_json DataDatabricksCleanRoomAssets#type_json}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeName"></a>

```csharp
public string TypeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_name DataDatabricksCleanRoomAssets#type_name}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typePrecision"></a>

```csharp
public double TypePrecision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_precision DataDatabricksCleanRoomAssets#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeScale"></a>

```csharp
public double TypeScale { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_scale DataDatabricksCleanRoomAssets#type_scale}.

---

##### `TypeText`<sup>Optional</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns.property.typeText"></a>

```csharp
public string TypeText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_text DataDatabricksCleanRoomAssets#type_text}.

---

### DataDatabricksCleanRoomAssetsAssetsTableColumnsMask <a name="DataDatabricksCleanRoomAssetsAssetsTableColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableColumnsMask {
    string FunctionName = null,
    string[] UsingColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}. |

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}.

---

##### `UsingColumnNames`<sup>Optional</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}.

---

### DataDatabricksCleanRoomAssetsAssetsTableLocalDetails <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableLocalDetails {
    string LocalName,
    object Partitions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails.property.localName">LocalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails.property.partitions">Partitions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#partitions DataDatabricksCleanRoomAssets#partitions}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails.property.localName"></a>

```csharp
public string LocalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}.

---

##### `Partitions`<sup>Optional</sup> <a name="Partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails.property.partitions"></a>

```csharp
public object Partitions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#partitions DataDatabricksCleanRoomAssets#partitions}.

---

### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions {
    object Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions.property.value">Value</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#value DataDatabricksCleanRoomAssets#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitions.property.value"></a>

```csharp
public object Value { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#value DataDatabricksCleanRoomAssets#value}.

---

### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue {
    string Name = null,
    string Op = null,
    string RecipientPropertyKey = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.op">Op</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#op DataDatabricksCleanRoomAssets#op}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#recipient_property_key DataDatabricksCleanRoomAssets#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#value DataDatabricksCleanRoomAssets#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}.

---

##### `Op`<sup>Optional</sup> <a name="Op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.op"></a>

```csharp
public string Op { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#op DataDatabricksCleanRoomAssets#op}.

---

##### `RecipientPropertyKey`<sup>Optional</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.recipientPropertyKey"></a>

```csharp
public string RecipientPropertyKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#recipient_property_key DataDatabricksCleanRoomAssets#recipient_property_key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValue.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#value DataDatabricksCleanRoomAssets#value}.

---

### DataDatabricksCleanRoomAssetsAssetsView <a name="DataDatabricksCleanRoomAssetsAssetsView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsView {

};
```


### DataDatabricksCleanRoomAssetsAssetsViewColumns <a name="DataDatabricksCleanRoomAssetsAssetsViewColumns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsViewColumns {
    string Comment = null,
    DataDatabricksCleanRoomAssetsAssetsViewColumnsMask Mask = null,
    string Name = null,
    object Nullable = null,
    double PartitionIndex = null,
    double Position = null,
    string TypeIntervalType = null,
    string TypeJson = null,
    string TypeName = null,
    double TypePrecision = null,
    double TypeScale = null,
    string TypeText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask">DataDatabricksCleanRoomAssetsAssetsViewColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#mask DataDatabricksCleanRoomAssets#mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.nullable">Nullable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#nullable DataDatabricksCleanRoomAssets#nullable}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#partition_index DataDatabricksCleanRoomAssets#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#position DataDatabricksCleanRoomAssets#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_interval_type DataDatabricksCleanRoomAssets#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeJson">TypeJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_json DataDatabricksCleanRoomAssets#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeName">TypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_name DataDatabricksCleanRoomAssets#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typePrecision">TypePrecision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_precision DataDatabricksCleanRoomAssets#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeScale">TypeScale</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_scale DataDatabricksCleanRoomAssets#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeText">TypeText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_text DataDatabricksCleanRoomAssets#type_text}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#comment DataDatabricksCleanRoomAssets#comment}.

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.mask"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsViewColumnsMask Mask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask">DataDatabricksCleanRoomAssetsAssetsViewColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#mask DataDatabricksCleanRoomAssets#mask}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#name DataDatabricksCleanRoomAssets#name}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.nullable"></a>

```csharp
public object Nullable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#nullable DataDatabricksCleanRoomAssets#nullable}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#partition_index DataDatabricksCleanRoomAssets#partition_index}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#position DataDatabricksCleanRoomAssets#position}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_interval_type DataDatabricksCleanRoomAssets#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeJson"></a>

```csharp
public string TypeJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_json DataDatabricksCleanRoomAssets#type_json}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeName"></a>

```csharp
public string TypeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_name DataDatabricksCleanRoomAssets#type_name}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typePrecision"></a>

```csharp
public double TypePrecision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_precision DataDatabricksCleanRoomAssets#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeScale"></a>

```csharp
public double TypeScale { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_scale DataDatabricksCleanRoomAssets#type_scale}.

---

##### `TypeText`<sup>Optional</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns.property.typeText"></a>

```csharp
public string TypeText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#type_text DataDatabricksCleanRoomAssets#type_text}.

---

### DataDatabricksCleanRoomAssetsAssetsViewColumnsMask <a name="DataDatabricksCleanRoomAssetsAssetsViewColumnsMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsViewColumnsMask {
    string FunctionName = null,
    string[] UsingColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}. |

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#function_name DataDatabricksCleanRoomAssets#function_name}.

---

##### `UsingColumnNames`<sup>Optional</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#using_column_names DataDatabricksCleanRoomAssets#using_column_names}.

---

### DataDatabricksCleanRoomAssetsAssetsViewLocalDetails <a name="DataDatabricksCleanRoomAssetsAssetsViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsViewLocalDetails {
    string LocalName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails.property.localName">LocalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails.property.localName"></a>

```csharp
public string LocalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}.

---

### DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails <a name="DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails {
    string LocalName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails.property.localName">LocalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails.property.localName"></a>

```csharp
public string LocalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#local_name DataDatabricksCleanRoomAssets#local_name}.

---

### DataDatabricksCleanRoomAssetsConfig <a name="DataDatabricksCleanRoomAssetsConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CleanRoomName,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.cleanRoomName">CleanRoomName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#clean_room_name DataDatabricksCleanRoomAssets#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#workspace_id DataDatabricksCleanRoomAssets#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CleanRoomName`<sup>Required</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.cleanRoomName"></a>

```csharp
public string CleanRoomName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#clean_room_name DataDatabricksCleanRoomAssets#clean_room_name}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_room_assets#workspace_id DataDatabricksCleanRoomAssets#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resetUsingColumnNames">ResetUsingColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resetFunctionName"></a>

```csharp
private void ResetFunctionName()
```

##### `ResetUsingColumnNames` <a name="ResetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```csharp
private void ResetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput">UsingColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `UsingColumnNamesInput`<sup>Optional</sup> <a name="UsingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```csharp
public string[] UsingColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `UsingColumnNames`<sup>Required</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.putMask">PutMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeText">ResetTypeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMask` <a name="PutMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.putMask"></a>

```csharp
private void PutMask(DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMask</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetMask"></a>

```csharp
private void ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetNullable"></a>

```csharp
private void ResetNullable()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetPartitionIndex"></a>

```csharp
private void ResetPartitionIndex()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeIntervalType"></a>

```csharp
private void ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeJson"></a>

```csharp
private void ResetTypeJson()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeName"></a>

```csharp
private void ResetTypeName()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypePrecision"></a>

```csharp
private void ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeScale"></a>

```csharp
private void ResetTypeScale()
```

##### `ResetTypeText` <a name="ResetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.resetTypeText"></a>

```csharp
private void ResetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.maskInput">MaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.nullableInput">NullableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.nullable">Nullable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeJson">TypeJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typePrecision">TypePrecision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeScale">TypeScale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeText">TypeText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns">DataDatabricksCleanRoomAssetsAssetsForeignTableColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.mask"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference Mask { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsMaskOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.maskInput"></a>

```csharp
public object MaskInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.nullableInput"></a>

```csharp
public object NullableInput { get; }
```

- *Type:* object

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.partitionIndexInput"></a>

```csharp
public double PartitionIndexInput { get; }
```

- *Type:* double

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```csharp
public string TypeIntervalTypeInput { get; }
```

- *Type:* string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeJsonInput"></a>

```csharp
public string TypeJsonInput { get; }
```

- *Type:* string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeNameInput"></a>

```csharp
public string TypeNameInput { get; }
```

- *Type:* string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typePrecisionInput"></a>

```csharp
public double TypePrecisionInput { get; }
```

- *Type:* double

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeScaleInput"></a>

```csharp
public double TypeScaleInput { get; }
```

- *Type:* double

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeTextInput"></a>

```csharp
public string TypeTextInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.nullable"></a>

```csharp
public object Nullable { get; }
```

- *Type:* object

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; }
```

- *Type:* string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeJson"></a>

```csharp
public string TypeJson { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typePrecision"></a>

```csharp
public double TypePrecision { get; }
```

- *Type:* double

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeScale"></a>

```csharp
public double TypeScale { get; }
```

- *Type:* double

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.typeText"></a>

```csharp
public string TypeText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsForeignTableColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumns">DataDatabricksCleanRoomAssetsAssetsForeignTableColumns</a>

---


### DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.localNameInput"></a>

```csharp
public string LocalNameInput { get; }
```

- *Type:* string

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.columns"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList">DataDatabricksCleanRoomAssetsAssetsForeignTableColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsList <a name="DataDatabricksCleanRoomAssetsAssetsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetsAssetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.resetRunnerCollaboratorAliases">ResetRunnerCollaboratorAliases</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRunnerCollaboratorAliases` <a name="ResetRunnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.resetRunnerCollaboratorAliases"></a>

```csharp
private void ResetRunnerCollaboratorAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.reviews">Reviews</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList">DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.reviewState">ReviewState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.notebookContentInput">NotebookContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.runnerCollaboratorAliasesInput">RunnerCollaboratorAliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.notebookContent">NotebookContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.runnerCollaboratorAliases">RunnerCollaboratorAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Reviews`<sup>Required</sup> <a name="Reviews" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.reviews"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList Reviews { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList">DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList</a>

---

##### `ReviewState`<sup>Required</sup> <a name="ReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.reviewState"></a>

```csharp
public string ReviewState { get; }
```

- *Type:* string

---

##### `NotebookContentInput`<sup>Optional</sup> <a name="NotebookContentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.notebookContentInput"></a>

```csharp
public string NotebookContentInput { get; }
```

- *Type:* string

---

##### `RunnerCollaboratorAliasesInput`<sup>Optional</sup> <a name="RunnerCollaboratorAliasesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.runnerCollaboratorAliasesInput"></a>

```csharp
public string[] RunnerCollaboratorAliasesInput { get; }
```

- *Type:* string[]

---

##### `NotebookContent`<sup>Required</sup> <a name="NotebookContent" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.notebookContent"></a>

```csharp
public string NotebookContent { get; }
```

- *Type:* string

---

##### `RunnerCollaboratorAliases`<sup>Required</sup> <a name="RunnerCollaboratorAliases" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.runnerCollaboratorAliases"></a>

```csharp
public string[] RunnerCollaboratorAliases { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList <a name="DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetCreatedAtMillis">ResetCreatedAtMillis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetReviewerCollaboratorAlias">ResetReviewerCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetReviewState">ResetReviewState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetReviewSubReason">ResetReviewSubReason</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCreatedAtMillis` <a name="ResetCreatedAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetCreatedAtMillis"></a>

```csharp
private void ResetCreatedAtMillis()
```

##### `ResetReviewerCollaboratorAlias` <a name="ResetReviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetReviewerCollaboratorAlias"></a>

```csharp
private void ResetReviewerCollaboratorAlias()
```

##### `ResetReviewState` <a name="ResetReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetReviewState"></a>

```csharp
private void ResetReviewState()
```

##### `ResetReviewSubReason` <a name="ResetReviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.resetReviewSubReason"></a>

```csharp
private void ResetReviewSubReason()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.createdAtMillisInput">CreatedAtMillisInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput">ReviewerCollaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewStateInput">ReviewStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewSubReasonInput">ReviewSubReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.createdAtMillis">CreatedAtMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewerCollaboratorAlias">ReviewerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewState">ReviewState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewSubReason">ReviewSubReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews">DataDatabricksCleanRoomAssetsAssetsNotebookReviews</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CreatedAtMillisInput`<sup>Optional</sup> <a name="CreatedAtMillisInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.createdAtMillisInput"></a>

```csharp
public double CreatedAtMillisInput { get; }
```

- *Type:* double

---

##### `ReviewerCollaboratorAliasInput`<sup>Optional</sup> <a name="ReviewerCollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput"></a>

```csharp
public string ReviewerCollaboratorAliasInput { get; }
```

- *Type:* string

---

##### `ReviewStateInput`<sup>Optional</sup> <a name="ReviewStateInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewStateInput"></a>

```csharp
public string ReviewStateInput { get; }
```

- *Type:* string

---

##### `ReviewSubReasonInput`<sup>Optional</sup> <a name="ReviewSubReasonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewSubReasonInput"></a>

```csharp
public string ReviewSubReasonInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedAtMillis`<sup>Required</sup> <a name="CreatedAtMillis" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.createdAtMillis"></a>

```csharp
public double CreatedAtMillis { get; }
```

- *Type:* double

---

##### `ReviewerCollaboratorAlias`<sup>Required</sup> <a name="ReviewerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewerCollaboratorAlias"></a>

```csharp
public string ReviewerCollaboratorAlias { get; }
```

- *Type:* string

---

##### `ReviewState`<sup>Required</sup> <a name="ReviewState" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewState"></a>

```csharp
public string ReviewState { get; }
```

- *Type:* string

---

##### `ReviewSubReason`<sup>Required</sup> <a name="ReviewSubReason" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.reviewSubReason"></a>

```csharp
public string ReviewSubReason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviewsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsNotebookReviews InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookReviews">DataDatabricksCleanRoomAssetsAssetsNotebookReviews</a>

---


### DataDatabricksCleanRoomAssetsAssetsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putForeignTable">PutForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putForeignTableLocalDetails">PutForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putNotebook">PutNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putTableLocalDetails">PutTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putView">PutView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putViewLocalDetails">PutViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putVolumeLocalDetails">PutVolumeLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetCleanRoomName">ResetCleanRoomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetForeignTable">ResetForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetForeignTableLocalDetails">ResetForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetNotebook">ResetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetTableLocalDetails">ResetTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetView">ResetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetViewLocalDetails">ResetViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetVolumeLocalDetails">ResetVolumeLocalDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForeignTable` <a name="PutForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putForeignTable"></a>

```csharp
private void PutForeignTable(DataDatabricksCleanRoomAssetsAssetsForeignTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putForeignTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTable">DataDatabricksCleanRoomAssetsAssetsForeignTable</a>

---

##### `PutForeignTableLocalDetails` <a name="PutForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putForeignTableLocalDetails"></a>

```csharp
private void PutForeignTableLocalDetails(DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putForeignTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetails</a>

---

##### `PutNotebook` <a name="PutNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putNotebook"></a>

```csharp
private void PutNotebook(DataDatabricksCleanRoomAssetsAssetsNotebook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebook">DataDatabricksCleanRoomAssetsAssetsNotebook</a>

---

##### `PutTable` <a name="PutTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putTable"></a>

```csharp
private void PutTable(DataDatabricksCleanRoomAssetsAssetsTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTable">DataDatabricksCleanRoomAssetsAssetsTable</a>

---

##### `PutTableLocalDetails` <a name="PutTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putTableLocalDetails"></a>

```csharp
private void PutTableLocalDetails(DataDatabricksCleanRoomAssetsAssetsTableLocalDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetails">DataDatabricksCleanRoomAssetsAssetsTableLocalDetails</a>

---

##### `PutView` <a name="PutView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putView"></a>

```csharp
private void PutView(DataDatabricksCleanRoomAssetsAssetsView Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsView">DataDatabricksCleanRoomAssetsAssetsView</a>

---

##### `PutViewLocalDetails` <a name="PutViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putViewLocalDetails"></a>

```csharp
private void PutViewLocalDetails(DataDatabricksCleanRoomAssetsAssetsViewLocalDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putViewLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetails">DataDatabricksCleanRoomAssetsAssetsViewLocalDetails</a>

---

##### `PutVolumeLocalDetails` <a name="PutVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putVolumeLocalDetails"></a>

```csharp
private void PutVolumeLocalDetails(DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.putVolumeLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails">DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetails</a>

---

##### `ResetCleanRoomName` <a name="ResetCleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetCleanRoomName"></a>

```csharp
private void ResetCleanRoomName()
```

##### `ResetForeignTable` <a name="ResetForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetForeignTable"></a>

```csharp
private void ResetForeignTable()
```

##### `ResetForeignTableLocalDetails` <a name="ResetForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetForeignTableLocalDetails"></a>

```csharp
private void ResetForeignTableLocalDetails()
```

##### `ResetNotebook` <a name="ResetNotebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetNotebook"></a>

```csharp
private void ResetNotebook()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetTable"></a>

```csharp
private void ResetTable()
```

##### `ResetTableLocalDetails` <a name="ResetTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetTableLocalDetails"></a>

```csharp
private void ResetTableLocalDetails()
```

##### `ResetView` <a name="ResetView" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetView"></a>

```csharp
private void ResetView()
```

##### `ResetViewLocalDetails` <a name="ResetViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetViewLocalDetails"></a>

```csharp
private void ResetViewLocalDetails()
```

##### `ResetVolumeLocalDetails` <a name="ResetVolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.resetVolumeLocalDetails"></a>

```csharp
private void ResetVolumeLocalDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.addedAt">AddedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTable">ForeignTable</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference">DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTableLocalDetails">ForeignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference">DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.ownerCollaboratorAlias">OwnerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference">DataDatabricksCleanRoomAssetsAssetsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.tableLocalDetails">TableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.view">View</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference">DataDatabricksCleanRoomAssetsAssetsViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.viewLocalDetails">ViewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.volumeLocalDetails">VolumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.assetTypeInput">AssetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.cleanRoomNameInput">CleanRoomNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTableInput">ForeignTableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTableLocalDetailsInput">ForeignTableLocalDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.notebookInput">NotebookInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.tableInput">TableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.tableLocalDetailsInput">TableLocalDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.viewInput">ViewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.viewLocalDetailsInput">ViewLocalDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.volumeLocalDetailsInput">VolumeLocalDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.assetType">AssetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.cleanRoomName">CleanRoomName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets">DataDatabricksCleanRoomAssetsAssets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddedAt`<sup>Required</sup> <a name="AddedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.addedAt"></a>

```csharp
public double AddedAt { get; }
```

- *Type:* double

---

##### `ForeignTable`<sup>Required</sup> <a name="ForeignTable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTable"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference ForeignTable { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference">DataDatabricksCleanRoomAssetsAssetsForeignTableOutputReference</a>

---

##### `ForeignTableLocalDetails`<sup>Required</sup> <a name="ForeignTableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTableLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference ForeignTableLocalDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsForeignTableLocalDetailsOutputReference</a>

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.notebook"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference Notebook { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference">DataDatabricksCleanRoomAssetsAssetsNotebookOutputReference</a>

---

##### `OwnerCollaboratorAlias`<sup>Required</sup> <a name="OwnerCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.ownerCollaboratorAlias"></a>

```csharp
public string OwnerCollaboratorAlias { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.table"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsTableOutputReference Table { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference">DataDatabricksCleanRoomAssetsAssetsTableOutputReference</a>

---

##### `TableLocalDetails`<sup>Required</sup> <a name="TableLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.tableLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference TableLocalDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference</a>

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.view"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsViewOutputReference View { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference">DataDatabricksCleanRoomAssetsAssetsViewOutputReference</a>

---

##### `ViewLocalDetails`<sup>Required</sup> <a name="ViewLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.viewLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference ViewLocalDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference</a>

---

##### `VolumeLocalDetails`<sup>Required</sup> <a name="VolumeLocalDetails" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.volumeLocalDetails"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference VolumeLocalDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference">DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference</a>

---

##### `AssetTypeInput`<sup>Optional</sup> <a name="AssetTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.assetTypeInput"></a>

```csharp
public string AssetTypeInput { get; }
```

- *Type:* string

---

##### `CleanRoomNameInput`<sup>Optional</sup> <a name="CleanRoomNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.cleanRoomNameInput"></a>

```csharp
public string CleanRoomNameInput { get; }
```

- *Type:* string

---

##### `ForeignTableInput`<sup>Optional</sup> <a name="ForeignTableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTableInput"></a>

```csharp
public object ForeignTableInput { get; }
```

- *Type:* object

---

##### `ForeignTableLocalDetailsInput`<sup>Optional</sup> <a name="ForeignTableLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.foreignTableLocalDetailsInput"></a>

```csharp
public object ForeignTableLocalDetailsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotebookInput`<sup>Optional</sup> <a name="NotebookInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.notebookInput"></a>

```csharp
public object NotebookInput { get; }
```

- *Type:* object

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.tableInput"></a>

```csharp
public object TableInput { get; }
```

- *Type:* object

---

##### `TableLocalDetailsInput`<sup>Optional</sup> <a name="TableLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.tableLocalDetailsInput"></a>

```csharp
public object TableLocalDetailsInput { get; }
```

- *Type:* object

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.viewInput"></a>

```csharp
public object ViewInput { get; }
```

- *Type:* object

---

##### `ViewLocalDetailsInput`<sup>Optional</sup> <a name="ViewLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.viewLocalDetailsInput"></a>

```csharp
public object ViewLocalDetailsInput { get; }
```

- *Type:* object

---

##### `VolumeLocalDetailsInput`<sup>Optional</sup> <a name="VolumeLocalDetailsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.volumeLocalDetailsInput"></a>

```csharp
public object VolumeLocalDetailsInput { get; }
```

- *Type:* object

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.assetType"></a>

```csharp
public string AssetType { get; }
```

- *Type:* string

---

##### `CleanRoomName`<sup>Required</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.cleanRoomName"></a>

```csharp
public string CleanRoomName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssets">DataDatabricksCleanRoomAssetsAssets</a>

---


### DataDatabricksCleanRoomAssetsAssetsTableColumnsList <a name="DataDatabricksCleanRoomAssetsAssetsTableColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resetUsingColumnNames">ResetUsingColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resetFunctionName"></a>

```csharp
private void ResetFunctionName()
```

##### `ResetUsingColumnNames` <a name="ResetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```csharp
private void ResetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.usingColumnNamesInput">UsingColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `UsingColumnNamesInput`<sup>Optional</sup> <a name="UsingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```csharp
public string[] UsingColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `UsingColumnNames`<sup>Required</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.putMask">PutMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeText">ResetTypeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMask` <a name="PutMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.putMask"></a>

```csharp
private void PutMask(DataDatabricksCleanRoomAssetsAssetsTableColumnsMask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMask">DataDatabricksCleanRoomAssetsAssetsTableColumnsMask</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetMask"></a>

```csharp
private void ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetNullable"></a>

```csharp
private void ResetNullable()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetPartitionIndex"></a>

```csharp
private void ResetPartitionIndex()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeIntervalType"></a>

```csharp
private void ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeJson"></a>

```csharp
private void ResetTypeJson()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeName"></a>

```csharp
private void ResetTypeName()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypePrecision"></a>

```csharp
private void ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeScale"></a>

```csharp
private void ResetTypeScale()
```

##### `ResetTypeText` <a name="ResetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.resetTypeText"></a>

```csharp
private void ResetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.maskInput">MaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.nullableInput">NullableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.nullable">Nullable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeJson">TypeJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typePrecision">TypePrecision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeScale">TypeScale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeText">TypeText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns">DataDatabricksCleanRoomAssetsAssetsTableColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.mask"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference Mask { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference">DataDatabricksCleanRoomAssetsAssetsTableColumnsMaskOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.maskInput"></a>

```csharp
public object MaskInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.nullableInput"></a>

```csharp
public object NullableInput { get; }
```

- *Type:* object

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.partitionIndexInput"></a>

```csharp
public double PartitionIndexInput { get; }
```

- *Type:* double

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```csharp
public string TypeIntervalTypeInput { get; }
```

- *Type:* string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeJsonInput"></a>

```csharp
public string TypeJsonInput { get; }
```

- *Type:* string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeNameInput"></a>

```csharp
public string TypeNameInput { get; }
```

- *Type:* string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typePrecisionInput"></a>

```csharp
public double TypePrecisionInput { get; }
```

- *Type:* double

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeScaleInput"></a>

```csharp
public double TypeScaleInput { get; }
```

- *Type:* double

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeTextInput"></a>

```csharp
public string TypeTextInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.nullable"></a>

```csharp
public object Nullable { get; }
```

- *Type:* object

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; }
```

- *Type:* string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeJson"></a>

```csharp
public string TypeJson { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typePrecision"></a>

```csharp
public double TypePrecision { get; }
```

- *Type:* double

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeScale"></a>

```csharp
public double TypeScale { get; }
```

- *Type:* double

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.typeText"></a>

```csharp
public string TypeText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsTableColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumns">DataDatabricksCleanRoomAssetsAssetsTableColumns</a>

---


### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.putPartitions">PutPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.resetPartitions">ResetPartitions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartitions` <a name="PutPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.putPartitions"></a>

```csharp
private void PutPartitions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.putPartitions.parameter.value"></a>

- *Type:* object

---

##### `ResetPartitions` <a name="ResetPartitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.resetPartitions"></a>

```csharp
private void ResetPartitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.partitions">Partitions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.partitionsInput">PartitionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Partitions`<sup>Required</sup> <a name="Partitions" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.partitions"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList Partitions { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList</a>

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.localNameInput"></a>

```csharp
public string LocalNameInput { get; }
```

- *Type:* string

---

##### `PartitionsInput`<sup>Optional</sup> <a name="PartitionsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.partitionsInput"></a>

```csharp
public object PartitionsInput { get; }
```

- *Type:* object

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.putValue"></a>

```csharp
private void PutValue(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.putValue.parameter.value"></a>

- *Type:* object

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.valueInput">ValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.value"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList Value { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList">DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.valueInput"></a>

```csharp
public object ValueInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetOp">ResetOp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey">ResetRecipientPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOp` <a name="ResetOp" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetOp"></a>

```csharp
private void ResetOp()
```

##### `ResetRecipientPropertyKey` <a name="ResetRecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey"></a>

```csharp
private void ResetRecipientPropertyKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.opInput">OpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput">RecipientPropertyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.op">Op</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpInput`<sup>Optional</sup> <a name="OpInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.opInput"></a>

```csharp
public string OpInput { get; }
```

- *Type:* string

---

##### `RecipientPropertyKeyInput`<sup>Optional</sup> <a name="RecipientPropertyKeyInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput"></a>

```csharp
public string RecipientPropertyKeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.op"></a>

```csharp
public string Op { get; }
```

- *Type:* string

---

##### `RecipientPropertyKey`<sup>Required</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey"></a>

```csharp
public string RecipientPropertyKey { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableLocalDetailsPartitionsValueOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsTableOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList">DataDatabricksCleanRoomAssetsAssetsTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.columns"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsTableColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableColumnsList">DataDatabricksCleanRoomAssetsAssetsTableColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsTableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsViewColumnsList <a name="DataDatabricksCleanRoomAssetsAssetsViewColumnsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsViewColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.get"></a>

```csharp
private DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resetUsingColumnNames">ResetUsingColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resetFunctionName"></a>

```csharp
private void ResetFunctionName()
```

##### `ResetUsingColumnNames` <a name="ResetUsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.resetUsingColumnNames"></a>

```csharp
private void ResetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.usingColumnNamesInput">UsingColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `UsingColumnNamesInput`<sup>Optional</sup> <a name="UsingColumnNamesInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```csharp
public string[] UsingColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `UsingColumnNames`<sup>Required</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.putMask">PutMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeText">ResetTypeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMask` <a name="PutMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.putMask"></a>

```csharp
private void PutMask(DataDatabricksCleanRoomAssetsAssetsViewColumnsMask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMask">DataDatabricksCleanRoomAssetsAssetsViewColumnsMask</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetMask"></a>

```csharp
private void ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetNullable"></a>

```csharp
private void ResetNullable()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetPartitionIndex"></a>

```csharp
private void ResetPartitionIndex()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeIntervalType"></a>

```csharp
private void ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeJson"></a>

```csharp
private void ResetTypeJson()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeName"></a>

```csharp
private void ResetTypeName()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypePrecision"></a>

```csharp
private void ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeScale"></a>

```csharp
private void ResetTypeScale()
```

##### `ResetTypeText` <a name="ResetTypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.resetTypeText"></a>

```csharp
private void ResetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.maskInput">MaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.nullableInput">NullableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.nullable">Nullable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeJson">TypeJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typePrecision">TypePrecision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeScale">TypeScale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeText">TypeText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns">DataDatabricksCleanRoomAssetsAssetsViewColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.mask"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference Mask { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference">DataDatabricksCleanRoomAssetsAssetsViewColumnsMaskOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.maskInput"></a>

```csharp
public object MaskInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.nullableInput"></a>

```csharp
public object NullableInput { get; }
```

- *Type:* object

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.partitionIndexInput"></a>

```csharp
public double PartitionIndexInput { get; }
```

- *Type:* double

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeIntervalTypeInput"></a>

```csharp
public string TypeIntervalTypeInput { get; }
```

- *Type:* string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeJsonInput"></a>

```csharp
public string TypeJsonInput { get; }
```

- *Type:* string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeNameInput"></a>

```csharp
public string TypeNameInput { get; }
```

- *Type:* string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typePrecisionInput"></a>

```csharp
public double TypePrecisionInput { get; }
```

- *Type:* double

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeScaleInput"></a>

```csharp
public double TypeScaleInput { get; }
```

- *Type:* double

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeTextInput"></a>

```csharp
public string TypeTextInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.nullable"></a>

```csharp
public object Nullable { get; }
```

- *Type:* object

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; }
```

- *Type:* string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeJson"></a>

```csharp
public string TypeJson { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typePrecision"></a>

```csharp
public double TypePrecision { get; }
```

- *Type:* double

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeScale"></a>

```csharp
public double TypeScale { get; }
```

- *Type:* double

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.typeText"></a>

```csharp
public string TypeText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsViewColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumns">DataDatabricksCleanRoomAssetsAssetsViewColumns</a>

---


### DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.localNameInput"></a>

```csharp
public string LocalNameInput { get; }
```

- *Type:* string

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewLocalDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsViewOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsViewOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsViewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList">DataDatabricksCleanRoomAssetsAssetsViewColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.columns"></a>

```csharp
public DataDatabricksCleanRoomAssetsAssetsViewColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewColumnsList">DataDatabricksCleanRoomAssetsAssetsViewColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsViewOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference <a name="DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.localNameInput"></a>

```csharp
public string LocalNameInput { get; }
```

- *Type:* string

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomAssets.DataDatabricksCleanRoomAssetsAssetsVolumeLocalDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



