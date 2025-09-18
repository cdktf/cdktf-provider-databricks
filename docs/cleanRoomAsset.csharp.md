# `cleanRoomAsset` Submodule <a name="`cleanRoomAsset` Submodule" id="@cdktf/provider-databricks.cleanRoomAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanRoomAsset <a name="CleanRoomAsset" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset databricks_clean_room_asset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAsset(Construct Scope, string Id, CleanRoomAssetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig">CleanRoomAssetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig">CleanRoomAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTable">PutForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTableLocalDetails">PutForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putNotebook">PutNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTableLocalDetails">PutTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putView">PutView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putViewLocalDetails">PutViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putVolumeLocalDetails">PutVolumeLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetCleanRoomName">ResetCleanRoomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetForeignTable">ResetForeignTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetForeignTableLocalDetails">ResetForeignTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetNotebook">ResetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetTableLocalDetails">ResetTableLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetView">ResetView</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetViewLocalDetails">ResetViewLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetVolumeLocalDetails">ResetVolumeLocalDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutForeignTable` <a name="PutForeignTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTable"></a>

```csharp
private void PutForeignTable(CleanRoomAssetForeignTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a>

---

##### `PutForeignTableLocalDetails` <a name="PutForeignTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTableLocalDetails"></a>

```csharp
private void PutForeignTableLocalDetails(CleanRoomAssetForeignTableLocalDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putForeignTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a>

---

##### `PutNotebook` <a name="PutNotebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putNotebook"></a>

```csharp
private void PutNotebook(CleanRoomAssetNotebook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a>

---

##### `PutTable` <a name="PutTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTable"></a>

```csharp
private void PutTable(CleanRoomAssetTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a>

---

##### `PutTableLocalDetails` <a name="PutTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTableLocalDetails"></a>

```csharp
private void PutTableLocalDetails(CleanRoomAssetTableLocalDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putTableLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a>

---

##### `PutView` <a name="PutView" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putView"></a>

```csharp
private void PutView(CleanRoomAssetView Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putView.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a>

---

##### `PutViewLocalDetails` <a name="PutViewLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putViewLocalDetails"></a>

```csharp
private void PutViewLocalDetails(CleanRoomAssetViewLocalDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putViewLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a>

---

##### `PutVolumeLocalDetails` <a name="PutVolumeLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putVolumeLocalDetails"></a>

```csharp
private void PutVolumeLocalDetails(CleanRoomAssetVolumeLocalDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.putVolumeLocalDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a>

---

##### `ResetCleanRoomName` <a name="ResetCleanRoomName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetCleanRoomName"></a>

```csharp
private void ResetCleanRoomName()
```

##### `ResetForeignTable` <a name="ResetForeignTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetForeignTable"></a>

```csharp
private void ResetForeignTable()
```

##### `ResetForeignTableLocalDetails` <a name="ResetForeignTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetForeignTableLocalDetails"></a>

```csharp
private void ResetForeignTableLocalDetails()
```

##### `ResetNotebook` <a name="ResetNotebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetNotebook"></a>

```csharp
private void ResetNotebook()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetTable"></a>

```csharp
private void ResetTable()
```

##### `ResetTableLocalDetails` <a name="ResetTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetTableLocalDetails"></a>

```csharp
private void ResetTableLocalDetails()
```

##### `ResetView` <a name="ResetView" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetView"></a>

```csharp
private void ResetView()
```

##### `ResetViewLocalDetails` <a name="ResetViewLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetViewLocalDetails"></a>

```csharp
private void ResetViewLocalDetails()
```

##### `ResetVolumeLocalDetails` <a name="ResetVolumeLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetVolumeLocalDetails"></a>

```csharp
private void ResetVolumeLocalDetails()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CleanRoomAsset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CleanRoomAsset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CleanRoomAsset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CleanRoomAsset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CleanRoomAsset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CleanRoomAsset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanRoomAsset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanRoomAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CleanRoomAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.addedAt">AddedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTable">ForeignTable</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference">CleanRoomAssetForeignTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableLocalDetails">ForeignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference">CleanRoomAssetForeignTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference">CleanRoomAssetNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.ownerCollaboratorAlias">OwnerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference">CleanRoomAssetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableLocalDetails">TableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference">CleanRoomAssetTableLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.view">View</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference">CleanRoomAssetViewOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewLocalDetails">ViewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference">CleanRoomAssetViewLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.volumeLocalDetails">VolumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference">CleanRoomAssetVolumeLocalDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.assetTypeInput">AssetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cleanRoomNameInput">CleanRoomNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableInput">ForeignTableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableLocalDetailsInput">ForeignTableLocalDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.notebookInput">NotebookInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableInput">TableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableLocalDetailsInput">TableLocalDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewInput">ViewInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewLocalDetailsInput">ViewLocalDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.volumeLocalDetailsInput">VolumeLocalDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.assetType">AssetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cleanRoomName">CleanRoomName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AddedAt`<sup>Required</sup> <a name="AddedAt" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.addedAt"></a>

```csharp
public double AddedAt { get; }
```

- *Type:* double

---

##### `ForeignTable`<sup>Required</sup> <a name="ForeignTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTable"></a>

```csharp
public CleanRoomAssetForeignTableOutputReference ForeignTable { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference">CleanRoomAssetForeignTableOutputReference</a>

---

##### `ForeignTableLocalDetails`<sup>Required</sup> <a name="ForeignTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableLocalDetails"></a>

```csharp
public CleanRoomAssetForeignTableLocalDetailsOutputReference ForeignTableLocalDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference">CleanRoomAssetForeignTableLocalDetailsOutputReference</a>

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.notebook"></a>

```csharp
public CleanRoomAssetNotebookOutputReference Notebook { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference">CleanRoomAssetNotebookOutputReference</a>

---

##### `OwnerCollaboratorAlias`<sup>Required</sup> <a name="OwnerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.ownerCollaboratorAlias"></a>

```csharp
public string OwnerCollaboratorAlias { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.table"></a>

```csharp
public CleanRoomAssetTableOutputReference Table { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference">CleanRoomAssetTableOutputReference</a>

---

##### `TableLocalDetails`<sup>Required</sup> <a name="TableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableLocalDetails"></a>

```csharp
public CleanRoomAssetTableLocalDetailsOutputReference TableLocalDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference">CleanRoomAssetTableLocalDetailsOutputReference</a>

---

##### `View`<sup>Required</sup> <a name="View" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.view"></a>

```csharp
public CleanRoomAssetViewOutputReference View { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference">CleanRoomAssetViewOutputReference</a>

---

##### `ViewLocalDetails`<sup>Required</sup> <a name="ViewLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewLocalDetails"></a>

```csharp
public CleanRoomAssetViewLocalDetailsOutputReference ViewLocalDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference">CleanRoomAssetViewLocalDetailsOutputReference</a>

---

##### `VolumeLocalDetails`<sup>Required</sup> <a name="VolumeLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.volumeLocalDetails"></a>

```csharp
public CleanRoomAssetVolumeLocalDetailsOutputReference VolumeLocalDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference">CleanRoomAssetVolumeLocalDetailsOutputReference</a>

---

##### `AssetTypeInput`<sup>Optional</sup> <a name="AssetTypeInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.assetTypeInput"></a>

```csharp
public string AssetTypeInput { get; }
```

- *Type:* string

---

##### `CleanRoomNameInput`<sup>Optional</sup> <a name="CleanRoomNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cleanRoomNameInput"></a>

```csharp
public string CleanRoomNameInput { get; }
```

- *Type:* string

---

##### `ForeignTableInput`<sup>Optional</sup> <a name="ForeignTableInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableInput"></a>

```csharp
public object ForeignTableInput { get; }
```

- *Type:* object

---

##### `ForeignTableLocalDetailsInput`<sup>Optional</sup> <a name="ForeignTableLocalDetailsInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.foreignTableLocalDetailsInput"></a>

```csharp
public object ForeignTableLocalDetailsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotebookInput`<sup>Optional</sup> <a name="NotebookInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.notebookInput"></a>

```csharp
public object NotebookInput { get; }
```

- *Type:* object

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableInput"></a>

```csharp
public object TableInput { get; }
```

- *Type:* object

---

##### `TableLocalDetailsInput`<sup>Optional</sup> <a name="TableLocalDetailsInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tableLocalDetailsInput"></a>

```csharp
public object TableLocalDetailsInput { get; }
```

- *Type:* object

---

##### `ViewInput`<sup>Optional</sup> <a name="ViewInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewInput"></a>

```csharp
public object ViewInput { get; }
```

- *Type:* object

---

##### `ViewLocalDetailsInput`<sup>Optional</sup> <a name="ViewLocalDetailsInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.viewLocalDetailsInput"></a>

```csharp
public object ViewLocalDetailsInput { get; }
```

- *Type:* object

---

##### `VolumeLocalDetailsInput`<sup>Optional</sup> <a name="VolumeLocalDetailsInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.volumeLocalDetailsInput"></a>

```csharp
public object VolumeLocalDetailsInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.assetType"></a>

```csharp
public string AssetType { get; }
```

- *Type:* string

---

##### `CleanRoomName`<sup>Required</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.cleanRoomName"></a>

```csharp
public string CleanRoomName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAsset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanRoomAssetConfig <a name="CleanRoomAssetConfig" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AssetType,
    string Name,
    string CleanRoomName = null,
    CleanRoomAssetForeignTable ForeignTable = null,
    CleanRoomAssetForeignTableLocalDetails ForeignTableLocalDetails = null,
    CleanRoomAssetNotebook Notebook = null,
    CleanRoomAssetTable Table = null,
    CleanRoomAssetTableLocalDetails TableLocalDetails = null,
    CleanRoomAssetView View = null,
    CleanRoomAssetViewLocalDetails ViewLocalDetails = null,
    CleanRoomAssetVolumeLocalDetails VolumeLocalDetails = null,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.assetType">AssetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#asset_type CleanRoomAsset#asset_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.cleanRoomName">CleanRoomName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#clean_room_name CleanRoomAsset#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.foreignTable">ForeignTable</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#foreign_table CleanRoomAsset#foreign_table}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.foreignTableLocalDetails">ForeignTableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#foreign_table_local_details CleanRoomAsset#foreign_table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#notebook CleanRoomAsset#notebook}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#table CleanRoomAsset#table}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.tableLocalDetails">TableLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#table_local_details CleanRoomAsset#table_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.view">View</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#view CleanRoomAsset#view}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.viewLocalDetails">ViewLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#view_local_details CleanRoomAsset#view_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.volumeLocalDetails">VolumeLocalDetails</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#volume_local_details CleanRoomAsset#volume_local_details}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#workspace_id CleanRoomAsset#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.assetType"></a>

```csharp
public string AssetType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#asset_type CleanRoomAsset#asset_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `CleanRoomName`<sup>Optional</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.cleanRoomName"></a>

```csharp
public string CleanRoomName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#clean_room_name CleanRoomAsset#clean_room_name}.

---

##### `ForeignTable`<sup>Optional</sup> <a name="ForeignTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.foreignTable"></a>

```csharp
public CleanRoomAssetForeignTable ForeignTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable">CleanRoomAssetForeignTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#foreign_table CleanRoomAsset#foreign_table}.

---

##### `ForeignTableLocalDetails`<sup>Optional</sup> <a name="ForeignTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.foreignTableLocalDetails"></a>

```csharp
public CleanRoomAssetForeignTableLocalDetails ForeignTableLocalDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails">CleanRoomAssetForeignTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#foreign_table_local_details CleanRoomAsset#foreign_table_local_details}.

---

##### `Notebook`<sup>Optional</sup> <a name="Notebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.notebook"></a>

```csharp
public CleanRoomAssetNotebook Notebook { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook">CleanRoomAssetNotebook</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#notebook CleanRoomAsset#notebook}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.table"></a>

```csharp
public CleanRoomAssetTable Table { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable">CleanRoomAssetTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#table CleanRoomAsset#table}.

---

##### `TableLocalDetails`<sup>Optional</sup> <a name="TableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.tableLocalDetails"></a>

```csharp
public CleanRoomAssetTableLocalDetails TableLocalDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails">CleanRoomAssetTableLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#table_local_details CleanRoomAsset#table_local_details}.

---

##### `View`<sup>Optional</sup> <a name="View" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.view"></a>

```csharp
public CleanRoomAssetView View { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView">CleanRoomAssetView</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#view CleanRoomAsset#view}.

---

##### `ViewLocalDetails`<sup>Optional</sup> <a name="ViewLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.viewLocalDetails"></a>

```csharp
public CleanRoomAssetViewLocalDetails ViewLocalDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails">CleanRoomAssetViewLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#view_local_details CleanRoomAsset#view_local_details}.

---

##### `VolumeLocalDetails`<sup>Optional</sup> <a name="VolumeLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.volumeLocalDetails"></a>

```csharp
public CleanRoomAssetVolumeLocalDetails VolumeLocalDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails">CleanRoomAssetVolumeLocalDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#volume_local_details CleanRoomAsset#volume_local_details}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#workspace_id CleanRoomAsset#workspace_id}.

---

### CleanRoomAssetForeignTable <a name="CleanRoomAssetForeignTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetForeignTable {

};
```


### CleanRoomAssetForeignTableColumns <a name="CleanRoomAssetForeignTableColumns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetForeignTableColumns {
    string Comment = null,
    CleanRoomAssetForeignTableColumnsMask Mask = null,
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
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.nullable">Nullable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#position CleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeJson">TypeJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeName">TypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typePrecision">TypePrecision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeScale">TypeScale</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeText">TypeText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}.

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.mask"></a>

```csharp
public CleanRoomAssetForeignTableColumnsMask Mask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.nullable"></a>

```csharp
public object Nullable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#position CleanRoomAsset#position}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeJson"></a>

```csharp
public string TypeJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeName"></a>

```csharp
public string TypeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typePrecision"></a>

```csharp
public double TypePrecision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeScale"></a>

```csharp
public double TypeScale { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}.

---

##### `TypeText`<sup>Optional</sup> <a name="TypeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns.property.typeText"></a>

```csharp
public string TypeText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}.

---

### CleanRoomAssetForeignTableColumnsMask <a name="CleanRoomAssetForeignTableColumnsMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetForeignTableColumnsMask {
    string FunctionName = null,
    string[] UsingColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}. |

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}.

---

##### `UsingColumnNames`<sup>Optional</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}.

---

### CleanRoomAssetForeignTableLocalDetails <a name="CleanRoomAssetForeignTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetForeignTableLocalDetails {
    string LocalName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails.property.localName">LocalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetails.property.localName"></a>

```csharp
public string LocalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

### CleanRoomAssetNotebook <a name="CleanRoomAssetNotebook" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetNotebook {
    string NotebookContent,
    string[] RunnerCollaboratorAliases = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.property.notebookContent">NotebookContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#notebook_content CleanRoomAsset#notebook_content}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.property.runnerCollaboratorAliases">RunnerCollaboratorAliases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#runner_collaborator_aliases CleanRoomAsset#runner_collaborator_aliases}. |

---

##### `NotebookContent`<sup>Required</sup> <a name="NotebookContent" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.property.notebookContent"></a>

```csharp
public string NotebookContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#notebook_content CleanRoomAsset#notebook_content}.

---

##### `RunnerCollaboratorAliases`<sup>Optional</sup> <a name="RunnerCollaboratorAliases" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebook.property.runnerCollaboratorAliases"></a>

```csharp
public string[] RunnerCollaboratorAliases { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#runner_collaborator_aliases CleanRoomAsset#runner_collaborator_aliases}.

---

### CleanRoomAssetNotebookReviews <a name="CleanRoomAssetNotebookReviews" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetNotebookReviews {
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
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.createdAtMillis">CreatedAtMillis</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#created_at_millis CleanRoomAsset#created_at_millis}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias">ReviewerCollaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#reviewer_collaborator_alias CleanRoomAsset#reviewer_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewState">ReviewState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#review_state CleanRoomAsset#review_state}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewSubReason">ReviewSubReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#review_sub_reason CleanRoomAsset#review_sub_reason}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}.

---

##### `CreatedAtMillis`<sup>Optional</sup> <a name="CreatedAtMillis" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.createdAtMillis"></a>

```csharp
public double CreatedAtMillis { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#created_at_millis CleanRoomAsset#created_at_millis}.

---

##### `ReviewerCollaboratorAlias`<sup>Optional</sup> <a name="ReviewerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewerCollaboratorAlias"></a>

```csharp
public string ReviewerCollaboratorAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#reviewer_collaborator_alias CleanRoomAsset#reviewer_collaborator_alias}.

---

##### `ReviewState`<sup>Optional</sup> <a name="ReviewState" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewState"></a>

```csharp
public string ReviewState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#review_state CleanRoomAsset#review_state}.

---

##### `ReviewSubReason`<sup>Optional</sup> <a name="ReviewSubReason" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews.property.reviewSubReason"></a>

```csharp
public string ReviewSubReason { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#review_sub_reason CleanRoomAsset#review_sub_reason}.

---

### CleanRoomAssetTable <a name="CleanRoomAssetTable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTable {

};
```


### CleanRoomAssetTableColumns <a name="CleanRoomAssetTableColumns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableColumns {
    string Comment = null,
    CleanRoomAssetTableColumnsMask Mask = null,
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
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.nullable">Nullable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#position CleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeJson">TypeJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeName">TypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typePrecision">TypePrecision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeScale">TypeScale</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeText">TypeText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}.

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.mask"></a>

```csharp
public CleanRoomAssetTableColumnsMask Mask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.nullable"></a>

```csharp
public object Nullable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#position CleanRoomAsset#position}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeJson"></a>

```csharp
public string TypeJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeName"></a>

```csharp
public string TypeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typePrecision"></a>

```csharp
public double TypePrecision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeScale"></a>

```csharp
public double TypeScale { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}.

---

##### `TypeText`<sup>Optional</sup> <a name="TypeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns.property.typeText"></a>

```csharp
public string TypeText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}.

---

### CleanRoomAssetTableColumnsMask <a name="CleanRoomAssetTableColumnsMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableColumnsMask {
    string FunctionName = null,
    string[] UsingColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}. |

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}.

---

##### `UsingColumnNames`<sup>Optional</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}.

---

### CleanRoomAssetTableLocalDetails <a name="CleanRoomAssetTableLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableLocalDetails {
    string LocalName,
    object Partitions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.property.localName">LocalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.property.partitions">Partitions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#partitions CleanRoomAsset#partitions}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.property.localName"></a>

```csharp
public string LocalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

##### `Partitions`<sup>Optional</sup> <a name="Partitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetails.property.partitions"></a>

```csharp
public object Partitions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#partitions CleanRoomAsset#partitions}.

---

### CleanRoomAssetTableLocalDetailsPartitions <a name="CleanRoomAssetTableLocalDetailsPartitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableLocalDetailsPartitions {
    object Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions.property.value">Value</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#value CleanRoomAsset#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitions.property.value"></a>

```csharp
public object Value { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#value CleanRoomAsset#value}.

---

### CleanRoomAssetTableLocalDetailsPartitionsValue <a name="CleanRoomAssetTableLocalDetailsPartitionsValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableLocalDetailsPartitionsValue {
    string Name = null,
    string Op = null,
    string RecipientPropertyKey = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.op">Op</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#op CleanRoomAsset#op}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#recipient_property_key CleanRoomAsset#recipient_property_key}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#value CleanRoomAsset#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `Op`<sup>Optional</sup> <a name="Op" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.op"></a>

```csharp
public string Op { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#op CleanRoomAsset#op}.

---

##### `RecipientPropertyKey`<sup>Optional</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.recipientPropertyKey"></a>

```csharp
public string RecipientPropertyKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#recipient_property_key CleanRoomAsset#recipient_property_key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValue.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#value CleanRoomAsset#value}.

---

### CleanRoomAssetView <a name="CleanRoomAssetView" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetView.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetView {

};
```


### CleanRoomAssetViewColumns <a name="CleanRoomAssetViewColumns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetViewColumns {
    string Comment = null,
    CleanRoomAssetViewColumnsMask Mask = null,
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
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.nullable">Nullable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#position CleanRoomAsset#position}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeJson">TypeJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeName">TypeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typePrecision">TypePrecision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeScale">TypeScale</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeText">TypeText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#comment CleanRoomAsset#comment}.

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.mask"></a>

```csharp
public CleanRoomAssetViewColumnsMask Mask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#mask CleanRoomAsset#mask}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#name CleanRoomAsset#name}.

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.nullable"></a>

```csharp
public object Nullable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#nullable CleanRoomAsset#nullable}.

---

##### `PartitionIndex`<sup>Optional</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#partition_index CleanRoomAsset#partition_index}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#position CleanRoomAsset#position}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_interval_type CleanRoomAsset#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeJson"></a>

```csharp
public string TypeJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_json CleanRoomAsset#type_json}.

---

##### `TypeName`<sup>Optional</sup> <a name="TypeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeName"></a>

```csharp
public string TypeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_name CleanRoomAsset#type_name}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typePrecision"></a>

```csharp
public double TypePrecision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_precision CleanRoomAsset#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeScale"></a>

```csharp
public double TypeScale { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_scale CleanRoomAsset#type_scale}.

---

##### `TypeText`<sup>Optional</sup> <a name="TypeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns.property.typeText"></a>

```csharp
public string TypeText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#type_text CleanRoomAsset#type_text}.

---

### CleanRoomAssetViewColumnsMask <a name="CleanRoomAssetViewColumnsMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetViewColumnsMask {
    string FunctionName = null,
    string[] UsingColumnNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}. |

---

##### `FunctionName`<sup>Optional</sup> <a name="FunctionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#function_name CleanRoomAsset#function_name}.

---

##### `UsingColumnNames`<sup>Optional</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#using_column_names CleanRoomAsset#using_column_names}.

---

### CleanRoomAssetViewLocalDetails <a name="CleanRoomAssetViewLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetViewLocalDetails {
    string LocalName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails.property.localName">LocalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetails.property.localName"></a>

```csharp
public string LocalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

### CleanRoomAssetVolumeLocalDetails <a name="CleanRoomAssetVolumeLocalDetails" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetVolumeLocalDetails {
    string LocalName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails.property.localName">LocalName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}. |

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetails.property.localName"></a>

```csharp
public string LocalName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/clean_room_asset#local_name CleanRoomAsset#local_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanRoomAssetForeignTableColumnsList <a name="CleanRoomAssetForeignTableColumnsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetForeignTableColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.get"></a>

```csharp
private CleanRoomAssetForeignTableColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetForeignTableColumnsMaskOutputReference <a name="CleanRoomAssetForeignTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetForeignTableColumnsMaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames">ResetUsingColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resetFunctionName"></a>

```csharp
private void ResetFunctionName()
```

##### `ResetUsingColumnNames` <a name="ResetUsingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```csharp
private void ResetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput">UsingColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `UsingColumnNamesInput`<sup>Optional</sup> <a name="UsingColumnNamesInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```csharp
public string[] UsingColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `UsingColumnNames`<sup>Required</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetForeignTableColumnsOutputReference <a name="CleanRoomAssetForeignTableColumnsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetForeignTableColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.putMask">PutMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeText">ResetTypeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMask` <a name="PutMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.putMask"></a>

```csharp
private void PutMask(CleanRoomAssetForeignTableColumnsMask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMask">CleanRoomAssetForeignTableColumnsMask</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetMask"></a>

```csharp
private void ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetNullable"></a>

```csharp
private void ResetNullable()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetPartitionIndex"></a>

```csharp
private void ResetPartitionIndex()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeIntervalType"></a>

```csharp
private void ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeJson"></a>

```csharp
private void ResetTypeJson()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeName"></a>

```csharp
private void ResetTypeName()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypePrecision"></a>

```csharp
private void ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeScale"></a>

```csharp
private void ResetTypeScale()
```

##### `ResetTypeText` <a name="ResetTypeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.resetTypeText"></a>

```csharp
private void ResetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference">CleanRoomAssetForeignTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.maskInput">MaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput">NullableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nullable">Nullable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeJson">TypeJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision">TypePrecision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeScale">TypeScale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeText">TypeText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns">CleanRoomAssetForeignTableColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.mask"></a>

```csharp
public CleanRoomAssetForeignTableColumnsMaskOutputReference Mask { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsMaskOutputReference">CleanRoomAssetForeignTableColumnsMaskOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.maskInput"></a>

```csharp
public object MaskInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nullableInput"></a>

```csharp
public object NullableInput { get; }
```

- *Type:* object

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndexInput"></a>

```csharp
public double PartitionIndexInput { get; }
```

- *Type:* double

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```csharp
public string TypeIntervalTypeInput { get; }
```

- *Type:* string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeJsonInput"></a>

```csharp
public string TypeJsonInput { get; }
```

- *Type:* string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeNameInput"></a>

```csharp
public string TypeNameInput { get; }
```

- *Type:* string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typePrecisionInput"></a>

```csharp
public double TypePrecisionInput { get; }
```

- *Type:* double

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeScaleInput"></a>

```csharp
public double TypeScaleInput { get; }
```

- *Type:* double

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeTextInput"></a>

```csharp
public string TypeTextInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.nullable"></a>

```csharp
public object Nullable { get; }
```

- *Type:* object

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; }
```

- *Type:* string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeJson"></a>

```csharp
public string TypeJson { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typePrecision"></a>

```csharp
public double TypePrecision { get; }
```

- *Type:* double

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeScale"></a>

```csharp
public double TypeScale { get; }
```

- *Type:* double

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.typeText"></a>

```csharp
public string TypeText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsOutputReference.property.internalValue"></a>

```csharp
public CleanRoomAssetForeignTableColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumns">CleanRoomAssetForeignTableColumns</a>

---


### CleanRoomAssetForeignTableLocalDetailsOutputReference <a name="CleanRoomAssetForeignTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetForeignTableLocalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.localNameInput"></a>

```csharp
public string LocalNameInput { get; }
```

- *Type:* string

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableLocalDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetForeignTableOutputReference <a name="CleanRoomAssetForeignTableOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetForeignTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList">CleanRoomAssetForeignTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.columns"></a>

```csharp
public CleanRoomAssetForeignTableColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableColumnsList">CleanRoomAssetForeignTableColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetForeignTableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetNotebookOutputReference <a name="CleanRoomAssetNotebookOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetNotebookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases">ResetRunnerCollaboratorAliases</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRunnerCollaboratorAliases` <a name="ResetRunnerCollaboratorAliases" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.resetRunnerCollaboratorAliases"></a>

```csharp
private void ResetRunnerCollaboratorAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.reviews">Reviews</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList">CleanRoomAssetNotebookReviewsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.reviewState">ReviewState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.notebookContentInput">NotebookContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput">RunnerCollaboratorAliasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.notebookContent">NotebookContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases">RunnerCollaboratorAliases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Reviews`<sup>Required</sup> <a name="Reviews" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.reviews"></a>

```csharp
public CleanRoomAssetNotebookReviewsList Reviews { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList">CleanRoomAssetNotebookReviewsList</a>

---

##### `ReviewState`<sup>Required</sup> <a name="ReviewState" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.reviewState"></a>

```csharp
public string ReviewState { get; }
```

- *Type:* string

---

##### `NotebookContentInput`<sup>Optional</sup> <a name="NotebookContentInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.notebookContentInput"></a>

```csharp
public string NotebookContentInput { get; }
```

- *Type:* string

---

##### `RunnerCollaboratorAliasesInput`<sup>Optional</sup> <a name="RunnerCollaboratorAliasesInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliasesInput"></a>

```csharp
public string[] RunnerCollaboratorAliasesInput { get; }
```

- *Type:* string[]

---

##### `NotebookContent`<sup>Required</sup> <a name="NotebookContent" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.notebookContent"></a>

```csharp
public string NotebookContent { get; }
```

- *Type:* string

---

##### `RunnerCollaboratorAliases`<sup>Required</sup> <a name="RunnerCollaboratorAliases" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.runnerCollaboratorAliases"></a>

```csharp
public string[] RunnerCollaboratorAliases { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetNotebookReviewsList <a name="CleanRoomAssetNotebookReviewsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetNotebookReviewsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.get"></a>

```csharp
private CleanRoomAssetNotebookReviewsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetNotebookReviewsOutputReference <a name="CleanRoomAssetNotebookReviewsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetNotebookReviewsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis">ResetCreatedAtMillis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias">ResetReviewerCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewState">ResetReviewState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason">ResetReviewSubReason</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCreatedAtMillis` <a name="ResetCreatedAtMillis" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetCreatedAtMillis"></a>

```csharp
private void ResetCreatedAtMillis()
```

##### `ResetReviewerCollaboratorAlias` <a name="ResetReviewerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewerCollaboratorAlias"></a>

```csharp
private void ResetReviewerCollaboratorAlias()
```

##### `ResetReviewState` <a name="ResetReviewState" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewState"></a>

```csharp
private void ResetReviewState()
```

##### `ResetReviewSubReason` <a name="ResetReviewSubReason" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.resetReviewSubReason"></a>

```csharp
private void ResetReviewSubReason()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput">CreatedAtMillisInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput">ReviewerCollaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput">ReviewStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput">ReviewSubReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis">CreatedAtMillis</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias">ReviewerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewState">ReviewState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason">ReviewSubReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews">CleanRoomAssetNotebookReviews</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CreatedAtMillisInput`<sup>Optional</sup> <a name="CreatedAtMillisInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillisInput"></a>

```csharp
public double CreatedAtMillisInput { get; }
```

- *Type:* double

---

##### `ReviewerCollaboratorAliasInput`<sup>Optional</sup> <a name="ReviewerCollaboratorAliasInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAliasInput"></a>

```csharp
public string ReviewerCollaboratorAliasInput { get; }
```

- *Type:* string

---

##### `ReviewStateInput`<sup>Optional</sup> <a name="ReviewStateInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewStateInput"></a>

```csharp
public string ReviewStateInput { get; }
```

- *Type:* string

---

##### `ReviewSubReasonInput`<sup>Optional</sup> <a name="ReviewSubReasonInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReasonInput"></a>

```csharp
public string ReviewSubReasonInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedAtMillis`<sup>Required</sup> <a name="CreatedAtMillis" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.createdAtMillis"></a>

```csharp
public double CreatedAtMillis { get; }
```

- *Type:* double

---

##### `ReviewerCollaboratorAlias`<sup>Required</sup> <a name="ReviewerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewerCollaboratorAlias"></a>

```csharp
public string ReviewerCollaboratorAlias { get; }
```

- *Type:* string

---

##### `ReviewState`<sup>Required</sup> <a name="ReviewState" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewState"></a>

```csharp
public string ReviewState { get; }
```

- *Type:* string

---

##### `ReviewSubReason`<sup>Required</sup> <a name="ReviewSubReason" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.reviewSubReason"></a>

```csharp
public string ReviewSubReason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviewsOutputReference.property.internalValue"></a>

```csharp
public CleanRoomAssetNotebookReviews InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetNotebookReviews">CleanRoomAssetNotebookReviews</a>

---


### CleanRoomAssetTableColumnsList <a name="CleanRoomAssetTableColumnsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.get"></a>

```csharp
private CleanRoomAssetTableColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetTableColumnsMaskOutputReference <a name="CleanRoomAssetTableColumnsMaskOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableColumnsMaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames">ResetUsingColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resetFunctionName"></a>

```csharp
private void ResetFunctionName()
```

##### `ResetUsingColumnNames` <a name="ResetUsingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.resetUsingColumnNames"></a>

```csharp
private void ResetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput">UsingColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `UsingColumnNamesInput`<sup>Optional</sup> <a name="UsingColumnNamesInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```csharp
public string[] UsingColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `UsingColumnNames`<sup>Required</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetTableColumnsOutputReference <a name="CleanRoomAssetTableColumnsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.putMask">PutMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeText">ResetTypeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMask` <a name="PutMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.putMask"></a>

```csharp
private void PutMask(CleanRoomAssetTableColumnsMask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMask">CleanRoomAssetTableColumnsMask</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetMask"></a>

```csharp
private void ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetNullable"></a>

```csharp
private void ResetNullable()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetPartitionIndex"></a>

```csharp
private void ResetPartitionIndex()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeIntervalType"></a>

```csharp
private void ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeJson"></a>

```csharp
private void ResetTypeJson()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeName"></a>

```csharp
private void ResetTypeName()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypePrecision"></a>

```csharp
private void ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeScale"></a>

```csharp
private void ResetTypeScale()
```

##### `ResetTypeText` <a name="ResetTypeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.resetTypeText"></a>

```csharp
private void ResetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference">CleanRoomAssetTableColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.maskInput">MaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nullableInput">NullableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nullable">Nullable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeJson">TypeJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typePrecision">TypePrecision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeScale">TypeScale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeText">TypeText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns">CleanRoomAssetTableColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.mask"></a>

```csharp
public CleanRoomAssetTableColumnsMaskOutputReference Mask { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsMaskOutputReference">CleanRoomAssetTableColumnsMaskOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.maskInput"></a>

```csharp
public object MaskInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nullableInput"></a>

```csharp
public object NullableInput { get; }
```

- *Type:* object

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.partitionIndexInput"></a>

```csharp
public double PartitionIndexInput { get; }
```

- *Type:* double

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeIntervalTypeInput"></a>

```csharp
public string TypeIntervalTypeInput { get; }
```

- *Type:* string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeJsonInput"></a>

```csharp
public string TypeJsonInput { get; }
```

- *Type:* string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeNameInput"></a>

```csharp
public string TypeNameInput { get; }
```

- *Type:* string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typePrecisionInput"></a>

```csharp
public double TypePrecisionInput { get; }
```

- *Type:* double

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeScaleInput"></a>

```csharp
public double TypeScaleInput { get; }
```

- *Type:* double

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeTextInput"></a>

```csharp
public string TypeTextInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.nullable"></a>

```csharp
public object Nullable { get; }
```

- *Type:* object

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; }
```

- *Type:* string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeJson"></a>

```csharp
public string TypeJson { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typePrecision"></a>

```csharp
public double TypePrecision { get; }
```

- *Type:* double

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeScale"></a>

```csharp
public double TypeScale { get; }
```

- *Type:* double

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.typeText"></a>

```csharp
public string TypeText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsOutputReference.property.internalValue"></a>

```csharp
public CleanRoomAssetTableColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumns">CleanRoomAssetTableColumns</a>

---


### CleanRoomAssetTableLocalDetailsOutputReference <a name="CleanRoomAssetTableLocalDetailsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableLocalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.putPartitions">PutPartitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resetPartitions">ResetPartitions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPartitions` <a name="PutPartitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.putPartitions"></a>

```csharp
private void PutPartitions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.putPartitions.parameter.value"></a>

- *Type:* object

---

##### `ResetPartitions` <a name="ResetPartitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.resetPartitions"></a>

```csharp
private void ResetPartitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.partitions">Partitions</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList">CleanRoomAssetTableLocalDetailsPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput">PartitionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Partitions`<sup>Required</sup> <a name="Partitions" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.partitions"></a>

```csharp
public CleanRoomAssetTableLocalDetailsPartitionsList Partitions { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList">CleanRoomAssetTableLocalDetailsPartitionsList</a>

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.localNameInput"></a>

```csharp
public string LocalNameInput { get; }
```

- *Type:* string

---

##### `PartitionsInput`<sup>Optional</sup> <a name="PartitionsInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.partitionsInput"></a>

```csharp
public object PartitionsInput { get; }
```

- *Type:* object

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetTableLocalDetailsPartitionsList <a name="CleanRoomAssetTableLocalDetailsPartitionsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableLocalDetailsPartitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.get"></a>

```csharp
private CleanRoomAssetTableLocalDetailsPartitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetTableLocalDetailsPartitionsOutputReference <a name="CleanRoomAssetTableLocalDetailsPartitionsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableLocalDetailsPartitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue"></a>

```csharp
private void PutValue(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.putValue.parameter.value"></a>

- *Type:* object

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList">CleanRoomAssetTableLocalDetailsPartitionsValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput">ValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.value"></a>

```csharp
public CleanRoomAssetTableLocalDetailsPartitionsValueList Value { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList">CleanRoomAssetTableLocalDetailsPartitionsValueList</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.valueInput"></a>

```csharp
public object ValueInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetTableLocalDetailsPartitionsValueList <a name="CleanRoomAssetTableLocalDetailsPartitionsValueList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableLocalDetailsPartitionsValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.get"></a>

```csharp
private CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference <a name="CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp">ResetOp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey">ResetRecipientPropertyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOp` <a name="ResetOp" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetOp"></a>

```csharp
private void ResetOp()
```

##### `ResetRecipientPropertyKey` <a name="ResetRecipientPropertyKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetRecipientPropertyKey"></a>

```csharp
private void ResetRecipientPropertyKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput">OpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput">RecipientPropertyKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op">Op</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey">RecipientPropertyKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpInput`<sup>Optional</sup> <a name="OpInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.opInput"></a>

```csharp
public string OpInput { get; }
```

- *Type:* string

---

##### `RecipientPropertyKeyInput`<sup>Optional</sup> <a name="RecipientPropertyKeyInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKeyInput"></a>

```csharp
public string RecipientPropertyKeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.op"></a>

```csharp
public string Op { get; }
```

- *Type:* string

---

##### `RecipientPropertyKey`<sup>Required</sup> <a name="RecipientPropertyKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.recipientPropertyKey"></a>

```csharp
public string RecipientPropertyKey { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableLocalDetailsPartitionsValueOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetTableOutputReference <a name="CleanRoomAssetTableOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList">CleanRoomAssetTableColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.columns"></a>

```csharp
public CleanRoomAssetTableColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableColumnsList">CleanRoomAssetTableColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetTableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetViewColumnsList <a name="CleanRoomAssetViewColumnsList" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetViewColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.get"></a>

```csharp
private CleanRoomAssetViewColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetViewColumnsMaskOutputReference <a name="CleanRoomAssetViewColumnsMaskOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetViewColumnsMaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName">ResetFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames">ResetUsingColumnNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFunctionName` <a name="ResetFunctionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resetFunctionName"></a>

```csharp
private void ResetFunctionName()
```

##### `ResetUsingColumnNames` <a name="ResetUsingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.resetUsingColumnNames"></a>

```csharp
private void ResetUsingColumnNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput">UsingColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames">UsingColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `UsingColumnNamesInput`<sup>Optional</sup> <a name="UsingColumnNamesInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNamesInput"></a>

```csharp
public string[] UsingColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `UsingColumnNames`<sup>Required</sup> <a name="UsingColumnNames" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.usingColumnNames"></a>

```csharp
public string[] UsingColumnNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetViewColumnsOutputReference <a name="CleanRoomAssetViewColumnsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetViewColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.putMask">PutMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetPartitionIndex">ResetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeName">ResetTypeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeText">ResetTypeText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMask` <a name="PutMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.putMask"></a>

```csharp
private void PutMask(CleanRoomAssetViewColumnsMask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.putMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMask">CleanRoomAssetViewColumnsMask</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetMask"></a>

```csharp
private void ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetNullable"></a>

```csharp
private void ResetNullable()
```

##### `ResetPartitionIndex` <a name="ResetPartitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetPartitionIndex"></a>

```csharp
private void ResetPartitionIndex()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeIntervalType"></a>

```csharp
private void ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeJson"></a>

```csharp
private void ResetTypeJson()
```

##### `ResetTypeName` <a name="ResetTypeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeName"></a>

```csharp
private void ResetTypeName()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypePrecision"></a>

```csharp
private void ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeScale"></a>

```csharp
private void ResetTypeScale()
```

##### `ResetTypeText` <a name="ResetTypeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.resetTypeText"></a>

```csharp
private void ResetTypeText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.mask">Mask</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference">CleanRoomAssetViewColumnsMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.maskInput">MaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nullableInput">NullableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput">PartitionIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nullable">Nullable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.partitionIndex">PartitionIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeJson">TypeJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeName">TypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typePrecision">TypePrecision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeScale">TypeScale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeText">TypeText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns">CleanRoomAssetViewColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.mask"></a>

```csharp
public CleanRoomAssetViewColumnsMaskOutputReference Mask { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsMaskOutputReference">CleanRoomAssetViewColumnsMaskOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.maskInput"></a>

```csharp
public object MaskInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nullableInput"></a>

```csharp
public object NullableInput { get; }
```

- *Type:* object

---

##### `PartitionIndexInput`<sup>Optional</sup> <a name="PartitionIndexInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.partitionIndexInput"></a>

```csharp
public double PartitionIndexInput { get; }
```

- *Type:* double

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeIntervalTypeInput"></a>

```csharp
public string TypeIntervalTypeInput { get; }
```

- *Type:* string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeJsonInput"></a>

```csharp
public string TypeJsonInput { get; }
```

- *Type:* string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeNameInput"></a>

```csharp
public string TypeNameInput { get; }
```

- *Type:* string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typePrecisionInput"></a>

```csharp
public double TypePrecisionInput { get; }
```

- *Type:* double

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeScaleInput"></a>

```csharp
public double TypeScaleInput { get; }
```

- *Type:* double

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeTextInput"></a>

```csharp
public string TypeTextInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.nullable"></a>

```csharp
public object Nullable { get; }
```

- *Type:* object

---

##### `PartitionIndex`<sup>Required</sup> <a name="PartitionIndex" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.partitionIndex"></a>

```csharp
public double PartitionIndex { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeIntervalType"></a>

```csharp
public string TypeIntervalType { get; }
```

- *Type:* string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeJson"></a>

```csharp
public string TypeJson { get; }
```

- *Type:* string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeName"></a>

```csharp
public string TypeName { get; }
```

- *Type:* string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typePrecision"></a>

```csharp
public double TypePrecision { get; }
```

- *Type:* double

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeScale"></a>

```csharp
public double TypeScale { get; }
```

- *Type:* double

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.typeText"></a>

```csharp
public string TypeText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsOutputReference.property.internalValue"></a>

```csharp
public CleanRoomAssetViewColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumns">CleanRoomAssetViewColumns</a>

---


### CleanRoomAssetViewLocalDetailsOutputReference <a name="CleanRoomAssetViewLocalDetailsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetViewLocalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.localNameInput"></a>

```csharp
public string LocalNameInput { get; }
```

- *Type:* string

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewLocalDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetViewOutputReference <a name="CleanRoomAssetViewOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetViewOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList">CleanRoomAssetViewColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.columns"></a>

```csharp
public CleanRoomAssetViewColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewColumnsList">CleanRoomAssetViewColumnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetViewOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CleanRoomAssetVolumeLocalDetailsOutputReference <a name="CleanRoomAssetVolumeLocalDetailsOutputReference" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAssetVolumeLocalDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput">LocalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.localName">LocalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalNameInput`<sup>Optional</sup> <a name="LocalNameInput" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.localNameInput"></a>

```csharp
public string LocalNameInput { get; }
```

- *Type:* string

---

##### `LocalName`<sup>Required</sup> <a name="LocalName" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.localName"></a>

```csharp
public string LocalName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.cleanRoomAsset.CleanRoomAssetVolumeLocalDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



