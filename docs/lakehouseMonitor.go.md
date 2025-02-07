# `lakehouseMonitor` Submodule <a name="`lakehouseMonitor` Submodule" id="@cdktf/provider-databricks.lakehouseMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakehouseMonitor <a name="LakehouseMonitor" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor databricks_lakehouse_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.NewLakehouseMonitor(scope Construct, id *string, config LakehouseMonitorConfig) LakehouseMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig">LakehouseMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig">LakehouseMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putCustomMetrics">PutCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putDataClassificationConfig">PutDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog">PutInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putNotifications">PutNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSnapshot">PutSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeSeries">PutTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetBaselineTableName">ResetBaselineTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetCustomMetrics">ResetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetDataClassificationConfig">ResetDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetInferenceLog">ResetInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetLatestMonitorFailureMsg">ResetLatestMonitorFailureMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetNotifications">ResetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSkipBuiltinDashboard">ResetSkipBuiltinDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSlicingExprs">ResetSlicingExprs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeSeries">ResetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomMetrics` <a name="PutCustomMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putCustomMetrics"></a>

```go
func PutCustomMetrics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putCustomMetrics.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDataClassificationConfig` <a name="PutDataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putDataClassificationConfig"></a>

```go
func PutDataClassificationConfig(value LakehouseMonitorDataClassificationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putDataClassificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

---

##### `PutInferenceLog` <a name="PutInferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog"></a>

```go
func PutInferenceLog(value LakehouseMonitorInferenceLog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putInferenceLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

---

##### `PutNotifications` <a name="PutNotifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putNotifications"></a>

```go
func PutNotifications(value LakehouseMonitorNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSchedule"></a>

```go
func PutSchedule(value LakehouseMonitorSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

---

##### `PutSnapshot` <a name="PutSnapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSnapshot"></a>

```go
func PutSnapshot(value LakehouseMonitorSnapshot)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeouts"></a>

```go
func PutTimeouts(value LakehouseMonitorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>

---

##### `PutTimeSeries` <a name="PutTimeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeSeries"></a>

```go
func PutTimeSeries(value LakehouseMonitorTimeSeries)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.putTimeSeries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

---

##### `ResetBaselineTableName` <a name="ResetBaselineTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetBaselineTableName"></a>

```go
func ResetBaselineTableName()
```

##### `ResetCustomMetrics` <a name="ResetCustomMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetCustomMetrics"></a>

```go
func ResetCustomMetrics()
```

##### `ResetDataClassificationConfig` <a name="ResetDataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetDataClassificationConfig"></a>

```go
func ResetDataClassificationConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetId"></a>

```go
func ResetId()
```

##### `ResetInferenceLog` <a name="ResetInferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetInferenceLog"></a>

```go
func ResetInferenceLog()
```

##### `ResetLatestMonitorFailureMsg` <a name="ResetLatestMonitorFailureMsg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetLatestMonitorFailureMsg"></a>

```go
func ResetLatestMonitorFailureMsg()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetNotifications"></a>

```go
func ResetNotifications()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetSkipBuiltinDashboard` <a name="ResetSkipBuiltinDashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSkipBuiltinDashboard"></a>

```go
func ResetSkipBuiltinDashboard()
```

##### `ResetSlicingExprs` <a name="ResetSlicingExprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSlicingExprs"></a>

```go
func ResetSlicingExprs()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetSnapshot"></a>

```go
func ResetSnapshot()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeSeries` <a name="ResetTimeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetTimeSeries"></a>

```go
func ResetTimeSeries()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.resetWarehouseId"></a>

```go
func ResetWarehouseId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LakehouseMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.LakehouseMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.LakehouseMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.LakehouseMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.LakehouseMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LakehouseMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LakehouseMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LakehouseMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LakehouseMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetrics">CustomMetrics</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList">LakehouseMonitorCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dashboardId">DashboardId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfig">DataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference">LakehouseMonitorDataClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.driftMetricsTableName">DriftMetricsTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLog">InferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference">LakehouseMonitorInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.monitorVersion">MonitorVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notifications">Notifications</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference">LakehouseMonitorNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.profileMetricsTableName">ProfileMetricsTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference">LakehouseMonitorScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference">LakehouseMonitorSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference">LakehouseMonitorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeries">TimeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference">LakehouseMonitorTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDirInput">AssetsDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableNameInput">BaselineTableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetricsInput">CustomMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfigInput">DataClassificationConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLogInput">InferenceLogInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsgInput">LatestMonitorFailureMsgInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notificationsInput">NotificationsInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaNameInput">OutputSchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboardInput">SkipBuiltinDashboardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprsInput">SlicingExprsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshotInput">SnapshotInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeriesInput">TimeSeriesInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDir">AssetsDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableName">BaselineTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsg">LatestMonitorFailureMsg</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaName">OutputSchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprs">SlicingExprs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomMetrics`<sup>Required</sup> <a name="CustomMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetrics"></a>

```go
func CustomMetrics() LakehouseMonitorCustomMetricsList
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList">LakehouseMonitorCustomMetricsList</a>

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dashboardId"></a>

```go
func DashboardId() *string
```

- *Type:* *string

---

##### `DataClassificationConfig`<sup>Required</sup> <a name="DataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfig"></a>

```go
func DataClassificationConfig() LakehouseMonitorDataClassificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference">LakehouseMonitorDataClassificationConfigOutputReference</a>

---

##### `DriftMetricsTableName`<sup>Required</sup> <a name="DriftMetricsTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.driftMetricsTableName"></a>

```go
func DriftMetricsTableName() *string
```

- *Type:* *string

---

##### `InferenceLog`<sup>Required</sup> <a name="InferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLog"></a>

```go
func InferenceLog() LakehouseMonitorInferenceLogOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference">LakehouseMonitorInferenceLogOutputReference</a>

---

##### `MonitorVersion`<sup>Required</sup> <a name="MonitorVersion" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.monitorVersion"></a>

```go
func MonitorVersion() *string
```

- *Type:* *string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notifications"></a>

```go
func Notifications() LakehouseMonitorNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference">LakehouseMonitorNotificationsOutputReference</a>

---

##### `ProfileMetricsTableName`<sup>Required</sup> <a name="ProfileMetricsTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.profileMetricsTableName"></a>

```go
func ProfileMetricsTableName() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.schedule"></a>

```go
func Schedule() LakehouseMonitorScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference">LakehouseMonitorScheduleOutputReference</a>

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshot"></a>

```go
func Snapshot() LakehouseMonitorSnapshotOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference">LakehouseMonitorSnapshotOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeouts"></a>

```go
func Timeouts() LakehouseMonitorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference">LakehouseMonitorTimeoutsOutputReference</a>

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeries"></a>

```go
func TimeSeries() LakehouseMonitorTimeSeriesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference">LakehouseMonitorTimeSeriesOutputReference</a>

---

##### `AssetsDirInput`<sup>Optional</sup> <a name="AssetsDirInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDirInput"></a>

```go
func AssetsDirInput() *string
```

- *Type:* *string

---

##### `BaselineTableNameInput`<sup>Optional</sup> <a name="BaselineTableNameInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableNameInput"></a>

```go
func BaselineTableNameInput() *string
```

- *Type:* *string

---

##### `CustomMetricsInput`<sup>Optional</sup> <a name="CustomMetricsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.customMetricsInput"></a>

```go
func CustomMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `DataClassificationConfigInput`<sup>Optional</sup> <a name="DataClassificationConfigInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.dataClassificationConfigInput"></a>

```go
func DataClassificationConfigInput() LakehouseMonitorDataClassificationConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InferenceLogInput`<sup>Optional</sup> <a name="InferenceLogInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.inferenceLogInput"></a>

```go
func InferenceLogInput() LakehouseMonitorInferenceLog
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

---

##### `LatestMonitorFailureMsgInput`<sup>Optional</sup> <a name="LatestMonitorFailureMsgInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsgInput"></a>

```go
func LatestMonitorFailureMsgInput() *string
```

- *Type:* *string

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.notificationsInput"></a>

```go
func NotificationsInput() LakehouseMonitorNotifications
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

---

##### `OutputSchemaNameInput`<sup>Optional</sup> <a name="OutputSchemaNameInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaNameInput"></a>

```go
func OutputSchemaNameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.scheduleInput"></a>

```go
func ScheduleInput() LakehouseMonitorSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

---

##### `SkipBuiltinDashboardInput`<sup>Optional</sup> <a name="SkipBuiltinDashboardInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboardInput"></a>

```go
func SkipBuiltinDashboardInput() interface{}
```

- *Type:* interface{}

---

##### `SlicingExprsInput`<sup>Optional</sup> <a name="SlicingExprsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprsInput"></a>

```go
func SlicingExprsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.snapshotInput"></a>

```go
func SnapshotInput() LakehouseMonitorSnapshot
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeSeriesInput`<sup>Optional</sup> <a name="TimeSeriesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.timeSeriesInput"></a>

```go
func TimeSeriesInput() LakehouseMonitorTimeSeries
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseIdInput"></a>

```go
func WarehouseIdInput() *string
```

- *Type:* *string

---

##### `AssetsDir`<sup>Required</sup> <a name="AssetsDir" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.assetsDir"></a>

```go
func AssetsDir() *string
```

- *Type:* *string

---

##### `BaselineTableName`<sup>Required</sup> <a name="BaselineTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.baselineTableName"></a>

```go
func BaselineTableName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LatestMonitorFailureMsg`<sup>Required</sup> <a name="LatestMonitorFailureMsg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.latestMonitorFailureMsg"></a>

```go
func LatestMonitorFailureMsg() *string
```

- *Type:* *string

---

##### `OutputSchemaName`<sup>Required</sup> <a name="OutputSchemaName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.outputSchemaName"></a>

```go
func OutputSchemaName() *string
```

- *Type:* *string

---

##### `SkipBuiltinDashboard`<sup>Required</sup> <a name="SkipBuiltinDashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.skipBuiltinDashboard"></a>

```go
func SkipBuiltinDashboard() interface{}
```

- *Type:* interface{}

---

##### `SlicingExprs`<sup>Required</sup> <a name="SlicingExprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.slicingExprs"></a>

```go
func SlicingExprs() *[]*string
```

- *Type:* *[]*string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LakehouseMonitorConfig <a name="LakehouseMonitorConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

&lakehousemonitor.LakehouseMonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AssetsDir: *string,
	OutputSchemaName: *string,
	TableName: *string,
	BaselineTableName: *string,
	CustomMetrics: interface{},
	DataClassificationConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig,
	Id: *string,
	InferenceLog: github.com/cdktf/cdktf-provider-databricks-go/databricks.lakehouseMonitor.LakehouseMonitorInferenceLog,
	LatestMonitorFailureMsg: *string,
	Notifications: github.com/cdktf/cdktf-provider-databricks-go/databricks.lakehouseMonitor.LakehouseMonitorNotifications,
	Schedule: github.com/cdktf/cdktf-provider-databricks-go/databricks.lakehouseMonitor.LakehouseMonitorSchedule,
	SkipBuiltinDashboard: interface{},
	SlicingExprs: *[]*string,
	Snapshot: github.com/cdktf/cdktf-provider-databricks-go/databricks.lakehouseMonitor.LakehouseMonitorSnapshot,
	Timeouts: github.com/cdktf/cdktf-provider-databricks-go/databricks.lakehouseMonitor.LakehouseMonitorTimeouts,
	TimeSeries: github.com/cdktf/cdktf-provider-databricks-go/databricks.lakehouseMonitor.LakehouseMonitorTimeSeries,
	WarehouseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.assetsDir">AssetsDir</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#assets_dir LakehouseMonitor#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.outputSchemaName">OutputSchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#output_schema_name LakehouseMonitor#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#table_name LakehouseMonitor#table_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.baselineTableName">BaselineTableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#baseline_table_name LakehouseMonitor#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.customMetrics">CustomMetrics</a></code> | <code>interface{}</code> | custom_metrics block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dataClassificationConfig">DataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | data_classification_config block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#id LakehouseMonitor#id}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.inferenceLog">InferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | inference_log block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.latestMonitorFailureMsg">LatestMonitorFailureMsg</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#latest_monitor_failure_msg LakehouseMonitor#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.notifications">Notifications</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#skip_builtin_dashboard LakehouseMonitor#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.slicingExprs">SlicingExprs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#slicing_exprs LakehouseMonitor#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | snapshot block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeSeries">TimeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | time_series block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#warehouse_id LakehouseMonitor#warehouse_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssetsDir`<sup>Required</sup> <a name="AssetsDir" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.assetsDir"></a>

```go
AssetsDir *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#assets_dir LakehouseMonitor#assets_dir}.

---

##### `OutputSchemaName`<sup>Required</sup> <a name="OutputSchemaName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.outputSchemaName"></a>

```go
OutputSchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#output_schema_name LakehouseMonitor#output_schema_name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#table_name LakehouseMonitor#table_name}.

---

##### `BaselineTableName`<sup>Optional</sup> <a name="BaselineTableName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.baselineTableName"></a>

```go
BaselineTableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#baseline_table_name LakehouseMonitor#baseline_table_name}.

---

##### `CustomMetrics`<sup>Optional</sup> <a name="CustomMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.customMetrics"></a>

```go
CustomMetrics interface{}
```

- *Type:* interface{}

custom_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#custom_metrics LakehouseMonitor#custom_metrics}

---

##### `DataClassificationConfig`<sup>Optional</sup> <a name="DataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.dataClassificationConfig"></a>

```go
DataClassificationConfig LakehouseMonitorDataClassificationConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

data_classification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#data_classification_config LakehouseMonitor#data_classification_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#id LakehouseMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InferenceLog`<sup>Optional</sup> <a name="InferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.inferenceLog"></a>

```go
InferenceLog LakehouseMonitorInferenceLog
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

inference_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#inference_log LakehouseMonitor#inference_log}

---

##### `LatestMonitorFailureMsg`<sup>Optional</sup> <a name="LatestMonitorFailureMsg" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.latestMonitorFailureMsg"></a>

```go
LatestMonitorFailureMsg *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#latest_monitor_failure_msg LakehouseMonitor#latest_monitor_failure_msg}.

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.notifications"></a>

```go
Notifications LakehouseMonitorNotifications
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#notifications LakehouseMonitor#notifications}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.schedule"></a>

```go
Schedule LakehouseMonitorSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#schedule LakehouseMonitor#schedule}

---

##### `SkipBuiltinDashboard`<sup>Optional</sup> <a name="SkipBuiltinDashboard" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.skipBuiltinDashboard"></a>

```go
SkipBuiltinDashboard interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#skip_builtin_dashboard LakehouseMonitor#skip_builtin_dashboard}.

---

##### `SlicingExprs`<sup>Optional</sup> <a name="SlicingExprs" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.slicingExprs"></a>

```go
SlicingExprs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#slicing_exprs LakehouseMonitor#slicing_exprs}.

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.snapshot"></a>

```go
Snapshot LakehouseMonitorSnapshot
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

snapshot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#snapshot LakehouseMonitor#snapshot}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeouts"></a>

```go
Timeouts LakehouseMonitorTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts">LakehouseMonitorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#timeouts LakehouseMonitor#timeouts}

---

##### `TimeSeries`<sup>Optional</sup> <a name="TimeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.timeSeries"></a>

```go
TimeSeries LakehouseMonitorTimeSeries
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

time_series block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#time_series LakehouseMonitor#time_series}

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorConfig.property.warehouseId"></a>

```go
WarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#warehouse_id LakehouseMonitor#warehouse_id}.

---

### LakehouseMonitorCustomMetrics <a name="LakehouseMonitorCustomMetrics" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

&lakehousemonitor.LakehouseMonitorCustomMetrics {
	Definition: *string,
	InputColumns: *[]*string,
	Name: *string,
	OutputDataType: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.definition">Definition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#definition LakehouseMonitor#definition}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.inputColumns">InputColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#input_columns LakehouseMonitor#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#name LakehouseMonitor#name}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.outputDataType">OutputDataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#output_data_type LakehouseMonitor#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#type LakehouseMonitor#type}. |

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#definition LakehouseMonitor#definition}.

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.inputColumns"></a>

```go
InputColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#input_columns LakehouseMonitor#input_columns}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#name LakehouseMonitor#name}.

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.outputDataType"></a>

```go
OutputDataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#output_data_type LakehouseMonitor#output_data_type}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetrics.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#type LakehouseMonitor#type}.

---

### LakehouseMonitorDataClassificationConfig <a name="LakehouseMonitorDataClassificationConfig" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

&lakehousemonitor.LakehouseMonitorDataClassificationConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#enabled LakehouseMonitor#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#enabled LakehouseMonitor#enabled}.

---

### LakehouseMonitorInferenceLog <a name="LakehouseMonitorInferenceLog" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

&lakehousemonitor.LakehouseMonitorInferenceLog {
	Granularities: *[]*string,
	ModelIdCol: *string,
	PredictionCol: *string,
	ProblemType: *string,
	TimestampCol: *string,
	LabelCol: *string,
	PredictionProbaCol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.granularities">Granularities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.modelIdCol">ModelIdCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#model_id_col LakehouseMonitor#model_id_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionCol">PredictionCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#prediction_col LakehouseMonitor#prediction_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.problemType">ProblemType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#problem_type LakehouseMonitor#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.timestampCol">TimestampCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.labelCol">LabelCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#label_col LakehouseMonitor#label_col}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionProbaCol">PredictionProbaCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#prediction_proba_col LakehouseMonitor#prediction_proba_col}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.granularities"></a>

```go
Granularities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}.

---

##### `ModelIdCol`<sup>Required</sup> <a name="ModelIdCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.modelIdCol"></a>

```go
ModelIdCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#model_id_col LakehouseMonitor#model_id_col}.

---

##### `PredictionCol`<sup>Required</sup> <a name="PredictionCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionCol"></a>

```go
PredictionCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#prediction_col LakehouseMonitor#prediction_col}.

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.problemType"></a>

```go
ProblemType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#problem_type LakehouseMonitor#problem_type}.

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.timestampCol"></a>

```go
TimestampCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}.

---

##### `LabelCol`<sup>Optional</sup> <a name="LabelCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.labelCol"></a>

```go
LabelCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#label_col LakehouseMonitor#label_col}.

---

##### `PredictionProbaCol`<sup>Optional</sup> <a name="PredictionProbaCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog.property.predictionProbaCol"></a>

```go
PredictionProbaCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#prediction_proba_col LakehouseMonitor#prediction_proba_col}.

---

### LakehouseMonitorNotifications <a name="LakehouseMonitorNotifications" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

&lakehousemonitor.LakehouseMonitorNotifications {
	OnFailure: github.com/cdktf/cdktf-provider-databricks-go/databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure,
	OnNewClassificationTagDetected: github.com/cdktf/cdktf-provider-databricks-go/databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onNewClassificationTagDetected">OnNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a></code> | on_new_classification_tag_detected block. |

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onFailure"></a>

```go
OnFailure LakehouseMonitorNotificationsOnFailure
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#on_failure LakehouseMonitor#on_failure}

---

##### `OnNewClassificationTagDetected`<sup>Optional</sup> <a name="OnNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications.property.onNewClassificationTagDetected"></a>

```go
OnNewClassificationTagDetected LakehouseMonitorNotificationsOnNewClassificationTagDetected
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

on_new_classification_tag_detected block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#on_new_classification_tag_detected LakehouseMonitor#on_new_classification_tag_detected}

---

### LakehouseMonitorNotificationsOnFailure <a name="LakehouseMonitorNotificationsOnFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

&lakehousemonitor.LakehouseMonitorNotificationsOnFailure {
	EmailAddresses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}. |

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure.property.emailAddresses"></a>

```go
EmailAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}.

---

### LakehouseMonitorNotificationsOnNewClassificationTagDetected <a name="LakehouseMonitorNotificationsOnNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

&lakehousemonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected {
	EmailAddresses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}. |

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected.property.emailAddresses"></a>

```go
EmailAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#email_addresses LakehouseMonitor#email_addresses}.

---

### LakehouseMonitorSchedule <a name="LakehouseMonitorSchedule" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

&lakehousemonitor.LakehouseMonitorSchedule {
	QuartzCronExpression: *string,
	TimezoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#quartz_cron_expression LakehouseMonitor#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#timezone_id LakehouseMonitor#timezone_id}. |

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.quartzCronExpression"></a>

```go
QuartzCronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#quartz_cron_expression LakehouseMonitor#quartz_cron_expression}.

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule.property.timezoneId"></a>

```go
TimezoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#timezone_id LakehouseMonitor#timezone_id}.

---

### LakehouseMonitorSnapshot <a name="LakehouseMonitorSnapshot" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

&lakehousemonitor.LakehouseMonitorSnapshot {

}
```


### LakehouseMonitorTimeouts <a name="LakehouseMonitorTimeouts" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

&lakehousemonitor.LakehouseMonitorTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#create LakehouseMonitor#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#create LakehouseMonitor#create}.

---

### LakehouseMonitorTimeSeries <a name="LakehouseMonitorTimeSeries" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

&lakehousemonitor.LakehouseMonitorTimeSeries {
	Granularities: *[]*string,
	TimestampCol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.granularities">Granularities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.timestampCol">TimestampCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.granularities"></a>

```go
Granularities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#granularities LakehouseMonitor#granularities}.

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries.property.timestampCol"></a>

```go
TimestampCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/resources/lakehouse_monitor#timestamp_col LakehouseMonitor#timestamp_col}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakehouseMonitorCustomMetricsList <a name="LakehouseMonitorCustomMetricsList" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.NewLakehouseMonitorCustomMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LakehouseMonitorCustomMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.get"></a>

```go
func Get(index *f64) LakehouseMonitorCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakehouseMonitorCustomMetricsOutputReference <a name="LakehouseMonitorCustomMetricsOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.NewLakehouseMonitorCustomMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LakehouseMonitorCustomMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumnsInput">InputColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataTypeInput">OutputDataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumns">InputColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataType">OutputDataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `InputColumnsInput`<sup>Optional</sup> <a name="InputColumnsInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumnsInput"></a>

```go
func InputColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputDataTypeInput`<sup>Optional</sup> <a name="OutputDataTypeInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```go
func OutputDataTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.inputColumns"></a>

```go
func InputColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.outputDataType"></a>

```go
func OutputDataType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorCustomMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakehouseMonitorDataClassificationConfigOutputReference <a name="LakehouseMonitorDataClassificationConfigOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.NewLakehouseMonitorDataClassificationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakehouseMonitorDataClassificationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LakehouseMonitorDataClassificationConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorDataClassificationConfig">LakehouseMonitorDataClassificationConfig</a>

---


### LakehouseMonitorInferenceLogOutputReference <a name="LakehouseMonitorInferenceLogOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.NewLakehouseMonitorInferenceLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakehouseMonitorInferenceLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetLabelCol">ResetLabelCol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetPredictionProbaCol">ResetPredictionProbaCol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelCol` <a name="ResetLabelCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetLabelCol"></a>

```go
func ResetLabelCol()
```

##### `ResetPredictionProbaCol` <a name="ResetPredictionProbaCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.resetPredictionProbaCol"></a>

```go
func ResetPredictionProbaCol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelColInput">LabelColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdColInput">ModelIdColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionColInput">PredictionColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaColInput">PredictionProbaColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemTypeInput">ProblemTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampColInput">TimestampColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularities">Granularities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelCol">LabelCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdCol">ModelIdCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionCol">PredictionCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaCol">PredictionProbaCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemType">ProblemType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampCol">TimestampCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularitiesInput"></a>

```go
func GranularitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LabelColInput`<sup>Optional</sup> <a name="LabelColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelColInput"></a>

```go
func LabelColInput() *string
```

- *Type:* *string

---

##### `ModelIdColInput`<sup>Optional</sup> <a name="ModelIdColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdColInput"></a>

```go
func ModelIdColInput() *string
```

- *Type:* *string

---

##### `PredictionColInput`<sup>Optional</sup> <a name="PredictionColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionColInput"></a>

```go
func PredictionColInput() *string
```

- *Type:* *string

---

##### `PredictionProbaColInput`<sup>Optional</sup> <a name="PredictionProbaColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaColInput"></a>

```go
func PredictionProbaColInput() *string
```

- *Type:* *string

---

##### `ProblemTypeInput`<sup>Optional</sup> <a name="ProblemTypeInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemTypeInput"></a>

```go
func ProblemTypeInput() *string
```

- *Type:* *string

---

##### `TimestampColInput`<sup>Optional</sup> <a name="TimestampColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampColInput"></a>

```go
func TimestampColInput() *string
```

- *Type:* *string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.granularities"></a>

```go
func Granularities() *[]*string
```

- *Type:* *[]*string

---

##### `LabelCol`<sup>Required</sup> <a name="LabelCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.labelCol"></a>

```go
func LabelCol() *string
```

- *Type:* *string

---

##### `ModelIdCol`<sup>Required</sup> <a name="ModelIdCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.modelIdCol"></a>

```go
func ModelIdCol() *string
```

- *Type:* *string

---

##### `PredictionCol`<sup>Required</sup> <a name="PredictionCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionCol"></a>

```go
func PredictionCol() *string
```

- *Type:* *string

---

##### `PredictionProbaCol`<sup>Required</sup> <a name="PredictionProbaCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.predictionProbaCol"></a>

```go
func PredictionProbaCol() *string
```

- *Type:* *string

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.problemType"></a>

```go
func ProblemType() *string
```

- *Type:* *string

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.timestampCol"></a>

```go
func TimestampCol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLogOutputReference.property.internalValue"></a>

```go
func InternalValue() LakehouseMonitorInferenceLog
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorInferenceLog">LakehouseMonitorInferenceLog</a>

---


### LakehouseMonitorNotificationsOnFailureOutputReference <a name="LakehouseMonitorNotificationsOnFailureOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.NewLakehouseMonitorNotificationsOnFailureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakehouseMonitorNotificationsOnFailureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.resetEmailAddresses"></a>

```go
func ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddressesInput"></a>

```go
func EmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.emailAddresses"></a>

```go
func EmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference.property.internalValue"></a>

```go
func InternalValue() LakehouseMonitorNotificationsOnFailure
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

---


### LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference <a name="LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.NewLakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses"></a>

```go
func ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput"></a>

```go
func EmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses"></a>

```go
func EmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue"></a>

```go
func InternalValue() LakehouseMonitorNotificationsOnNewClassificationTagDetected
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

---


### LakehouseMonitorNotificationsOutputReference <a name="LakehouseMonitorNotificationsOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.NewLakehouseMonitorNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakehouseMonitorNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnFailure">PutOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnNewClassificationTagDetected">PutOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnNewClassificationTagDetected">ResetOnNewClassificationTagDetected</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnFailure"></a>

```go
func PutOnFailure(value LakehouseMonitorNotificationsOnFailure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

---

##### `PutOnNewClassificationTagDetected` <a name="PutOnNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnNewClassificationTagDetected"></a>

```go
func PutOnNewClassificationTagDetected(value LakehouseMonitorNotificationsOnNewClassificationTagDetected)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.putOnNewClassificationTagDetected.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnFailure"></a>

```go
func ResetOnFailure()
```

##### `ResetOnNewClassificationTagDetected` <a name="ResetOnNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.resetOnNewClassificationTagDetected"></a>

```go
func ResetOnNewClassificationTagDetected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference">LakehouseMonitorNotificationsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetected">OnNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference">LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetectedInput">OnNewClassificationTagDetectedInput</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailure"></a>

```go
func OnFailure() LakehouseMonitorNotificationsOnFailureOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailureOutputReference">LakehouseMonitorNotificationsOnFailureOutputReference</a>

---

##### `OnNewClassificationTagDetected`<sup>Required</sup> <a name="OnNewClassificationTagDetected" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetected"></a>

```go
func OnNewClassificationTagDetected() LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference">LakehouseMonitorNotificationsOnNewClassificationTagDetectedOutputReference</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onFailureInput"></a>

```go
func OnFailureInput() LakehouseMonitorNotificationsOnFailure
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnFailure">LakehouseMonitorNotificationsOnFailure</a>

---

##### `OnNewClassificationTagDetectedInput`<sup>Optional</sup> <a name="OnNewClassificationTagDetectedInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.onNewClassificationTagDetectedInput"></a>

```go
func OnNewClassificationTagDetectedInput() LakehouseMonitorNotificationsOnNewClassificationTagDetected
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOnNewClassificationTagDetected">LakehouseMonitorNotificationsOnNewClassificationTagDetected</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() LakehouseMonitorNotifications
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorNotifications">LakehouseMonitorNotifications</a>

---


### LakehouseMonitorScheduleOutputReference <a name="LakehouseMonitorScheduleOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.NewLakehouseMonitorScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakehouseMonitorScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.pauseStatus">PauseStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpressionInput">QuartzCronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PauseStatus`<sup>Required</sup> <a name="PauseStatus" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.pauseStatus"></a>

```go
func PauseStatus() *string
```

- *Type:* *string

---

##### `QuartzCronExpressionInput`<sup>Optional</sup> <a name="QuartzCronExpressionInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpressionInput"></a>

```go
func QuartzCronExpressionInput() *string
```

- *Type:* *string

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneIdInput"></a>

```go
func TimezoneIdInput() *string
```

- *Type:* *string

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.quartzCronExpression"></a>

```go
func QuartzCronExpression() *string
```

- *Type:* *string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.timezoneId"></a>

```go
func TimezoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() LakehouseMonitorSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSchedule">LakehouseMonitorSchedule</a>

---


### LakehouseMonitorSnapshotOutputReference <a name="LakehouseMonitorSnapshotOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.NewLakehouseMonitorSnapshotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakehouseMonitorSnapshotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshotOutputReference.property.internalValue"></a>

```go
func InternalValue() LakehouseMonitorSnapshot
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorSnapshot">LakehouseMonitorSnapshot</a>

---


### LakehouseMonitorTimeoutsOutputReference <a name="LakehouseMonitorTimeoutsOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.NewLakehouseMonitorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakehouseMonitorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LakehouseMonitorTimeSeriesOutputReference <a name="LakehouseMonitorTimeSeriesOutputReference" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/lakehousemonitor"

lakehousemonitor.NewLakehouseMonitorTimeSeriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LakehouseMonitorTimeSeriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampColInput">TimestampColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularities">Granularities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampCol">TimestampCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularitiesInput"></a>

```go
func GranularitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimestampColInput`<sup>Optional</sup> <a name="TimestampColInput" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampColInput"></a>

```go
func TimestampColInput() *string
```

- *Type:* *string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.granularities"></a>

```go
func Granularities() *[]*string
```

- *Type:* *[]*string

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.timestampCol"></a>

```go
func TimestampCol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeriesOutputReference.property.internalValue"></a>

```go
func InternalValue() LakehouseMonitorTimeSeries
```

- *Type:* <a href="#@cdktf/provider-databricks.lakehouseMonitor.LakehouseMonitorTimeSeries">LakehouseMonitorTimeSeries</a>

---



