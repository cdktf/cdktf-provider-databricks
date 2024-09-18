# `qualityMonitorPluginframework` Submodule <a name="`qualityMonitorPluginframework` Submodule" id="@cdktf/provider-databricks.qualityMonitorPluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QualityMonitorPluginframework <a name="QualityMonitorPluginframework" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework databricks_quality_monitor_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframework(Construct Scope, string Id, QualityMonitorPluginframeworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig">QualityMonitorPluginframeworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig">QualityMonitorPluginframeworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putCustomMetrics">PutCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putDataClassificationConfig">PutDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog">PutInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putNotifications">PutNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSnapshot">PutSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putTimeSeries">PutTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetBaselineTableName">ResetBaselineTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetCustomMetrics">ResetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetDataClassificationConfig">ResetDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetInferenceLog">ResetInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetLatestMonitorFailureMsg">ResetLatestMonitorFailureMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetNotifications">ResetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSkipBuiltinDashboard">ResetSkipBuiltinDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSlicingExprs">ResetSlicingExprs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetTimeSeries">ResetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomMetrics` <a name="PutCustomMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putCustomMetrics"></a>

```csharp
private void PutCustomMetrics(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putCustomMetrics.parameter.value"></a>

- *Type:* object

---

##### `PutDataClassificationConfig` <a name="PutDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putDataClassificationConfig"></a>

```csharp
private void PutDataClassificationConfig(QualityMonitorPluginframeworkDataClassificationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putDataClassificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>

---

##### `PutInferenceLog` <a name="PutInferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog"></a>

```csharp
private void PutInferenceLog(QualityMonitorPluginframeworkInferenceLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putInferenceLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>

---

##### `PutNotifications` <a name="PutNotifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putNotifications"></a>

```csharp
private void PutNotifications(QualityMonitorPluginframeworkNotifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSchedule"></a>

```csharp
private void PutSchedule(QualityMonitorPluginframeworkSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>

---

##### `PutSnapshot` <a name="PutSnapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSnapshot"></a>

```csharp
private void PutSnapshot(QualityMonitorPluginframeworkSnapshot Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>

---

##### `PutTimeSeries` <a name="PutTimeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putTimeSeries"></a>

```csharp
private void PutTimeSeries(QualityMonitorPluginframeworkTimeSeries Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.putTimeSeries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>

---

##### `ResetBaselineTableName` <a name="ResetBaselineTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetBaselineTableName"></a>

```csharp
private void ResetBaselineTableName()
```

##### `ResetCustomMetrics` <a name="ResetCustomMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetCustomMetrics"></a>

```csharp
private void ResetCustomMetrics()
```

##### `ResetDataClassificationConfig` <a name="ResetDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetDataClassificationConfig"></a>

```csharp
private void ResetDataClassificationConfig()
```

##### `ResetInferenceLog` <a name="ResetInferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetInferenceLog"></a>

```csharp
private void ResetInferenceLog()
```

##### `ResetLatestMonitorFailureMsg` <a name="ResetLatestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetLatestMonitorFailureMsg"></a>

```csharp
private void ResetLatestMonitorFailureMsg()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetNotifications"></a>

```csharp
private void ResetNotifications()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetSkipBuiltinDashboard` <a name="ResetSkipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSkipBuiltinDashboard"></a>

```csharp
private void ResetSkipBuiltinDashboard()
```

##### `ResetSlicingExprs` <a name="ResetSlicingExprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSlicingExprs"></a>

```csharp
private void ResetSlicingExprs()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetSnapshot"></a>

```csharp
private void ResetSnapshot()
```

##### `ResetTimeSeries` <a name="ResetTimeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetTimeSeries"></a>

```csharp
private void ResetTimeSeries()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.resetWarehouseId"></a>

```csharp
private void ResetWarehouseId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QualityMonitorPluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

QualityMonitorPluginframework.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

QualityMonitorPluginframework.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

QualityMonitorPluginframework.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

QualityMonitorPluginframework.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a QualityMonitorPluginframework resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QualityMonitorPluginframework to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QualityMonitorPluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the QualityMonitorPluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetrics">CustomMetrics</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList">QualityMonitorPluginframeworkCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dashboardId">DashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfig">DataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference">QualityMonitorPluginframeworkDataClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.driftMetricsTableName">DriftMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLog">InferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference">QualityMonitorPluginframeworkInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.monitorVersion">MonitorVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notifications">Notifications</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference">QualityMonitorPluginframeworkNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.profileMetricsTableName">ProfileMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference">QualityMonitorPluginframeworkScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference">QualityMonitorPluginframeworkSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeries">TimeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference">QualityMonitorPluginframeworkTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDirInput">AssetsDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableNameInput">BaselineTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetricsInput">CustomMetricsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfigInput">DataClassificationConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLogInput">InferenceLogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsgInput">LatestMonitorFailureMsgInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notificationsInput">NotificationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaNameInput">OutputSchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.scheduleInput">ScheduleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboardInput">SkipBuiltinDashboardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprsInput">SlicingExprsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshotInput">SnapshotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeriesInput">TimeSeriesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDir">AssetsDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableName">BaselineTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsg">LatestMonitorFailureMsg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaName">OutputSchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprs">SlicingExprs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomMetrics`<sup>Required</sup> <a name="CustomMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetrics"></a>

```csharp
public QualityMonitorPluginframeworkCustomMetricsList CustomMetrics { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList">QualityMonitorPluginframeworkCustomMetricsList</a>

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dashboardId"></a>

```csharp
public string DashboardId { get; }
```

- *Type:* string

---

##### `DataClassificationConfig`<sup>Required</sup> <a name="DataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfig"></a>

```csharp
public QualityMonitorPluginframeworkDataClassificationConfigOutputReference DataClassificationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference">QualityMonitorPluginframeworkDataClassificationConfigOutputReference</a>

---

##### `DriftMetricsTableName`<sup>Required</sup> <a name="DriftMetricsTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.driftMetricsTableName"></a>

```csharp
public string DriftMetricsTableName { get; }
```

- *Type:* string

---

##### `InferenceLog`<sup>Required</sup> <a name="InferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLog"></a>

```csharp
public QualityMonitorPluginframeworkInferenceLogOutputReference InferenceLog { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference">QualityMonitorPluginframeworkInferenceLogOutputReference</a>

---

##### `MonitorVersion`<sup>Required</sup> <a name="MonitorVersion" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.monitorVersion"></a>

```csharp
public string MonitorVersion { get; }
```

- *Type:* string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notifications"></a>

```csharp
public QualityMonitorPluginframeworkNotificationsOutputReference Notifications { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference">QualityMonitorPluginframeworkNotificationsOutputReference</a>

---

##### `ProfileMetricsTableName`<sup>Required</sup> <a name="ProfileMetricsTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.profileMetricsTableName"></a>

```csharp
public string ProfileMetricsTableName { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.schedule"></a>

```csharp
public QualityMonitorPluginframeworkScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference">QualityMonitorPluginframeworkScheduleOutputReference</a>

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshot"></a>

```csharp
public QualityMonitorPluginframeworkSnapshotOutputReference Snapshot { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference">QualityMonitorPluginframeworkSnapshotOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeries"></a>

```csharp
public QualityMonitorPluginframeworkTimeSeriesOutputReference TimeSeries { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference">QualityMonitorPluginframeworkTimeSeriesOutputReference</a>

---

##### `AssetsDirInput`<sup>Optional</sup> <a name="AssetsDirInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDirInput"></a>

```csharp
public string AssetsDirInput { get; }
```

- *Type:* string

---

##### `BaselineTableNameInput`<sup>Optional</sup> <a name="BaselineTableNameInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableNameInput"></a>

```csharp
public string BaselineTableNameInput { get; }
```

- *Type:* string

---

##### `CustomMetricsInput`<sup>Optional</sup> <a name="CustomMetricsInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.customMetricsInput"></a>

```csharp
public object CustomMetricsInput { get; }
```

- *Type:* object

---

##### `DataClassificationConfigInput`<sup>Optional</sup> <a name="DataClassificationConfigInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.dataClassificationConfigInput"></a>

```csharp
public object DataClassificationConfigInput { get; }
```

- *Type:* object

---

##### `InferenceLogInput`<sup>Optional</sup> <a name="InferenceLogInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.inferenceLogInput"></a>

```csharp
public object InferenceLogInput { get; }
```

- *Type:* object

---

##### `LatestMonitorFailureMsgInput`<sup>Optional</sup> <a name="LatestMonitorFailureMsgInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsgInput"></a>

```csharp
public string LatestMonitorFailureMsgInput { get; }
```

- *Type:* string

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.notificationsInput"></a>

```csharp
public object NotificationsInput { get; }
```

- *Type:* object

---

##### `OutputSchemaNameInput`<sup>Optional</sup> <a name="OutputSchemaNameInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaNameInput"></a>

```csharp
public string OutputSchemaNameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.scheduleInput"></a>

```csharp
public object ScheduleInput { get; }
```

- *Type:* object

---

##### `SkipBuiltinDashboardInput`<sup>Optional</sup> <a name="SkipBuiltinDashboardInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboardInput"></a>

```csharp
public object SkipBuiltinDashboardInput { get; }
```

- *Type:* object

---

##### `SlicingExprsInput`<sup>Optional</sup> <a name="SlicingExprsInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprsInput"></a>

```csharp
public string[] SlicingExprsInput { get; }
```

- *Type:* string[]

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.snapshotInput"></a>

```csharp
public object SnapshotInput { get; }
```

- *Type:* object

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TimeSeriesInput`<sup>Optional</sup> <a name="TimeSeriesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.timeSeriesInput"></a>

```csharp
public object TimeSeriesInput { get; }
```

- *Type:* object

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseIdInput"></a>

```csharp
public string WarehouseIdInput { get; }
```

- *Type:* string

---

##### `AssetsDir`<sup>Required</sup> <a name="AssetsDir" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.assetsDir"></a>

```csharp
public string AssetsDir { get; }
```

- *Type:* string

---

##### `BaselineTableName`<sup>Required</sup> <a name="BaselineTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.baselineTableName"></a>

```csharp
public string BaselineTableName { get; }
```

- *Type:* string

---

##### `LatestMonitorFailureMsg`<sup>Required</sup> <a name="LatestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.latestMonitorFailureMsg"></a>

```csharp
public string LatestMonitorFailureMsg { get; }
```

- *Type:* string

---

##### `OutputSchemaName`<sup>Required</sup> <a name="OutputSchemaName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.outputSchemaName"></a>

```csharp
public string OutputSchemaName { get; }
```

- *Type:* string

---

##### `SkipBuiltinDashboard`<sup>Required</sup> <a name="SkipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.skipBuiltinDashboard"></a>

```csharp
public object SkipBuiltinDashboard { get; }
```

- *Type:* object

---

##### `SlicingExprs`<sup>Required</sup> <a name="SlicingExprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.slicingExprs"></a>

```csharp
public string[] SlicingExprs { get; }
```

- *Type:* string[]

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframework.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QualityMonitorPluginframeworkConfig <a name="QualityMonitorPluginframeworkConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkConfig {
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
    QualityMonitorPluginframeworkDataClassificationConfig DataClassificationConfig = null,
    QualityMonitorPluginframeworkInferenceLog InferenceLog = null,
    string LatestMonitorFailureMsg = null,
    QualityMonitorPluginframeworkNotifications Notifications = null,
    QualityMonitorPluginframeworkSchedule Schedule = null,
    object SkipBuiltinDashboard = null,
    string[] SlicingExprs = null,
    QualityMonitorPluginframeworkSnapshot Snapshot = null,
    QualityMonitorPluginframeworkTimeSeries TimeSeries = null,
    string WarehouseId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.assetsDir">AssetsDir</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#assets_dir QualityMonitorPluginframework#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.outputSchemaName">OutputSchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_schema_name QualityMonitorPluginframework#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#table_name QualityMonitorPluginframework#table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.baselineTableName">BaselineTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#baseline_table_name QualityMonitorPluginframework#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.customMetrics">CustomMetrics</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#custom_metrics QualityMonitorPluginframework#custom_metrics}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dataClassificationConfig">DataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#data_classification_config QualityMonitorPluginframework#data_classification_config}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.inferenceLog">InferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#inference_log QualityMonitorPluginframework#inference_log}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.latestMonitorFailureMsg">LatestMonitorFailureMsg</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#latest_monitor_failure_msg QualityMonitorPluginframework#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.notifications">Notifications</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#notifications QualityMonitorPluginframework#notifications}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#schedule QualityMonitorPluginframework#schedule}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#skip_builtin_dashboard QualityMonitorPluginframework#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.slicingExprs">SlicingExprs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#slicing_exprs QualityMonitorPluginframework#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#snapshot QualityMonitorPluginframework#snapshot}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.timeSeries">TimeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#time_series QualityMonitorPluginframework#time_series}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.warehouseId">WarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#warehouse_id QualityMonitorPluginframework#warehouse_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AssetsDir`<sup>Required</sup> <a name="AssetsDir" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.assetsDir"></a>

```csharp
public string AssetsDir { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#assets_dir QualityMonitorPluginframework#assets_dir}.

---

##### `OutputSchemaName`<sup>Required</sup> <a name="OutputSchemaName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.outputSchemaName"></a>

```csharp
public string OutputSchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_schema_name QualityMonitorPluginframework#output_schema_name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#table_name QualityMonitorPluginframework#table_name}.

---

##### `BaselineTableName`<sup>Optional</sup> <a name="BaselineTableName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.baselineTableName"></a>

```csharp
public string BaselineTableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#baseline_table_name QualityMonitorPluginframework#baseline_table_name}.

---

##### `CustomMetrics`<sup>Optional</sup> <a name="CustomMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.customMetrics"></a>

```csharp
public object CustomMetrics { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#custom_metrics QualityMonitorPluginframework#custom_metrics}.

---

##### `DataClassificationConfig`<sup>Optional</sup> <a name="DataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.dataClassificationConfig"></a>

```csharp
public QualityMonitorPluginframeworkDataClassificationConfig DataClassificationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig">QualityMonitorPluginframeworkDataClassificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#data_classification_config QualityMonitorPluginframework#data_classification_config}.

---

##### `InferenceLog`<sup>Optional</sup> <a name="InferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.inferenceLog"></a>

```csharp
public QualityMonitorPluginframeworkInferenceLog InferenceLog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog">QualityMonitorPluginframeworkInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#inference_log QualityMonitorPluginframework#inference_log}.

---

##### `LatestMonitorFailureMsg`<sup>Optional</sup> <a name="LatestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.latestMonitorFailureMsg"></a>

```csharp
public string LatestMonitorFailureMsg { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#latest_monitor_failure_msg QualityMonitorPluginframework#latest_monitor_failure_msg}.

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.notifications"></a>

```csharp
public QualityMonitorPluginframeworkNotifications Notifications { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications">QualityMonitorPluginframeworkNotifications</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#notifications QualityMonitorPluginframework#notifications}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.schedule"></a>

```csharp
public QualityMonitorPluginframeworkSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule">QualityMonitorPluginframeworkSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#schedule QualityMonitorPluginframework#schedule}.

---

##### `SkipBuiltinDashboard`<sup>Optional</sup> <a name="SkipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.skipBuiltinDashboard"></a>

```csharp
public object SkipBuiltinDashboard { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#skip_builtin_dashboard QualityMonitorPluginframework#skip_builtin_dashboard}.

---

##### `SlicingExprs`<sup>Optional</sup> <a name="SlicingExprs" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.slicingExprs"></a>

```csharp
public string[] SlicingExprs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#slicing_exprs QualityMonitorPluginframework#slicing_exprs}.

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.snapshot"></a>

```csharp
public QualityMonitorPluginframeworkSnapshot Snapshot { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot">QualityMonitorPluginframeworkSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#snapshot QualityMonitorPluginframework#snapshot}.

---

##### `TimeSeries`<sup>Optional</sup> <a name="TimeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.timeSeries"></a>

```csharp
public QualityMonitorPluginframeworkTimeSeries TimeSeries { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries">QualityMonitorPluginframeworkTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#time_series QualityMonitorPluginframework#time_series}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkConfig.property.warehouseId"></a>

```csharp
public string WarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#warehouse_id QualityMonitorPluginframework#warehouse_id}.

---

### QualityMonitorPluginframeworkCustomMetrics <a name="QualityMonitorPluginframeworkCustomMetrics" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkCustomMetrics {
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
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.definition">Definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#definition QualityMonitorPluginframework#definition}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.inputColumns">InputColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#input_columns QualityMonitorPluginframework#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#name QualityMonitorPluginframework#name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.outputDataType">OutputDataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_data_type QualityMonitorPluginframework#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#type QualityMonitorPluginframework#type}. |

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.definition"></a>

```csharp
public string Definition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#definition QualityMonitorPluginframework#definition}.

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.inputColumns"></a>

```csharp
public string[] InputColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#input_columns QualityMonitorPluginframework#input_columns}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#name QualityMonitorPluginframework#name}.

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.outputDataType"></a>

```csharp
public string OutputDataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#output_data_type QualityMonitorPluginframework#output_data_type}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetrics.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#type QualityMonitorPluginframework#type}.

---

### QualityMonitorPluginframeworkDataClassificationConfig <a name="QualityMonitorPluginframeworkDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkDataClassificationConfig {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#enabled QualityMonitorPluginframework#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#enabled QualityMonitorPluginframework#enabled}.

---

### QualityMonitorPluginframeworkInferenceLog <a name="QualityMonitorPluginframeworkInferenceLog" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkInferenceLog {
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
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.granularities">Granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.modelIdCol">ModelIdCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#model_id_col QualityMonitorPluginframework#model_id_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionCol">PredictionCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_col QualityMonitorPluginframework#prediction_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.problemType">ProblemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#problem_type QualityMonitorPluginframework#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.timestampCol">TimestampCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.labelCol">LabelCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#label_col QualityMonitorPluginframework#label_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionProbaCol">PredictionProbaCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_proba_col QualityMonitorPluginframework#prediction_proba_col}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.granularities"></a>

```csharp
public string[] Granularities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}.

---

##### `ModelIdCol`<sup>Required</sup> <a name="ModelIdCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.modelIdCol"></a>

```csharp
public string ModelIdCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#model_id_col QualityMonitorPluginframework#model_id_col}.

---

##### `PredictionCol`<sup>Required</sup> <a name="PredictionCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionCol"></a>

```csharp
public string PredictionCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_col QualityMonitorPluginframework#prediction_col}.

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.problemType"></a>

```csharp
public string ProblemType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#problem_type QualityMonitorPluginframework#problem_type}.

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.timestampCol"></a>

```csharp
public string TimestampCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}.

---

##### `LabelCol`<sup>Optional</sup> <a name="LabelCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.labelCol"></a>

```csharp
public string LabelCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#label_col QualityMonitorPluginframework#label_col}.

---

##### `PredictionProbaCol`<sup>Optional</sup> <a name="PredictionProbaCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLog.property.predictionProbaCol"></a>

```csharp
public string PredictionProbaCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#prediction_proba_col QualityMonitorPluginframework#prediction_proba_col}.

---

### QualityMonitorPluginframeworkNotifications <a name="QualityMonitorPluginframeworkNotifications" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkNotifications {
    QualityMonitorPluginframeworkNotificationsOnFailure OnFailure = null,
    QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected OnNewClassificationTagDetected = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_failure QualityMonitorPluginframework#on_failure}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onNewClassificationTagDetected">OnNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_new_classification_tag_detected QualityMonitorPluginframework#on_new_classification_tag_detected}. |

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onFailure"></a>

```csharp
public QualityMonitorPluginframeworkNotificationsOnFailure OnFailure { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_failure QualityMonitorPluginframework#on_failure}.

---

##### `OnNewClassificationTagDetected`<sup>Optional</sup> <a name="OnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotifications.property.onNewClassificationTagDetected"></a>

```csharp
public QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected OnNewClassificationTagDetected { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#on_new_classification_tag_detected QualityMonitorPluginframework#on_new_classification_tag_detected}.

---

### QualityMonitorPluginframeworkNotificationsOnFailure <a name="QualityMonitorPluginframeworkNotificationsOnFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkNotificationsOnFailure {
    string[] EmailAddresses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}. |

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}.

---

### QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected <a name="QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected {
    string[] EmailAddresses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}. |

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#email_addresses QualityMonitorPluginframework#email_addresses}.

---

### QualityMonitorPluginframeworkSchedule <a name="QualityMonitorPluginframeworkSchedule" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkSchedule {
    string QuartzCronExpression,
    string TimezoneId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#quartz_cron_expression QualityMonitorPluginframework#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.timezoneId">TimezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timezone_id QualityMonitorPluginframework#timezone_id}. |

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.quartzCronExpression"></a>

```csharp
public string QuartzCronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#quartz_cron_expression QualityMonitorPluginframework#quartz_cron_expression}.

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSchedule.property.timezoneId"></a>

```csharp
public string TimezoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timezone_id QualityMonitorPluginframework#timezone_id}.

---

### QualityMonitorPluginframeworkSnapshot <a name="QualityMonitorPluginframeworkSnapshot" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkSnapshot {

};
```


### QualityMonitorPluginframeworkTimeSeries <a name="QualityMonitorPluginframeworkTimeSeries" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkTimeSeries {
    string[] Granularities,
    string TimestampCol
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.granularities">Granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.timestampCol">TimestampCol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.granularities"></a>

```csharp
public string[] Granularities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#granularities QualityMonitorPluginframework#granularities}.

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeries.property.timestampCol"></a>

```csharp
public string TimestampCol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.52.0/docs/resources/quality_monitor_pluginframework#timestamp_col QualityMonitorPluginframework#timestamp_col}.

---

## Classes <a name="Classes" id="Classes"></a>

### QualityMonitorPluginframeworkCustomMetricsList <a name="QualityMonitorPluginframeworkCustomMetricsList" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkCustomMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.get"></a>

```csharp
private QualityMonitorPluginframeworkCustomMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QualityMonitorPluginframeworkCustomMetricsOutputReference <a name="QualityMonitorPluginframeworkCustomMetricsOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkCustomMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumnsInput">InputColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataTypeInput">OutputDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definition">Definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumns">InputColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataType">OutputDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definitionInput"></a>

```csharp
public string DefinitionInput { get; }
```

- *Type:* string

---

##### `InputColumnsInput`<sup>Optional</sup> <a name="InputColumnsInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumnsInput"></a>

```csharp
public string[] InputColumnsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputDataTypeInput`<sup>Optional</sup> <a name="OutputDataTypeInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```csharp
public string OutputDataTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.definition"></a>

```csharp
public string Definition { get; }
```

- *Type:* string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.inputColumns"></a>

```csharp
public string[] InputColumns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.outputDataType"></a>

```csharp
public string OutputDataType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkCustomMetricsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QualityMonitorPluginframeworkDataClassificationConfigOutputReference <a name="QualityMonitorPluginframeworkDataClassificationConfigOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkDataClassificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkDataClassificationConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QualityMonitorPluginframeworkInferenceLogOutputReference <a name="QualityMonitorPluginframeworkInferenceLogOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkInferenceLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetLabelCol">ResetLabelCol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetPredictionProbaCol">ResetPredictionProbaCol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelCol` <a name="ResetLabelCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetLabelCol"></a>

```csharp
private void ResetLabelCol()
```

##### `ResetPredictionProbaCol` <a name="ResetPredictionProbaCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.resetPredictionProbaCol"></a>

```csharp
private void ResetPredictionProbaCol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelColInput">LabelColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdColInput">ModelIdColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionColInput">PredictionColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaColInput">PredictionProbaColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemTypeInput">ProblemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampColInput">TimestampColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularities">Granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelCol">LabelCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdCol">ModelIdCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionCol">PredictionCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaCol">PredictionProbaCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemType">ProblemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampCol">TimestampCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularitiesInput"></a>

```csharp
public string[] GranularitiesInput { get; }
```

- *Type:* string[]

---

##### `LabelColInput`<sup>Optional</sup> <a name="LabelColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelColInput"></a>

```csharp
public string LabelColInput { get; }
```

- *Type:* string

---

##### `ModelIdColInput`<sup>Optional</sup> <a name="ModelIdColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdColInput"></a>

```csharp
public string ModelIdColInput { get; }
```

- *Type:* string

---

##### `PredictionColInput`<sup>Optional</sup> <a name="PredictionColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionColInput"></a>

```csharp
public string PredictionColInput { get; }
```

- *Type:* string

---

##### `PredictionProbaColInput`<sup>Optional</sup> <a name="PredictionProbaColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaColInput"></a>

```csharp
public string PredictionProbaColInput { get; }
```

- *Type:* string

---

##### `ProblemTypeInput`<sup>Optional</sup> <a name="ProblemTypeInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemTypeInput"></a>

```csharp
public string ProblemTypeInput { get; }
```

- *Type:* string

---

##### `TimestampColInput`<sup>Optional</sup> <a name="TimestampColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampColInput"></a>

```csharp
public string TimestampColInput { get; }
```

- *Type:* string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.granularities"></a>

```csharp
public string[] Granularities { get; }
```

- *Type:* string[]

---

##### `LabelCol`<sup>Required</sup> <a name="LabelCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.labelCol"></a>

```csharp
public string LabelCol { get; }
```

- *Type:* string

---

##### `ModelIdCol`<sup>Required</sup> <a name="ModelIdCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.modelIdCol"></a>

```csharp
public string ModelIdCol { get; }
```

- *Type:* string

---

##### `PredictionCol`<sup>Required</sup> <a name="PredictionCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionCol"></a>

```csharp
public string PredictionCol { get; }
```

- *Type:* string

---

##### `PredictionProbaCol`<sup>Required</sup> <a name="PredictionProbaCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.predictionProbaCol"></a>

```csharp
public string PredictionProbaCol { get; }
```

- *Type:* string

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.problemType"></a>

```csharp
public string ProblemType { get; }
```

- *Type:* string

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.timestampCol"></a>

```csharp
public string TimestampCol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkInferenceLogOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QualityMonitorPluginframeworkNotificationsOnFailureOutputReference <a name="QualityMonitorPluginframeworkNotificationsOnFailureOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkNotificationsOnFailureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.resetEmailAddresses"></a>

```csharp
private void ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddressesInput"></a>

```csharp
public string[] EmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference <a name="QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses"></a>

```csharp
private void ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput"></a>

```csharp
public string[] EmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QualityMonitorPluginframeworkNotificationsOutputReference <a name="QualityMonitorPluginframeworkNotificationsOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkNotificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnFailure">PutOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnNewClassificationTagDetected">PutOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnNewClassificationTagDetected">ResetOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnFailure"></a>

```csharp
private void PutOnFailure(QualityMonitorPluginframeworkNotificationsOnFailure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailure">QualityMonitorPluginframeworkNotificationsOnFailure</a>

---

##### `PutOnNewClassificationTagDetected` <a name="PutOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnNewClassificationTagDetected"></a>

```csharp
private void PutOnNewClassificationTagDetected(QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.putOnNewClassificationTagDetected.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetected</a>

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnFailure"></a>

```csharp
private void ResetOnFailure()
```

##### `ResetOnNewClassificationTagDetected` <a name="ResetOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.resetOnNewClassificationTagDetected"></a>

```csharp
private void ResetOnNewClassificationTagDetected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference">QualityMonitorPluginframeworkNotificationsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetected">OnNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetectedInput">OnNewClassificationTagDetectedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailure"></a>

```csharp
public QualityMonitorPluginframeworkNotificationsOnFailureOutputReference OnFailure { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnFailureOutputReference">QualityMonitorPluginframeworkNotificationsOnFailureOutputReference</a>

---

##### `OnNewClassificationTagDetected`<sup>Required</sup> <a name="OnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetected"></a>

```csharp
public QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference OnNewClassificationTagDetected { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference">QualityMonitorPluginframeworkNotificationsOnNewClassificationTagDetectedOutputReference</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onFailureInput"></a>

```csharp
public object OnFailureInput { get; }
```

- *Type:* object

---

##### `OnNewClassificationTagDetectedInput`<sup>Optional</sup> <a name="OnNewClassificationTagDetectedInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.onNewClassificationTagDetectedInput"></a>

```csharp
public object OnNewClassificationTagDetectedInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkNotificationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QualityMonitorPluginframeworkScheduleOutputReference <a name="QualityMonitorPluginframeworkScheduleOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.pauseStatus">PauseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpressionInput">QuartzCronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneId">TimezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PauseStatus`<sup>Required</sup> <a name="PauseStatus" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.pauseStatus"></a>

```csharp
public string PauseStatus { get; }
```

- *Type:* string

---

##### `QuartzCronExpressionInput`<sup>Optional</sup> <a name="QuartzCronExpressionInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpressionInput"></a>

```csharp
public string QuartzCronExpressionInput { get; }
```

- *Type:* string

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneIdInput"></a>

```csharp
public string TimezoneIdInput { get; }
```

- *Type:* string

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.quartzCronExpression"></a>

```csharp
public string QuartzCronExpression { get; }
```

- *Type:* string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.timezoneId"></a>

```csharp
public string TimezoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkScheduleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QualityMonitorPluginframeworkSnapshotOutputReference <a name="QualityMonitorPluginframeworkSnapshotOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkSnapshotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkSnapshotOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QualityMonitorPluginframeworkTimeSeriesOutputReference <a name="QualityMonitorPluginframeworkTimeSeriesOutputReference" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QualityMonitorPluginframeworkTimeSeriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampColInput">TimestampColInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularities">Granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampCol">TimestampCol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularitiesInput"></a>

```csharp
public string[] GranularitiesInput { get; }
```

- *Type:* string[]

---

##### `TimestampColInput`<sup>Optional</sup> <a name="TimestampColInput" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampColInput"></a>

```csharp
public string TimestampColInput { get; }
```

- *Type:* string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.granularities"></a>

```csharp
public string[] Granularities { get; }
```

- *Type:* string[]

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.timestampCol"></a>

```csharp
public string TimestampCol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitorPluginframework.QualityMonitorPluginframeworkTimeSeriesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



