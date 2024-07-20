# `qualityMonitor` Submodule <a name="`qualityMonitor` Submodule" id="@cdktf/provider-databricks.qualityMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QualityMonitor <a name="QualityMonitor" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor databricks_quality_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitor(Construct Scope, string Id, QualityMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig">QualityMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig">QualityMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putCustomMetrics">PutCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putDataClassificationConfig">PutDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putInferenceLog">PutInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putNotifications">PutNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putSnapshot">PutSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putTimeSeries">PutTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetBaselineTableName">ResetBaselineTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetCustomMetrics">ResetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetDataClassificationConfig">ResetDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetInferenceLog">ResetInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetLatestMonitorFailureMsg">ResetLatestMonitorFailureMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetNotifications">ResetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetSkipBuiltinDashboard">ResetSkipBuiltinDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetSlicingExprs">ResetSlicingExprs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetTimeSeries">ResetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomMetrics` <a name="PutCustomMetrics" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putCustomMetrics"></a>

```csharp
private void PutCustomMetrics(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putCustomMetrics.parameter.value"></a>

- *Type:* object

---

##### `PutDataClassificationConfig` <a name="PutDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putDataClassificationConfig"></a>

```csharp
private void PutDataClassificationConfig(QualityMonitorDataClassificationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putDataClassificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig">QualityMonitorDataClassificationConfig</a>

---

##### `PutInferenceLog` <a name="PutInferenceLog" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putInferenceLog"></a>

```csharp
private void PutInferenceLog(QualityMonitorInferenceLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putInferenceLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog">QualityMonitorInferenceLog</a>

---

##### `PutNotifications` <a name="PutNotifications" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putNotifications"></a>

```csharp
private void PutNotifications(QualityMonitorNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications">QualityMonitorNotifications</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putSchedule"></a>

```csharp
private void PutSchedule(QualityMonitorSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule">QualityMonitorSchedule</a>

---

##### `PutSnapshot` <a name="PutSnapshot" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putSnapshot"></a>

```csharp
private void PutSnapshot(QualityMonitorSnapshot Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshot">QualityMonitorSnapshot</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putTimeouts"></a>

```csharp
private void PutTimeouts(QualityMonitorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeouts">QualityMonitorTimeouts</a>

---

##### `PutTimeSeries` <a name="PutTimeSeries" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putTimeSeries"></a>

```csharp
private void PutTimeSeries(QualityMonitorTimeSeries Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putTimeSeries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries">QualityMonitorTimeSeries</a>

---

##### `ResetBaselineTableName` <a name="ResetBaselineTableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetBaselineTableName"></a>

```csharp
private void ResetBaselineTableName()
```

##### `ResetCustomMetrics` <a name="ResetCustomMetrics" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetCustomMetrics"></a>

```csharp
private void ResetCustomMetrics()
```

##### `ResetDataClassificationConfig` <a name="ResetDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetDataClassificationConfig"></a>

```csharp
private void ResetDataClassificationConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInferenceLog` <a name="ResetInferenceLog" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetInferenceLog"></a>

```csharp
private void ResetInferenceLog()
```

##### `ResetLatestMonitorFailureMsg` <a name="ResetLatestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetLatestMonitorFailureMsg"></a>

```csharp
private void ResetLatestMonitorFailureMsg()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetNotifications"></a>

```csharp
private void ResetNotifications()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetSkipBuiltinDashboard` <a name="ResetSkipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetSkipBuiltinDashboard"></a>

```csharp
private void ResetSkipBuiltinDashboard()
```

##### `ResetSlicingExprs` <a name="ResetSlicingExprs" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetSlicingExprs"></a>

```csharp
private void ResetSlicingExprs()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetSnapshot"></a>

```csharp
private void ResetSnapshot()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeSeries` <a name="ResetTimeSeries" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetTimeSeries"></a>

```csharp
private void ResetTimeSeries()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetWarehouseId"></a>

```csharp
private void ResetWarehouseId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QualityMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

QualityMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

QualityMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

QualityMonitor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

QualityMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a QualityMonitor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QualityMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QualityMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the QualityMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.customMetrics">CustomMetrics</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList">QualityMonitorCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dashboardId">DashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dataClassificationConfig">DataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference">QualityMonitorDataClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.driftMetricsTableName">DriftMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.inferenceLog">InferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference">QualityMonitorInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.monitorVersion">MonitorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.notifications">Notifications</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference">QualityMonitorNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.profileMetricsTableName">ProfileMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference">QualityMonitorScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference">QualityMonitorSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference">QualityMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.timeSeries">TimeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference">QualityMonitorTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.assetsDirInput">AssetsDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.baselineTableNameInput">BaselineTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.customMetricsInput">CustomMetricsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dataClassificationConfigInput">DataClassificationConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig">QualityMonitorDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.inferenceLogInput">InferenceLogInput</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog">QualityMonitorInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.latestMonitorFailureMsgInput">LatestMonitorFailureMsgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.notificationsInput">NotificationsInput</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications">QualityMonitorNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.outputSchemaNameInput">OutputSchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule">QualityMonitorSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.skipBuiltinDashboardInput">SkipBuiltinDashboardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.slicingExprsInput">SlicingExprsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.snapshotInput">SnapshotInput</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshot">QualityMonitorSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.timeSeriesInput">TimeSeriesInput</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries">QualityMonitorTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.assetsDir">AssetsDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.baselineTableName">BaselineTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.latestMonitorFailureMsg">LatestMonitorFailureMsg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.outputSchemaName">OutputSchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.slicingExprs">SlicingExprs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomMetrics`<sup>Required</sup> <a name="CustomMetrics" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.customMetrics"></a>

```csharp
public QualityMonitorCustomMetricsList CustomMetrics { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList">QualityMonitorCustomMetricsList</a>

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dashboardId"></a>

```csharp
public string DashboardId { get; }
```

- *Type:* string

---

##### `DataClassificationConfig`<sup>Required</sup> <a name="DataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dataClassificationConfig"></a>

```csharp
public QualityMonitorDataClassificationConfigOutputReference DataClassificationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference">QualityMonitorDataClassificationConfigOutputReference</a>

---

##### `DriftMetricsTableName`<sup>Required</sup> <a name="DriftMetricsTableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.driftMetricsTableName"></a>

```csharp
public string DriftMetricsTableName { get; }
```

- *Type:* string

---

##### `InferenceLog`<sup>Required</sup> <a name="InferenceLog" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.inferenceLog"></a>

```csharp
public QualityMonitorInferenceLogOutputReference InferenceLog { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference">QualityMonitorInferenceLogOutputReference</a>

---

##### `MonitorVersion`<sup>Required</sup> <a name="MonitorVersion" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.monitorVersion"></a>

```csharp
public string MonitorVersion { get; }
```

- *Type:* string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.notifications"></a>

```csharp
public QualityMonitorNotificationsOutputReference Notifications { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference">QualityMonitorNotificationsOutputReference</a>

---

##### `ProfileMetricsTableName`<sup>Required</sup> <a name="ProfileMetricsTableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.profileMetricsTableName"></a>

```csharp
public string ProfileMetricsTableName { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.schedule"></a>

```csharp
public QualityMonitorScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference">QualityMonitorScheduleOutputReference</a>

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.snapshot"></a>

```csharp
public QualityMonitorSnapshotOutputReference Snapshot { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference">QualityMonitorSnapshotOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.timeouts"></a>

```csharp
public QualityMonitorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference">QualityMonitorTimeoutsOutputReference</a>

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.timeSeries"></a>

```csharp
public QualityMonitorTimeSeriesOutputReference TimeSeries { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference">QualityMonitorTimeSeriesOutputReference</a>

---

##### `AssetsDirInput`<sup>Optional</sup> <a name="AssetsDirInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.assetsDirInput"></a>

```csharp
public string AssetsDirInput { get; }
```

- *Type:* string

---

##### `BaselineTableNameInput`<sup>Optional</sup> <a name="BaselineTableNameInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.baselineTableNameInput"></a>

```csharp
public string BaselineTableNameInput { get; }
```

- *Type:* string

---

##### `CustomMetricsInput`<sup>Optional</sup> <a name="CustomMetricsInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.customMetricsInput"></a>

```csharp
public object CustomMetricsInput { get; }
```

- *Type:* object

---

##### `DataClassificationConfigInput`<sup>Optional</sup> <a name="DataClassificationConfigInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dataClassificationConfigInput"></a>

```csharp
public QualityMonitorDataClassificationConfig DataClassificationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig">QualityMonitorDataClassificationConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InferenceLogInput`<sup>Optional</sup> <a name="InferenceLogInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.inferenceLogInput"></a>

```csharp
public QualityMonitorInferenceLog InferenceLogInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog">QualityMonitorInferenceLog</a>

---

##### `LatestMonitorFailureMsgInput`<sup>Optional</sup> <a name="LatestMonitorFailureMsgInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.latestMonitorFailureMsgInput"></a>

```csharp
public string LatestMonitorFailureMsgInput { get; }
```

- *Type:* string

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.notificationsInput"></a>

```csharp
public QualityMonitorNotifications NotificationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications">QualityMonitorNotifications</a>

---

##### `OutputSchemaNameInput`<sup>Optional</sup> <a name="OutputSchemaNameInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.outputSchemaNameInput"></a>

```csharp
public string OutputSchemaNameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.scheduleInput"></a>

```csharp
public QualityMonitorSchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule">QualityMonitorSchedule</a>

---

##### `SkipBuiltinDashboardInput`<sup>Optional</sup> <a name="SkipBuiltinDashboardInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.skipBuiltinDashboardInput"></a>

```csharp
public object SkipBuiltinDashboardInput { get; }
```

- *Type:* object

---

##### `SlicingExprsInput`<sup>Optional</sup> <a name="SlicingExprsInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.slicingExprsInput"></a>

```csharp
public string[] SlicingExprsInput { get; }
```

- *Type:* string[]

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.snapshotInput"></a>

```csharp
public QualityMonitorSnapshot SnapshotInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshot">QualityMonitorSnapshot</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeSeriesInput`<sup>Optional</sup> <a name="TimeSeriesInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.timeSeriesInput"></a>

```csharp
public QualityMonitorTimeSeries TimeSeriesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries">QualityMonitorTimeSeries</a>

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.warehouseIdInput"></a>

```csharp
public string WarehouseIdInput { get; }
```

- *Type:* string

---

##### `AssetsDir`<sup>Required</sup> <a name="AssetsDir" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.assetsDir"></a>

```csharp
public string AssetsDir { get; }
```

- *Type:* string

---

##### `BaselineTableName`<sup>Required</sup> <a name="BaselineTableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.baselineTableName"></a>

```csharp
public string BaselineTableName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LatestMonitorFailureMsg`<sup>Required</sup> <a name="LatestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.latestMonitorFailureMsg"></a>

```csharp
public string LatestMonitorFailureMsg { get; }
```

- *Type:* string

---

##### `OutputSchemaName`<sup>Required</sup> <a name="OutputSchemaName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.outputSchemaName"></a>

```csharp
public string OutputSchemaName { get; }
```

- *Type:* string

---

##### `SkipBuiltinDashboard`<sup>Required</sup> <a name="SkipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.skipBuiltinDashboard"></a>

```csharp
public object SkipBuiltinDashboard { get; }
```

- *Type:* object

---

##### `SlicingExprs`<sup>Required</sup> <a name="SlicingExprs" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.slicingExprs"></a>

```csharp
public string[] SlicingExprs { get; }
```

- *Type:* string[]

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QualityMonitorConfig <a name="QualityMonitorConfig" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AssetsDir,
    string OutputSchemaName,
    string TableName,
    string BaselineTableName = null,
    object CustomMetrics = null,
    QualityMonitorDataClassificationConfig DataClassificationConfig = null,
    string Id = null,
    QualityMonitorInferenceLog InferenceLog = null,
    string LatestMonitorFailureMsg = null,
    QualityMonitorNotifications Notifications = null,
    QualityMonitorSchedule Schedule = null,
    object SkipBuiltinDashboard = null,
    string[] SlicingExprs = null,
    QualityMonitorSnapshot Snapshot = null,
    QualityMonitorTimeouts Timeouts = null,
    QualityMonitorTimeSeries TimeSeries = null,
    string WarehouseId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.assetsDir">AssetsDir</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#assets_dir QualityMonitor#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.outputSchemaName">OutputSchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#output_schema_name QualityMonitor#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#table_name QualityMonitor#table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.baselineTableName">BaselineTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#baseline_table_name QualityMonitor#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.customMetrics">CustomMetrics</a></code> | <code>object</code> | custom_metrics block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.dataClassificationConfig">DataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig">QualityMonitorDataClassificationConfig</a></code> | data_classification_config block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#id QualityMonitor#id}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.inferenceLog">InferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog">QualityMonitorInferenceLog</a></code> | inference_log block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.latestMonitorFailureMsg">LatestMonitorFailureMsg</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#latest_monitor_failure_msg QualityMonitor#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.notifications">Notifications</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications">QualityMonitorNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule">QualityMonitorSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#skip_builtin_dashboard QualityMonitor#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.slicingExprs">SlicingExprs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#slicing_exprs QualityMonitor#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshot">QualityMonitorSnapshot</a></code> | snapshot block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeouts">QualityMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.timeSeries">TimeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries">QualityMonitorTimeSeries</a></code> | time_series block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.warehouseId">WarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#warehouse_id QualityMonitor#warehouse_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssetsDir`<sup>Required</sup> <a name="AssetsDir" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.assetsDir"></a>

```csharp
public string AssetsDir { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#assets_dir QualityMonitor#assets_dir}.

---

##### `OutputSchemaName`<sup>Required</sup> <a name="OutputSchemaName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.outputSchemaName"></a>

```csharp
public string OutputSchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#output_schema_name QualityMonitor#output_schema_name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#table_name QualityMonitor#table_name}.

---

##### `BaselineTableName`<sup>Optional</sup> <a name="BaselineTableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.baselineTableName"></a>

```csharp
public string BaselineTableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#baseline_table_name QualityMonitor#baseline_table_name}.

---

##### `CustomMetrics`<sup>Optional</sup> <a name="CustomMetrics" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.customMetrics"></a>

```csharp
public object CustomMetrics { get; set; }
```

- *Type:* object

custom_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#custom_metrics QualityMonitor#custom_metrics}

---

##### `DataClassificationConfig`<sup>Optional</sup> <a name="DataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.dataClassificationConfig"></a>

```csharp
public QualityMonitorDataClassificationConfig DataClassificationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig">QualityMonitorDataClassificationConfig</a>

data_classification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#data_classification_config QualityMonitor#data_classification_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#id QualityMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InferenceLog`<sup>Optional</sup> <a name="InferenceLog" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.inferenceLog"></a>

```csharp
public QualityMonitorInferenceLog InferenceLog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog">QualityMonitorInferenceLog</a>

inference_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#inference_log QualityMonitor#inference_log}

---

##### `LatestMonitorFailureMsg`<sup>Optional</sup> <a name="LatestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.latestMonitorFailureMsg"></a>

```csharp
public string LatestMonitorFailureMsg { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#latest_monitor_failure_msg QualityMonitor#latest_monitor_failure_msg}.

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.notifications"></a>

```csharp
public QualityMonitorNotifications Notifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications">QualityMonitorNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#notifications QualityMonitor#notifications}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.schedule"></a>

```csharp
public QualityMonitorSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule">QualityMonitorSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#schedule QualityMonitor#schedule}

---

##### `SkipBuiltinDashboard`<sup>Optional</sup> <a name="SkipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.skipBuiltinDashboard"></a>

```csharp
public object SkipBuiltinDashboard { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#skip_builtin_dashboard QualityMonitor#skip_builtin_dashboard}.

---

##### `SlicingExprs`<sup>Optional</sup> <a name="SlicingExprs" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.slicingExprs"></a>

```csharp
public string[] SlicingExprs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#slicing_exprs QualityMonitor#slicing_exprs}.

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.snapshot"></a>

```csharp
public QualityMonitorSnapshot Snapshot { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshot">QualityMonitorSnapshot</a>

snapshot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#snapshot QualityMonitor#snapshot}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.timeouts"></a>

```csharp
public QualityMonitorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeouts">QualityMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#timeouts QualityMonitor#timeouts}

---

##### `TimeSeries`<sup>Optional</sup> <a name="TimeSeries" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.timeSeries"></a>

```csharp
public QualityMonitorTimeSeries TimeSeries { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries">QualityMonitorTimeSeries</a>

time_series block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#time_series QualityMonitor#time_series}

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.warehouseId"></a>

```csharp
public string WarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#warehouse_id QualityMonitor#warehouse_id}.

---

### QualityMonitorCustomMetrics <a name="QualityMonitorCustomMetrics" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorCustomMetrics {
    string Definition,
    string[] InputColumns,
    string Name,
    string OutputDataType,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.definition">Definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#definition QualityMonitor#definition}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.inputColumns">InputColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#input_columns QualityMonitor#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#name QualityMonitor#name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.outputDataType">OutputDataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#output_data_type QualityMonitor#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#type QualityMonitor#type}. |

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.definition"></a>

```csharp
public string Definition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#definition QualityMonitor#definition}.

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.inputColumns"></a>

```csharp
public string[] InputColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#input_columns QualityMonitor#input_columns}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#name QualityMonitor#name}.

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.outputDataType"></a>

```csharp
public string OutputDataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#output_data_type QualityMonitor#output_data_type}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#type QualityMonitor#type}.

---

### QualityMonitorDataClassificationConfig <a name="QualityMonitorDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorDataClassificationConfig {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#enabled QualityMonitor#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#enabled QualityMonitor#enabled}.

---

### QualityMonitorInferenceLog <a name="QualityMonitorInferenceLog" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorInferenceLog {
    string[] Granularities,
    string ModelIdCol,
    string PredictionCol,
    string ProblemType,
    string TimestampCol,
    string LabelCol = null,
    string PredictionProbaCol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.granularities">Granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#granularities QualityMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.modelIdCol">ModelIdCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#model_id_col QualityMonitor#model_id_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.predictionCol">PredictionCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#prediction_col QualityMonitor#prediction_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.problemType">ProblemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#problem_type QualityMonitor#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.timestampCol">TimestampCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#timestamp_col QualityMonitor#timestamp_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.labelCol">LabelCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#label_col QualityMonitor#label_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.predictionProbaCol">PredictionProbaCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#prediction_proba_col QualityMonitor#prediction_proba_col}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.granularities"></a>

```csharp
public string[] Granularities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#granularities QualityMonitor#granularities}.

---

##### `ModelIdCol`<sup>Required</sup> <a name="ModelIdCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.modelIdCol"></a>

```csharp
public string ModelIdCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#model_id_col QualityMonitor#model_id_col}.

---

##### `PredictionCol`<sup>Required</sup> <a name="PredictionCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.predictionCol"></a>

```csharp
public string PredictionCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#prediction_col QualityMonitor#prediction_col}.

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.problemType"></a>

```csharp
public string ProblemType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#problem_type QualityMonitor#problem_type}.

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.timestampCol"></a>

```csharp
public string TimestampCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#timestamp_col QualityMonitor#timestamp_col}.

---

##### `LabelCol`<sup>Optional</sup> <a name="LabelCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.labelCol"></a>

```csharp
public string LabelCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#label_col QualityMonitor#label_col}.

---

##### `PredictionProbaCol`<sup>Optional</sup> <a name="PredictionProbaCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.predictionProbaCol"></a>

```csharp
public string PredictionProbaCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#prediction_proba_col QualityMonitor#prediction_proba_col}.

---

### QualityMonitorNotifications <a name="QualityMonitorNotifications" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorNotifications {
    QualityMonitorNotificationsOnFailure OnFailure = null,
    QualityMonitorNotificationsOnNewClassificationTagDetected OnNewClassificationTagDetected = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure">QualityMonitorNotificationsOnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications.property.onNewClassificationTagDetected">OnNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected">QualityMonitorNotificationsOnNewClassificationTagDetected</a></code> | on_new_classification_tag_detected block. |

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications.property.onFailure"></a>

```csharp
public QualityMonitorNotificationsOnFailure OnFailure { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure">QualityMonitorNotificationsOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#on_failure QualityMonitor#on_failure}

---

##### `OnNewClassificationTagDetected`<sup>Optional</sup> <a name="OnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications.property.onNewClassificationTagDetected"></a>

```csharp
public QualityMonitorNotificationsOnNewClassificationTagDetected OnNewClassificationTagDetected { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected">QualityMonitorNotificationsOnNewClassificationTagDetected</a>

on_new_classification_tag_detected block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#on_new_classification_tag_detected QualityMonitor#on_new_classification_tag_detected}

---

### QualityMonitorNotificationsOnFailure <a name="QualityMonitorNotificationsOnFailure" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorNotificationsOnFailure {
    string[] EmailAddresses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#email_addresses QualityMonitor#email_addresses}. |

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#email_addresses QualityMonitor#email_addresses}.

---

### QualityMonitorNotificationsOnNewClassificationTagDetected <a name="QualityMonitorNotificationsOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorNotificationsOnNewClassificationTagDetected {
    string[] EmailAddresses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#email_addresses QualityMonitor#email_addresses}. |

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#email_addresses QualityMonitor#email_addresses}.

---

### QualityMonitorSchedule <a name="QualityMonitorSchedule" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorSchedule {
    string QuartzCronExpression,
    string TimezoneId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#quartz_cron_expression QualityMonitor#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule.property.timezoneId">TimezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#timezone_id QualityMonitor#timezone_id}. |

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule.property.quartzCronExpression"></a>

```csharp
public string QuartzCronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#quartz_cron_expression QualityMonitor#quartz_cron_expression}.

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule.property.timezoneId"></a>

```csharp
public string TimezoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#timezone_id QualityMonitor#timezone_id}.

---

### QualityMonitorSnapshot <a name="QualityMonitorSnapshot" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorSnapshot {

};
```


### QualityMonitorTimeouts <a name="QualityMonitorTimeouts" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#create QualityMonitor#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#create QualityMonitor#create}.

---

### QualityMonitorTimeSeries <a name="QualityMonitorTimeSeries" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorTimeSeries {
    string[] Granularities,
    string TimestampCol
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries.property.granularities">Granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#granularities QualityMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries.property.timestampCol">TimestampCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#timestamp_col QualityMonitor#timestamp_col}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries.property.granularities"></a>

```csharp
public string[] Granularities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#granularities QualityMonitor#granularities}.

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries.property.timestampCol"></a>

```csharp
public string TimestampCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/resources/quality_monitor#timestamp_col QualityMonitor#timestamp_col}.

---

## Classes <a name="Classes" id="Classes"></a>

### QualityMonitorCustomMetricsList <a name="QualityMonitorCustomMetricsList" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorCustomMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.get"></a>

```csharp
private QualityMonitorCustomMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QualityMonitorCustomMetricsOutputReference <a name="QualityMonitorCustomMetricsOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorCustomMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.inputColumnsInput">InputColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.outputDataTypeInput">OutputDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.definition">Definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.inputColumns">InputColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.outputDataType">OutputDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.definitionInput"></a>

```csharp
public string DefinitionInput { get; }
```

- *Type:* string

---

##### `InputColumnsInput`<sup>Optional</sup> <a name="InputColumnsInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.inputColumnsInput"></a>

```csharp
public string[] InputColumnsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputDataTypeInput`<sup>Optional</sup> <a name="OutputDataTypeInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```csharp
public string OutputDataTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.definition"></a>

```csharp
public string Definition { get; }
```

- *Type:* string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.inputColumns"></a>

```csharp
public string[] InputColumns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.outputDataType"></a>

```csharp
public string OutputDataType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QualityMonitorDataClassificationConfigOutputReference <a name="QualityMonitorDataClassificationConfigOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorDataClassificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig">QualityMonitorDataClassificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.internalValue"></a>

```csharp
public QualityMonitorDataClassificationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig">QualityMonitorDataClassificationConfig</a>

---


### QualityMonitorInferenceLogOutputReference <a name="QualityMonitorInferenceLogOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorInferenceLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.resetLabelCol">ResetLabelCol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.resetPredictionProbaCol">ResetPredictionProbaCol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelCol` <a name="ResetLabelCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.resetLabelCol"></a>

```csharp
private void ResetLabelCol()
```

##### `ResetPredictionProbaCol` <a name="ResetPredictionProbaCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.resetPredictionProbaCol"></a>

```csharp
private void ResetPredictionProbaCol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.labelColInput">LabelColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.modelIdColInput">ModelIdColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionColInput">PredictionColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionProbaColInput">PredictionProbaColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.problemTypeInput">ProblemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.timestampColInput">TimestampColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.granularities">Granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.labelCol">LabelCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.modelIdCol">ModelIdCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionCol">PredictionCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionProbaCol">PredictionProbaCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.problemType">ProblemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.timestampCol">TimestampCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog">QualityMonitorInferenceLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.granularitiesInput"></a>

```csharp
public string[] GranularitiesInput { get; }
```

- *Type:* string[]

---

##### `LabelColInput`<sup>Optional</sup> <a name="LabelColInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.labelColInput"></a>

```csharp
public string LabelColInput { get; }
```

- *Type:* string

---

##### `ModelIdColInput`<sup>Optional</sup> <a name="ModelIdColInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.modelIdColInput"></a>

```csharp
public string ModelIdColInput { get; }
```

- *Type:* string

---

##### `PredictionColInput`<sup>Optional</sup> <a name="PredictionColInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionColInput"></a>

```csharp
public string PredictionColInput { get; }
```

- *Type:* string

---

##### `PredictionProbaColInput`<sup>Optional</sup> <a name="PredictionProbaColInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionProbaColInput"></a>

```csharp
public string PredictionProbaColInput { get; }
```

- *Type:* string

---

##### `ProblemTypeInput`<sup>Optional</sup> <a name="ProblemTypeInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.problemTypeInput"></a>

```csharp
public string ProblemTypeInput { get; }
```

- *Type:* string

---

##### `TimestampColInput`<sup>Optional</sup> <a name="TimestampColInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.timestampColInput"></a>

```csharp
public string TimestampColInput { get; }
```

- *Type:* string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.granularities"></a>

```csharp
public string[] Granularities { get; }
```

- *Type:* string[]

---

##### `LabelCol`<sup>Required</sup> <a name="LabelCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.labelCol"></a>

```csharp
public string LabelCol { get; }
```

- *Type:* string

---

##### `ModelIdCol`<sup>Required</sup> <a name="ModelIdCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.modelIdCol"></a>

```csharp
public string ModelIdCol { get; }
```

- *Type:* string

---

##### `PredictionCol`<sup>Required</sup> <a name="PredictionCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionCol"></a>

```csharp
public string PredictionCol { get; }
```

- *Type:* string

---

##### `PredictionProbaCol`<sup>Required</sup> <a name="PredictionProbaCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionProbaCol"></a>

```csharp
public string PredictionProbaCol { get; }
```

- *Type:* string

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.problemType"></a>

```csharp
public string ProblemType { get; }
```

- *Type:* string

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.timestampCol"></a>

```csharp
public string TimestampCol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.internalValue"></a>

```csharp
public QualityMonitorInferenceLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog">QualityMonitorInferenceLog</a>

---


### QualityMonitorNotificationsOnFailureOutputReference <a name="QualityMonitorNotificationsOnFailureOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorNotificationsOnFailureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.resetEmailAddresses"></a>

```csharp
private void ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure">QualityMonitorNotificationsOnFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.emailAddressesInput"></a>

```csharp
public string[] EmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.internalValue"></a>

```csharp
public QualityMonitorNotificationsOnFailure InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure">QualityMonitorNotificationsOnFailure</a>

---


### QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference <a name="QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses"></a>

```csharp
private void ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected">QualityMonitorNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput"></a>

```csharp
public string[] EmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue"></a>

```csharp
public QualityMonitorNotificationsOnNewClassificationTagDetected InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected">QualityMonitorNotificationsOnNewClassificationTagDetected</a>

---


### QualityMonitorNotificationsOutputReference <a name="QualityMonitorNotificationsOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.putOnFailure">PutOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.putOnNewClassificationTagDetected">PutOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.resetOnNewClassificationTagDetected">ResetOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.putOnFailure"></a>

```csharp
private void PutOnFailure(QualityMonitorNotificationsOnFailure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure">QualityMonitorNotificationsOnFailure</a>

---

##### `PutOnNewClassificationTagDetected` <a name="PutOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.putOnNewClassificationTagDetected"></a>

```csharp
private void PutOnNewClassificationTagDetected(QualityMonitorNotificationsOnNewClassificationTagDetected Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.putOnNewClassificationTagDetected.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected">QualityMonitorNotificationsOnNewClassificationTagDetected</a>

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.resetOnFailure"></a>

```csharp
private void ResetOnFailure()
```

##### `ResetOnNewClassificationTagDetected` <a name="ResetOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.resetOnNewClassificationTagDetected"></a>

```csharp
private void ResetOnNewClassificationTagDetected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference">QualityMonitorNotificationsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onNewClassificationTagDetected">OnNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference">QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure">QualityMonitorNotificationsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onNewClassificationTagDetectedInput">OnNewClassificationTagDetectedInput</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected">QualityMonitorNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications">QualityMonitorNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onFailure"></a>

```csharp
public QualityMonitorNotificationsOnFailureOutputReference OnFailure { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference">QualityMonitorNotificationsOnFailureOutputReference</a>

---

##### `OnNewClassificationTagDetected`<sup>Required</sup> <a name="OnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onNewClassificationTagDetected"></a>

```csharp
public QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference OnNewClassificationTagDetected { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference">QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onFailureInput"></a>

```csharp
public QualityMonitorNotificationsOnFailure OnFailureInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure">QualityMonitorNotificationsOnFailure</a>

---

##### `OnNewClassificationTagDetectedInput`<sup>Optional</sup> <a name="OnNewClassificationTagDetectedInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onNewClassificationTagDetectedInput"></a>

```csharp
public QualityMonitorNotificationsOnNewClassificationTagDetected OnNewClassificationTagDetectedInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected">QualityMonitorNotificationsOnNewClassificationTagDetected</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.internalValue"></a>

```csharp
public QualityMonitorNotifications InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications">QualityMonitorNotifications</a>

---


### QualityMonitorScheduleOutputReference <a name="QualityMonitorScheduleOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.pauseStatus">PauseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.quartzCronExpressionInput">QuartzCronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.timezoneId">TimezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule">QualityMonitorSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PauseStatus`<sup>Required</sup> <a name="PauseStatus" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.pauseStatus"></a>

```csharp
public string PauseStatus { get; }
```

- *Type:* string

---

##### `QuartzCronExpressionInput`<sup>Optional</sup> <a name="QuartzCronExpressionInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.quartzCronExpressionInput"></a>

```csharp
public string QuartzCronExpressionInput { get; }
```

- *Type:* string

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.timezoneIdInput"></a>

```csharp
public string TimezoneIdInput { get; }
```

- *Type:* string

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.quartzCronExpression"></a>

```csharp
public string QuartzCronExpression { get; }
```

- *Type:* string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.timezoneId"></a>

```csharp
public string TimezoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.internalValue"></a>

```csharp
public QualityMonitorSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule">QualityMonitorSchedule</a>

---


### QualityMonitorSnapshotOutputReference <a name="QualityMonitorSnapshotOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorSnapshotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshot">QualityMonitorSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.property.internalValue"></a>

```csharp
public QualityMonitorSnapshot InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshot">QualityMonitorSnapshot</a>

---


### QualityMonitorTimeoutsOutputReference <a name="QualityMonitorTimeoutsOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QualityMonitorTimeSeriesOutputReference <a name="QualityMonitorTimeSeriesOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorTimeSeriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.timestampColInput">TimestampColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.granularities">Granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.timestampCol">TimestampCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries">QualityMonitorTimeSeries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.granularitiesInput"></a>

```csharp
public string[] GranularitiesInput { get; }
```

- *Type:* string[]

---

##### `TimestampColInput`<sup>Optional</sup> <a name="TimestampColInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.timestampColInput"></a>

```csharp
public string TimestampColInput { get; }
```

- *Type:* string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.granularities"></a>

```csharp
public string[] Granularities { get; }
```

- *Type:* string[]

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.timestampCol"></a>

```csharp
public string TimestampCol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.internalValue"></a>

```csharp
public QualityMonitorTimeSeries InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries">QualityMonitorTimeSeries</a>

---



