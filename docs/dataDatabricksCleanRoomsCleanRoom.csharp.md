# `dataDatabricksCleanRoomsCleanRoom` Submodule <a name="`dataDatabricksCleanRoomsCleanRoom` Submodule" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCleanRoomsCleanRoom <a name="DataDatabricksCleanRoomsCleanRoom" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room databricks_clean_rooms_clean_room}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoom(Construct Scope, string Id, DataDatabricksCleanRoomsCleanRoomConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig">DataDatabricksCleanRoomsCleanRoomConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig">DataDatabricksCleanRoomsCleanRoomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.putRemoteDetailedInfo">PutRemoteDetailedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetRemoteDetailedInfo">ResetRemoteDetailedInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutRemoteDetailedInfo` <a name="PutRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.putRemoteDetailedInfo"></a>

```csharp
private void PutRemoteDetailedInfo(DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.putRemoteDetailedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetRemoteDetailedInfo` <a name="ResetRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetRemoteDetailedInfo"></a>

```csharp
private void ResetRemoteDetailedInfo()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCleanRoomsCleanRoom resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomsCleanRoom.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomsCleanRoom.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomsCleanRoom.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCleanRoomsCleanRoom.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksCleanRoomsCleanRoom resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksCleanRoomsCleanRoom to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksCleanRoomsCleanRoom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCleanRoomsCleanRoom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.accessRestricted">AccessRestricted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.localCollaboratorAlias">LocalCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.outputCatalog">OutputCatalog</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference">DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.remoteDetailedInfo">RemoteDetailedInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.remoteDetailedInfoInput">RemoteDetailedInfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccessRestricted`<sup>Required</sup> <a name="AccessRestricted" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.accessRestricted"></a>

```csharp
public string AccessRestricted { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `LocalCollaboratorAlias`<sup>Required</sup> <a name="LocalCollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.localCollaboratorAlias"></a>

```csharp
public string LocalCollaboratorAlias { get; }
```

- *Type:* string

---

##### `OutputCatalog`<sup>Required</sup> <a name="OutputCatalog" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.outputCatalog"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference OutputCatalog { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference">DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference</a>

---

##### `RemoteDetailedInfo`<sup>Required</sup> <a name="RemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.remoteDetailedInfo"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference RemoteDetailedInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `RemoteDetailedInfoInput`<sup>Optional</sup> <a name="RemoteDetailedInfoInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.remoteDetailedInfoInput"></a>

```csharp
public object RemoteDetailedInfoInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoom.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCleanRoomsCleanRoomConfig <a name="DataDatabricksCleanRoomsCleanRoomConfig" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Comment = null,
    string Name = null,
    string Owner = null,
    DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo RemoteDetailedInfo = null,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#comment DataDatabricksCleanRoomsCleanRoom#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#name DataDatabricksCleanRoomsCleanRoom#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#owner DataDatabricksCleanRoomsCleanRoom#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.remoteDetailedInfo">RemoteDetailedInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#remote_detailed_info DataDatabricksCleanRoomsCleanRoom#remote_detailed_info}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#workspace_id DataDatabricksCleanRoomsCleanRoom#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#comment DataDatabricksCleanRoomsCleanRoom#comment}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#name DataDatabricksCleanRoomsCleanRoom#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#owner DataDatabricksCleanRoomsCleanRoom#owner}.

---

##### `RemoteDetailedInfo`<sup>Optional</sup> <a name="RemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.remoteDetailedInfo"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo RemoteDetailedInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#remote_detailed_info DataDatabricksCleanRoomsCleanRoom#remote_detailed_info}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#workspace_id DataDatabricksCleanRoomsCleanRoom#workspace_id}.

---

### DataDatabricksCleanRoomsCleanRoomOutputCatalog <a name="DataDatabricksCleanRoomsCleanRoomOutputCatalog" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomOutputCatalog {
    string CatalogName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#catalog_name DataDatabricksCleanRoomsCleanRoom#catalog_name}. |

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#catalog_name DataDatabricksCleanRoomsCleanRoom#catalog_name}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo {
    string CloudVendor = null,
    object Collaborators = null,
    DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy EgressNetworkPolicy = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.cloudVendor">CloudVendor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#cloud_vendor DataDatabricksCleanRoomsCleanRoom#cloud_vendor}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.collaborators">Collaborators</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborators DataDatabricksCleanRoomsCleanRoom#collaborators}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.egressNetworkPolicy">EgressNetworkPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#egress_network_policy DataDatabricksCleanRoomsCleanRoom#egress_network_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}. |

---

##### `CloudVendor`<sup>Optional</sup> <a name="CloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.cloudVendor"></a>

```csharp
public string CloudVendor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#cloud_vendor DataDatabricksCleanRoomsCleanRoom#cloud_vendor}.

---

##### `Collaborators`<sup>Optional</sup> <a name="Collaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.collaborators"></a>

```csharp
public object Collaborators { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborators DataDatabricksCleanRoomsCleanRoom#collaborators}.

---

##### `EgressNetworkPolicy`<sup>Optional</sup> <a name="EgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.egressNetworkPolicy"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy EgressNetworkPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#egress_network_policy DataDatabricksCleanRoomsCleanRoom#egress_network_policy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfo.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators {
    string CollaboratorAlias,
    string GlobalMetastoreId = null,
    string InviteRecipientEmail = null,
    double InviteRecipientWorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.collaboratorAlias">CollaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.inviteRecipientEmail">InviteRecipientEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.inviteRecipientWorkspaceId">InviteRecipientWorkspaceId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}. |

---

##### `CollaboratorAlias`<sup>Required</sup> <a name="CollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.collaboratorAlias"></a>

```csharp
public string CollaboratorAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}.

---

##### `GlobalMetastoreId`<sup>Optional</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.globalMetastoreId"></a>

```csharp
public string GlobalMetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}.

---

##### `InviteRecipientEmail`<sup>Optional</sup> <a name="InviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.inviteRecipientEmail"></a>

```csharp
public string InviteRecipientEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}.

---

##### `InviteRecipientWorkspaceId`<sup>Optional</sup> <a name="InviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaborators.property.inviteRecipientWorkspaceId"></a>

```csharp
public double InviteRecipientWorkspaceId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile {
    string[] ComplianceStandards = null,
    object IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.property.complianceStandards">ComplianceStandards</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#compliance_standards DataDatabricksCleanRoomsCleanRoom#compliance_standards}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#is_enabled DataDatabricksCleanRoomsCleanRoom#is_enabled}. |

---

##### `ComplianceStandards`<sup>Optional</sup> <a name="ComplianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.property.complianceStandards"></a>

```csharp
public string[] ComplianceStandards { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#compliance_standards DataDatabricksCleanRoomsCleanRoom#compliance_standards}.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#is_enabled DataDatabricksCleanRoomsCleanRoom#is_enabled}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator {
    string CollaboratorAlias,
    string GlobalMetastoreId = null,
    string InviteRecipientEmail = null,
    double InviteRecipientWorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.collaboratorAlias">CollaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.inviteRecipientEmail">InviteRecipientEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.inviteRecipientWorkspaceId">InviteRecipientWorkspaceId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}. |

---

##### `CollaboratorAlias`<sup>Required</sup> <a name="CollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.collaboratorAlias"></a>

```csharp
public string CollaboratorAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#collaborator_alias DataDatabricksCleanRoomsCleanRoom#collaborator_alias}.

---

##### `GlobalMetastoreId`<sup>Optional</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.globalMetastoreId"></a>

```csharp
public string GlobalMetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#global_metastore_id DataDatabricksCleanRoomsCleanRoom#global_metastore_id}.

---

##### `InviteRecipientEmail`<sup>Optional</sup> <a name="InviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.inviteRecipientEmail"></a>

```csharp
public string InviteRecipientEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_email DataDatabricksCleanRoomsCleanRoom#invite_recipient_email}.

---

##### `InviteRecipientWorkspaceId`<sup>Optional</sup> <a name="InviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator.property.inviteRecipientWorkspaceId"></a>

```csharp
public double InviteRecipientWorkspaceId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#invite_recipient_workspace_id DataDatabricksCleanRoomsCleanRoom#invite_recipient_workspace_id}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy {
    DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess InternetAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy.property.internetAccess">InternetAccess</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#internet_access DataDatabricksCleanRoomsCleanRoom#internet_access}. |

---

##### `InternetAccess`<sup>Optional</sup> <a name="InternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy.property.internetAccess"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess InternetAccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#internet_access DataDatabricksCleanRoomsCleanRoom#internet_access}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess {
    object AllowedInternetDestinations = null,
    object AllowedStorageDestinations = null,
    DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode LogOnlyMode = null,
    string RestrictionMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedInternetDestinations">AllowedInternetDestinations</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_internet_destinations DataDatabricksCleanRoomsCleanRoom#allowed_internet_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedStorageDestinations">AllowedStorageDestinations</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_storage_destinations DataDatabricksCleanRoomsCleanRoom#allowed_storage_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.logOnlyMode">LogOnlyMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#log_only_mode DataDatabricksCleanRoomsCleanRoom#log_only_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.restrictionMode">RestrictionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#restriction_mode DataDatabricksCleanRoomsCleanRoom#restriction_mode}. |

---

##### `AllowedInternetDestinations`<sup>Optional</sup> <a name="AllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedInternetDestinations"></a>

```csharp
public object AllowedInternetDestinations { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_internet_destinations DataDatabricksCleanRoomsCleanRoom#allowed_internet_destinations}.

---

##### `AllowedStorageDestinations`<sup>Optional</sup> <a name="AllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.allowedStorageDestinations"></a>

```csharp
public object AllowedStorageDestinations { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_storage_destinations DataDatabricksCleanRoomsCleanRoom#allowed_storage_destinations}.

---

##### `LogOnlyMode`<sup>Optional</sup> <a name="LogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.logOnlyMode"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode LogOnlyMode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#log_only_mode DataDatabricksCleanRoomsCleanRoom#log_only_mode}.

---

##### `RestrictionMode`<sup>Optional</sup> <a name="RestrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess.property.restrictionMode"></a>

```csharp
public string RestrictionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#restriction_mode DataDatabricksCleanRoomsCleanRoom#restriction_mode}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations {
    string Destination = null,
    string Protocol = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#destination DataDatabricksCleanRoomsCleanRoom#destination}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#protocol DataDatabricksCleanRoomsCleanRoom#protocol}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#destination DataDatabricksCleanRoomsCleanRoom#destination}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#protocol DataDatabricksCleanRoomsCleanRoom#protocol}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinations.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations {
    string[] AllowedPaths = null,
    string AzureContainer = null,
    string AzureDnsZone = null,
    string AzureStorageAccount = null,
    string AzureStorageService = null,
    string BucketName = null,
    string Region = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.allowedPaths">AllowedPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_paths DataDatabricksCleanRoomsCleanRoom#allowed_paths}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureContainer">AzureContainer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_container DataDatabricksCleanRoomsCleanRoom#azure_container}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureDnsZone">AzureDnsZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_dns_zone DataDatabricksCleanRoomsCleanRoom#azure_dns_zone}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageAccount">AzureStorageAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_storage_account DataDatabricksCleanRoomsCleanRoom#azure_storage_account}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageService">AzureStorageService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_storage_service DataDatabricksCleanRoomsCleanRoom#azure_storage_service}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#bucket_name DataDatabricksCleanRoomsCleanRoom#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}. |

---

##### `AllowedPaths`<sup>Optional</sup> <a name="AllowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.allowedPaths"></a>

```csharp
public string[] AllowedPaths { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#allowed_paths DataDatabricksCleanRoomsCleanRoom#allowed_paths}.

---

##### `AzureContainer`<sup>Optional</sup> <a name="AzureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureContainer"></a>

```csharp
public string AzureContainer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_container DataDatabricksCleanRoomsCleanRoom#azure_container}.

---

##### `AzureDnsZone`<sup>Optional</sup> <a name="AzureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureDnsZone"></a>

```csharp
public string AzureDnsZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_dns_zone DataDatabricksCleanRoomsCleanRoom#azure_dns_zone}.

---

##### `AzureStorageAccount`<sup>Optional</sup> <a name="AzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageAccount"></a>

```csharp
public string AzureStorageAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_storage_account DataDatabricksCleanRoomsCleanRoom#azure_storage_account}.

---

##### `AzureStorageService`<sup>Optional</sup> <a name="AzureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.azureStorageService"></a>

```csharp
public string AzureStorageService { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#azure_storage_service DataDatabricksCleanRoomsCleanRoom#azure_storage_service}.

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#bucket_name DataDatabricksCleanRoomsCleanRoom#bucket_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#region DataDatabricksCleanRoomsCleanRoom#region}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinations.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#type DataDatabricksCleanRoomsCleanRoom#type}.

---

### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode {
    string LogOnlyModeType = null,
    string[] Workloads = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.logOnlyModeType">LogOnlyModeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#log_only_mode_type DataDatabricksCleanRoomsCleanRoom#log_only_mode_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.workloads">Workloads</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#workloads DataDatabricksCleanRoomsCleanRoom#workloads}. |

---

##### `LogOnlyModeType`<sup>Optional</sup> <a name="LogOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.logOnlyModeType"></a>

```csharp
public string LogOnlyModeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#log_only_mode_type DataDatabricksCleanRoomsCleanRoom#log_only_mode_type}.

---

##### `Workloads`<sup>Optional</sup> <a name="Workloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode.property.workloads"></a>

```csharp
public string[] Workloads { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/clean_rooms_clean_room#workloads DataDatabricksCleanRoomsCleanRoom#workloads}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference <a name="DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog">DataDatabricksCleanRoomsCleanRoomOutputCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalogOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomOutputCatalog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomOutputCatalog">DataDatabricksCleanRoomsCleanRoomOutputCatalog</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.get"></a>

```csharp
private DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetGlobalMetastoreId">ResetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientEmail">ResetInviteRecipientEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientWorkspaceId">ResetInviteRecipientWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlobalMetastoreId` <a name="ResetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetGlobalMetastoreId"></a>

```csharp
private void ResetGlobalMetastoreId()
```

##### `ResetInviteRecipientEmail` <a name="ResetInviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientEmail"></a>

```csharp
private void ResetInviteRecipientEmail()
```

##### `ResetInviteRecipientWorkspaceId` <a name="ResetInviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.resetInviteRecipientWorkspaceId"></a>

```csharp
private void ResetInviteRecipientWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAliasInput">CollaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreIdInput">GlobalMetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmailInput">InviteRecipientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceIdInput">InviteRecipientWorkspaceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAlias">CollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmail">InviteRecipientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceId">InviteRecipientWorkspaceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `CollaboratorAliasInput`<sup>Optional</sup> <a name="CollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAliasInput"></a>

```csharp
public string CollaboratorAliasInput { get; }
```

- *Type:* string

---

##### `GlobalMetastoreIdInput`<sup>Optional</sup> <a name="GlobalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreIdInput"></a>

```csharp
public string GlobalMetastoreIdInput { get; }
```

- *Type:* string

---

##### `InviteRecipientEmailInput`<sup>Optional</sup> <a name="InviteRecipientEmailInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmailInput"></a>

```csharp
public string InviteRecipientEmailInput { get; }
```

- *Type:* string

---

##### `InviteRecipientWorkspaceIdInput`<sup>Optional</sup> <a name="InviteRecipientWorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceIdInput"></a>

```csharp
public double InviteRecipientWorkspaceIdInput { get; }
```

- *Type:* double

---

##### `CollaboratorAlias`<sup>Required</sup> <a name="CollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.collaboratorAlias"></a>

```csharp
public string CollaboratorAlias { get; }
```

- *Type:* string

---

##### `GlobalMetastoreId`<sup>Required</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.globalMetastoreId"></a>

```csharp
public string GlobalMetastoreId { get; }
```

- *Type:* string

---

##### `InviteRecipientEmail`<sup>Required</sup> <a name="InviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientEmail"></a>

```csharp
public string InviteRecipientEmail { get; }
```

- *Type:* string

---

##### `InviteRecipientWorkspaceId`<sup>Required</sup> <a name="InviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.inviteRecipientWorkspaceId"></a>

```csharp
public double InviteRecipientWorkspaceId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetComplianceStandards">ResetComplianceStandards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComplianceStandards` <a name="ResetComplianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetComplianceStandards"></a>

```csharp
private void ResetComplianceStandards()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandardsInput">ComplianceStandardsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandards">ComplianceStandards</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComplianceStandardsInput`<sup>Optional</sup> <a name="ComplianceStandardsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandardsInput"></a>

```csharp
public string[] ComplianceStandardsInput { get; }
```

- *Type:* string[]

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `ComplianceStandards`<sup>Required</sup> <a name="ComplianceStandards" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.complianceStandards"></a>

```csharp
public string[] ComplianceStandards { get; }
```

- *Type:* string[]

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfile</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetGlobalMetastoreId">ResetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientEmail">ResetInviteRecipientEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientWorkspaceId">ResetInviteRecipientWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGlobalMetastoreId` <a name="ResetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetGlobalMetastoreId"></a>

```csharp
private void ResetGlobalMetastoreId()
```

##### `ResetInviteRecipientEmail` <a name="ResetInviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientEmail"></a>

```csharp
private void ResetInviteRecipientEmail()
```

##### `ResetInviteRecipientWorkspaceId` <a name="ResetInviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.resetInviteRecipientWorkspaceId"></a>

```csharp
private void ResetInviteRecipientWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.collaboratorAliasInput">CollaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreIdInput">GlobalMetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmailInput">InviteRecipientEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceIdInput">InviteRecipientWorkspaceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.collaboratorAlias">CollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmail">InviteRecipientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceId">InviteRecipientWorkspaceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `CollaboratorAliasInput`<sup>Optional</sup> <a name="CollaboratorAliasInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.collaboratorAliasInput"></a>

```csharp
public string CollaboratorAliasInput { get; }
```

- *Type:* string

---

##### `GlobalMetastoreIdInput`<sup>Optional</sup> <a name="GlobalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreIdInput"></a>

```csharp
public string GlobalMetastoreIdInput { get; }
```

- *Type:* string

---

##### `InviteRecipientEmailInput`<sup>Optional</sup> <a name="InviteRecipientEmailInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmailInput"></a>

```csharp
public string InviteRecipientEmailInput { get; }
```

- *Type:* string

---

##### `InviteRecipientWorkspaceIdInput`<sup>Optional</sup> <a name="InviteRecipientWorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceIdInput"></a>

```csharp
public double InviteRecipientWorkspaceIdInput { get; }
```

- *Type:* double

---

##### `CollaboratorAlias`<sup>Required</sup> <a name="CollaboratorAlias" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.collaboratorAlias"></a>

```csharp
public string CollaboratorAlias { get; }
```

- *Type:* string

---

##### `GlobalMetastoreId`<sup>Required</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.globalMetastoreId"></a>

```csharp
public string GlobalMetastoreId { get; }
```

- *Type:* string

---

##### `InviteRecipientEmail`<sup>Required</sup> <a name="InviteRecipientEmail" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientEmail"></a>

```csharp
public string InviteRecipientEmail { get; }
```

- *Type:* string

---

##### `InviteRecipientWorkspaceId`<sup>Required</sup> <a name="InviteRecipientWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.inviteRecipientWorkspaceId"></a>

```csharp
public double InviteRecipientWorkspaceId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreator</a>

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get"></a>

```csharp
private DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get"></a>

```csharp
private DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAllowedPaths">ResetAllowedPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureContainer">ResetAzureContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureDnsZone">ResetAzureDnsZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount">ResetAzureStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService">ResetAzureStorageService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedPaths` <a name="ResetAllowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAllowedPaths"></a>

```csharp
private void ResetAllowedPaths()
```

##### `ResetAzureContainer` <a name="ResetAzureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureContainer"></a>

```csharp
private void ResetAzureContainer()
```

##### `ResetAzureDnsZone` <a name="ResetAzureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureDnsZone"></a>

```csharp
private void ResetAzureDnsZone()
```

##### `ResetAzureStorageAccount` <a name="ResetAzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount"></a>

```csharp
private void ResetAzureStorageAccount()
```

##### `ResetAzureStorageService` <a name="ResetAzureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService"></a>

```csharp
private void ResetAzureStorageService()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPathsInput">AllowedPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainerInput">AzureContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZoneInput">AzureDnsZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput">AzureStorageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput">AzureStorageServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPaths">AllowedPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainer">AzureContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZone">AzureDnsZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount">AzureStorageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageService">AzureStorageService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedPathsInput`<sup>Optional</sup> <a name="AllowedPathsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPathsInput"></a>

```csharp
public string[] AllowedPathsInput { get; }
```

- *Type:* string[]

---

##### `AzureContainerInput`<sup>Optional</sup> <a name="AzureContainerInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainerInput"></a>

```csharp
public string AzureContainerInput { get; }
```

- *Type:* string

---

##### `AzureDnsZoneInput`<sup>Optional</sup> <a name="AzureDnsZoneInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZoneInput"></a>

```csharp
public string AzureDnsZoneInput { get; }
```

- *Type:* string

---

##### `AzureStorageAccountInput`<sup>Optional</sup> <a name="AzureStorageAccountInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput"></a>

```csharp
public string AzureStorageAccountInput { get; }
```

- *Type:* string

---

##### `AzureStorageServiceInput`<sup>Optional</sup> <a name="AzureStorageServiceInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput"></a>

```csharp
public string AzureStorageServiceInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AllowedPaths`<sup>Required</sup> <a name="AllowedPaths" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.allowedPaths"></a>

```csharp
public string[] AllowedPaths { get; }
```

- *Type:* string[]

---

##### `AzureContainer`<sup>Required</sup> <a name="AzureContainer" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureContainer"></a>

```csharp
public string AzureContainer { get; }
```

- *Type:* string

---

##### `AzureDnsZone`<sup>Required</sup> <a name="AzureDnsZone" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureDnsZone"></a>

```csharp
public string AzureDnsZone { get; }
```

- *Type:* string

---

##### `AzureStorageAccount`<sup>Required</sup> <a name="AzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount"></a>

```csharp
public string AzureStorageAccount { get; }
```

- *Type:* string

---

##### `AzureStorageService`<sup>Required</sup> <a name="AzureStorageService" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.azureStorageService"></a>

```csharp
public string AzureStorageService { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetLogOnlyModeType">ResetLogOnlyModeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetWorkloads">ResetWorkloads</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogOnlyModeType` <a name="ResetLogOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetLogOnlyModeType"></a>

```csharp
private void ResetLogOnlyModeType()
```

##### `ResetWorkloads` <a name="ResetWorkloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.resetWorkloads"></a>

```csharp
private void ResetWorkloads()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeTypeInput">LogOnlyModeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloadsInput">WorkloadsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeType">LogOnlyModeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloads">Workloads</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogOnlyModeTypeInput`<sup>Optional</sup> <a name="LogOnlyModeTypeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeTypeInput"></a>

```csharp
public string LogOnlyModeTypeInput { get; }
```

- *Type:* string

---

##### `WorkloadsInput`<sup>Optional</sup> <a name="WorkloadsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloadsInput"></a>

```csharp
public string[] WorkloadsInput { get; }
```

- *Type:* string[]

---

##### `LogOnlyModeType`<sup>Required</sup> <a name="LogOnlyModeType" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.logOnlyModeType"></a>

```csharp
public string LogOnlyModeType { get; }
```

- *Type:* string

---

##### `Workloads`<sup>Required</sup> <a name="Workloads" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.workloads"></a>

```csharp
public string[] Workloads { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations">PutAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations">PutAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode">PutLogOnlyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedInternetDestinations">ResetAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedStorageDestinations">ResetAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetLogOnlyMode">ResetLogOnlyMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetRestrictionMode">ResetRestrictionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedInternetDestinations` <a name="PutAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations"></a>

```csharp
private void PutAllowedInternetDestinations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedInternetDestinations.parameter.value"></a>

- *Type:* object

---

##### `PutAllowedStorageDestinations` <a name="PutAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations"></a>

```csharp
private void PutAllowedStorageDestinations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putAllowedStorageDestinations.parameter.value"></a>

- *Type:* object

---

##### `PutLogOnlyMode` <a name="PutLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode"></a>

```csharp
private void PutLogOnlyMode(DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.putLogOnlyMode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyMode</a>

---

##### `ResetAllowedInternetDestinations` <a name="ResetAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedInternetDestinations"></a>

```csharp
private void ResetAllowedInternetDestinations()
```

##### `ResetAllowedStorageDestinations` <a name="ResetAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetAllowedStorageDestinations"></a>

```csharp
private void ResetAllowedStorageDestinations()
```

##### `ResetLogOnlyMode` <a name="ResetLogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetLogOnlyMode"></a>

```csharp
private void ResetLogOnlyMode()
```

##### `ResetRestrictionMode` <a name="ResetRestrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.resetRestrictionMode"></a>

```csharp
private void ResetRestrictionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinations">AllowedInternetDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinations">AllowedStorageDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyMode">LogOnlyMode</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinationsInput">AllowedInternetDestinationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinationsInput">AllowedStorageDestinationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyModeInput">LogOnlyModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionModeInput">RestrictionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionMode">RestrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedInternetDestinations`<sup>Required</sup> <a name="AllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinations"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList AllowedInternetDestinations { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedInternetDestinationsList</a>

---

##### `AllowedStorageDestinations`<sup>Required</sup> <a name="AllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinations"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList AllowedStorageDestinations { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessAllowedStorageDestinationsList</a>

---

##### `LogOnlyMode`<sup>Required</sup> <a name="LogOnlyMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyMode"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference LogOnlyMode { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessLogOnlyModeOutputReference</a>

---

##### `AllowedInternetDestinationsInput`<sup>Optional</sup> <a name="AllowedInternetDestinationsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedInternetDestinationsInput"></a>

```csharp
public object AllowedInternetDestinationsInput { get; }
```

- *Type:* object

---

##### `AllowedStorageDestinationsInput`<sup>Optional</sup> <a name="AllowedStorageDestinationsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.allowedStorageDestinationsInput"></a>

```csharp
public object AllowedStorageDestinationsInput { get; }
```

- *Type:* object

---

##### `LogOnlyModeInput`<sup>Optional</sup> <a name="LogOnlyModeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.logOnlyModeInput"></a>

```csharp
public object LogOnlyModeInput { get; }
```

- *Type:* object

---

##### `RestrictionModeInput`<sup>Optional</sup> <a name="RestrictionModeInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionModeInput"></a>

```csharp
public string RestrictionModeInput { get; }
```

- *Type:* string

---

##### `RestrictionMode`<sup>Required</sup> <a name="RestrictionMode" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.restrictionMode"></a>

```csharp
public string RestrictionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess">PutInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resetInternetAccess">ResetInternetAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInternetAccess` <a name="PutInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess"></a>

```csharp
private void PutInternetAccess(DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.putInternetAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccess</a>

---

##### `ResetInternetAccess` <a name="ResetInternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.resetInternetAccess"></a>

```csharp
private void ResetInternetAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccess">InternetAccess</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccessInput">InternetAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternetAccess`<sup>Required</sup> <a name="InternetAccess" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccess"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference InternetAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyInternetAccessOutputReference</a>

---

##### `InternetAccessInput`<sup>Optional</sup> <a name="InternetAccessInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internetAccessInput"></a>

```csharp
public object InternetAccessInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference <a name="DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putCollaborators">PutCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putEgressNetworkPolicy">PutEgressNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetCloudVendor">ResetCloudVendor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetCollaborators">ResetCollaborators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetEgressNetworkPolicy">ResetEgressNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCollaborators` <a name="PutCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putCollaborators"></a>

```csharp
private void PutCollaborators(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putCollaborators.parameter.value"></a>

- *Type:* object

---

##### `PutEgressNetworkPolicy` <a name="PutEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putEgressNetworkPolicy"></a>

```csharp
private void PutEgressNetworkPolicy(DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.putEgressNetworkPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicy</a>

---

##### `ResetCloudVendor` <a name="ResetCloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetCloudVendor"></a>

```csharp
private void ResetCloudVendor()
```

##### `ResetCollaborators` <a name="ResetCollaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetCollaborators"></a>

```csharp
private void ResetCollaborators()
```

##### `ResetEgressNetworkPolicy` <a name="ResetEgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetEgressNetworkPolicy"></a>

```csharp
private void ResetEgressNetworkPolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.centralCleanRoomId">CentralCleanRoomId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.collaborators">Collaborators</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.complianceSecurityProfile">ComplianceSecurityProfile</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.creator">Creator</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.egressNetworkPolicy">EgressNetworkPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.cloudVendorInput">CloudVendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.collaboratorsInput">CollaboratorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.egressNetworkPolicyInput">EgressNetworkPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.cloudVendor">CloudVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CentralCleanRoomId`<sup>Required</sup> <a name="CentralCleanRoomId" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.centralCleanRoomId"></a>

```csharp
public string CentralCleanRoomId { get; }
```

- *Type:* string

---

##### `Collaborators`<sup>Required</sup> <a name="Collaborators" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.collaborators"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList Collaborators { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCollaboratorsList</a>

---

##### `ComplianceSecurityProfile`<sup>Required</sup> <a name="ComplianceSecurityProfile" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.complianceSecurityProfile"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference ComplianceSecurityProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoComplianceSecurityProfileOutputReference</a>

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.creator"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference Creator { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoCreatorOutputReference</a>

---

##### `EgressNetworkPolicy`<sup>Required</sup> <a name="EgressNetworkPolicy" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.egressNetworkPolicy"></a>

```csharp
public DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference EgressNetworkPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference">DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoEgressNetworkPolicyOutputReference</a>

---

##### `CloudVendorInput`<sup>Optional</sup> <a name="CloudVendorInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.cloudVendorInput"></a>

```csharp
public string CloudVendorInput { get; }
```

- *Type:* string

---

##### `CollaboratorsInput`<sup>Optional</sup> <a name="CollaboratorsInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.collaboratorsInput"></a>

```csharp
public object CollaboratorsInput { get; }
```

- *Type:* object

---

##### `EgressNetworkPolicyInput`<sup>Optional</sup> <a name="EgressNetworkPolicyInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.egressNetworkPolicyInput"></a>

```csharp
public object EgressNetworkPolicyInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `CloudVendor`<sup>Required</sup> <a name="CloudVendor" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.cloudVendor"></a>

```csharp
public string CloudVendor { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCleanRoomsCleanRoom.DataDatabricksCleanRoomsCleanRoomRemoteDetailedInfoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



