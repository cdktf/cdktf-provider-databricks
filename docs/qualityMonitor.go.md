# `qualityMonitor` Submodule <a name="`qualityMonitor` Submodule" id="@cdktf/provider-databricks.qualityMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QualityMonitor <a name="QualityMonitor" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor databricks_quality_monitor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitor(scope Construct, id *string, config QualityMonitorConfig) QualityMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig">QualityMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetTimeSeries">ResetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomMetrics` <a name="PutCustomMetrics" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putCustomMetrics"></a>

```go
func PutCustomMetrics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putCustomMetrics.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDataClassificationConfig` <a name="PutDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putDataClassificationConfig"></a>

```go
func PutDataClassificationConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putDataClassificationConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInferenceLog` <a name="PutInferenceLog" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putInferenceLog"></a>

```go
func PutInferenceLog(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putInferenceLog.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNotifications` <a name="PutNotifications" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putNotifications"></a>

```go
func PutNotifications(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putNotifications.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putSchedule"></a>

```go
func PutSchedule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putSchedule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSnapshot` <a name="PutSnapshot" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putSnapshot"></a>

```go
func PutSnapshot(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putSnapshot.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeSeries` <a name="PutTimeSeries" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putTimeSeries"></a>

```go
func PutTimeSeries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.putTimeSeries.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBaselineTableName` <a name="ResetBaselineTableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetBaselineTableName"></a>

```go
func ResetBaselineTableName()
```

##### `ResetCustomMetrics` <a name="ResetCustomMetrics" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetCustomMetrics"></a>

```go
func ResetCustomMetrics()
```

##### `ResetDataClassificationConfig` <a name="ResetDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetDataClassificationConfig"></a>

```go
func ResetDataClassificationConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetId"></a>

```go
func ResetId()
```

##### `ResetInferenceLog` <a name="ResetInferenceLog" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetInferenceLog"></a>

```go
func ResetInferenceLog()
```

##### `ResetLatestMonitorFailureMsg` <a name="ResetLatestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetLatestMonitorFailureMsg"></a>

```go
func ResetLatestMonitorFailureMsg()
```

##### `ResetNotifications` <a name="ResetNotifications" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetNotifications"></a>

```go
func ResetNotifications()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetSkipBuiltinDashboard` <a name="ResetSkipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetSkipBuiltinDashboard"></a>

```go
func ResetSkipBuiltinDashboard()
```

##### `ResetSlicingExprs` <a name="ResetSlicingExprs" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetSlicingExprs"></a>

```go
func ResetSlicingExprs()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetSnapshot"></a>

```go
func ResetSnapshot()
```

##### `ResetTimeSeries` <a name="ResetTimeSeries" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetTimeSeries"></a>

```go
func ResetTimeSeries()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.resetWarehouseId"></a>

```go
func ResetWarehouseId()
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

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.QualityMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.QualityMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.QualityMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.QualityMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a QualityMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QualityMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QualityMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the QualityMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.customMetrics">CustomMetrics</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList">QualityMonitorCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dashboardId">DashboardId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dataClassificationConfig">DataClassificationConfig</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList">QualityMonitorDataClassificationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.driftMetricsTableName">DriftMetricsTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.inferenceLog">InferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList">QualityMonitorInferenceLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.monitorVersion">MonitorVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.notifications">Notifications</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList">QualityMonitorNotificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.profileMetricsTableName">ProfileMetricsTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList">QualityMonitorScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList">QualityMonitorSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.timeSeries">TimeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList">QualityMonitorTimeSeriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.assetsDirInput">AssetsDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.baselineTableNameInput">BaselineTableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.customMetricsInput">CustomMetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dataClassificationConfigInput">DataClassificationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.inferenceLogInput">InferenceLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.latestMonitorFailureMsgInput">LatestMonitorFailureMsgInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.notificationsInput">NotificationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.outputSchemaNameInput">OutputSchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.skipBuiltinDashboardInput">SkipBuiltinDashboardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.slicingExprsInput">SlicingExprsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.snapshotInput">SnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.timeSeriesInput">TimeSeriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.assetsDir">AssetsDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.baselineTableName">BaselineTableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.latestMonitorFailureMsg">LatestMonitorFailureMsg</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.outputSchemaName">OutputSchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.slicingExprs">SlicingExprs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomMetrics`<sup>Required</sup> <a name="CustomMetrics" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.customMetrics"></a>

```go
func CustomMetrics() QualityMonitorCustomMetricsList
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList">QualityMonitorCustomMetricsList</a>

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dashboardId"></a>

```go
func DashboardId() *string
```

- *Type:* *string

---

##### `DataClassificationConfig`<sup>Required</sup> <a name="DataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dataClassificationConfig"></a>

```go
func DataClassificationConfig() QualityMonitorDataClassificationConfigList
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList">QualityMonitorDataClassificationConfigList</a>

---

##### `DriftMetricsTableName`<sup>Required</sup> <a name="DriftMetricsTableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.driftMetricsTableName"></a>

```go
func DriftMetricsTableName() *string
```

- *Type:* *string

---

##### `InferenceLog`<sup>Required</sup> <a name="InferenceLog" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.inferenceLog"></a>

```go
func InferenceLog() QualityMonitorInferenceLogList
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList">QualityMonitorInferenceLogList</a>

---

##### `MonitorVersion`<sup>Required</sup> <a name="MonitorVersion" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.monitorVersion"></a>

```go
func MonitorVersion() *string
```

- *Type:* *string

---

##### `Notifications`<sup>Required</sup> <a name="Notifications" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.notifications"></a>

```go
func Notifications() QualityMonitorNotificationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList">QualityMonitorNotificationsList</a>

---

##### `ProfileMetricsTableName`<sup>Required</sup> <a name="ProfileMetricsTableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.profileMetricsTableName"></a>

```go
func ProfileMetricsTableName() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.schedule"></a>

```go
func Schedule() QualityMonitorScheduleList
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList">QualityMonitorScheduleList</a>

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.snapshot"></a>

```go
func Snapshot() QualityMonitorSnapshotList
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList">QualityMonitorSnapshotList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.timeSeries"></a>

```go
func TimeSeries() QualityMonitorTimeSeriesList
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList">QualityMonitorTimeSeriesList</a>

---

##### `AssetsDirInput`<sup>Optional</sup> <a name="AssetsDirInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.assetsDirInput"></a>

```go
func AssetsDirInput() *string
```

- *Type:* *string

---

##### `BaselineTableNameInput`<sup>Optional</sup> <a name="BaselineTableNameInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.baselineTableNameInput"></a>

```go
func BaselineTableNameInput() *string
```

- *Type:* *string

---

##### `CustomMetricsInput`<sup>Optional</sup> <a name="CustomMetricsInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.customMetricsInput"></a>

```go
func CustomMetricsInput() interface{}
```

- *Type:* interface{}

---

##### `DataClassificationConfigInput`<sup>Optional</sup> <a name="DataClassificationConfigInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.dataClassificationConfigInput"></a>

```go
func DataClassificationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InferenceLogInput`<sup>Optional</sup> <a name="InferenceLogInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.inferenceLogInput"></a>

```go
func InferenceLogInput() interface{}
```

- *Type:* interface{}

---

##### `LatestMonitorFailureMsgInput`<sup>Optional</sup> <a name="LatestMonitorFailureMsgInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.latestMonitorFailureMsgInput"></a>

```go
func LatestMonitorFailureMsgInput() *string
```

- *Type:* *string

---

##### `NotificationsInput`<sup>Optional</sup> <a name="NotificationsInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.notificationsInput"></a>

```go
func NotificationsInput() interface{}
```

- *Type:* interface{}

---

##### `OutputSchemaNameInput`<sup>Optional</sup> <a name="OutputSchemaNameInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.outputSchemaNameInput"></a>

```go
func OutputSchemaNameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `SkipBuiltinDashboardInput`<sup>Optional</sup> <a name="SkipBuiltinDashboardInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.skipBuiltinDashboardInput"></a>

```go
func SkipBuiltinDashboardInput() interface{}
```

- *Type:* interface{}

---

##### `SlicingExprsInput`<sup>Optional</sup> <a name="SlicingExprsInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.slicingExprsInput"></a>

```go
func SlicingExprsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.snapshotInput"></a>

```go
func SnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TimeSeriesInput`<sup>Optional</sup> <a name="TimeSeriesInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.timeSeriesInput"></a>

```go
func TimeSeriesInput() interface{}
```

- *Type:* interface{}

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.warehouseIdInput"></a>

```go
func WarehouseIdInput() *string
```

- *Type:* *string

---

##### `AssetsDir`<sup>Required</sup> <a name="AssetsDir" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.assetsDir"></a>

```go
func AssetsDir() *string
```

- *Type:* *string

---

##### `BaselineTableName`<sup>Required</sup> <a name="BaselineTableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.baselineTableName"></a>

```go
func BaselineTableName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LatestMonitorFailureMsg`<sup>Required</sup> <a name="LatestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.latestMonitorFailureMsg"></a>

```go
func LatestMonitorFailureMsg() *string
```

- *Type:* *string

---

##### `OutputSchemaName`<sup>Required</sup> <a name="OutputSchemaName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.outputSchemaName"></a>

```go
func OutputSchemaName() *string
```

- *Type:* *string

---

##### `SkipBuiltinDashboard`<sup>Required</sup> <a name="SkipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.skipBuiltinDashboard"></a>

```go
func SkipBuiltinDashboard() interface{}
```

- *Type:* interface{}

---

##### `SlicingExprs`<sup>Required</sup> <a name="SlicingExprs" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.slicingExprs"></a>

```go
func SlicingExprs() *[]*string
```

- *Type:* *[]*string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QualityMonitorConfig <a name="QualityMonitorConfig" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

&qualitymonitor.QualityMonitorConfig {
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
	DataClassificationConfig: interface{},
	Id: *string,
	InferenceLog: interface{},
	LatestMonitorFailureMsg: *string,
	Notifications: interface{},
	Schedule: interface{},
	SkipBuiltinDashboard: interface{},
	SlicingExprs: *[]*string,
	Snapshot: interface{},
	TimeSeries: interface{},
	WarehouseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.assetsDir">AssetsDir</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#assets_dir QualityMonitor#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.outputSchemaName">OutputSchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#output_schema_name QualityMonitor#output_schema_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.tableName">TableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#table_name QualityMonitor#table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.baselineTableName">BaselineTableName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#baseline_table_name QualityMonitor#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.customMetrics">CustomMetrics</a></code> | <code>interface{}</code> | custom_metrics block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.dataClassificationConfig">DataClassificationConfig</a></code> | <code>interface{}</code> | data_classification_config block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#id QualityMonitor#id}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.inferenceLog">InferenceLog</a></code> | <code>interface{}</code> | inference_log block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.latestMonitorFailureMsg">LatestMonitorFailureMsg</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#latest_monitor_failure_msg QualityMonitor#latest_monitor_failure_msg}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.notifications">Notifications</a></code> | <code>interface{}</code> | notifications block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.schedule">Schedule</a></code> | <code>interface{}</code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#skip_builtin_dashboard QualityMonitor#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.slicingExprs">SlicingExprs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#slicing_exprs QualityMonitor#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.snapshot">Snapshot</a></code> | <code>interface{}</code> | snapshot block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.timeSeries">TimeSeries</a></code> | <code>interface{}</code> | time_series block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#warehouse_id QualityMonitor#warehouse_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssetsDir`<sup>Required</sup> <a name="AssetsDir" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.assetsDir"></a>

```go
AssetsDir *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#assets_dir QualityMonitor#assets_dir}.

---

##### `OutputSchemaName`<sup>Required</sup> <a name="OutputSchemaName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.outputSchemaName"></a>

```go
OutputSchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#output_schema_name QualityMonitor#output_schema_name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#table_name QualityMonitor#table_name}.

---

##### `BaselineTableName`<sup>Optional</sup> <a name="BaselineTableName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.baselineTableName"></a>

```go
BaselineTableName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#baseline_table_name QualityMonitor#baseline_table_name}.

---

##### `CustomMetrics`<sup>Optional</sup> <a name="CustomMetrics" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.customMetrics"></a>

```go
CustomMetrics interface{}
```

- *Type:* interface{}

custom_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#custom_metrics QualityMonitor#custom_metrics}

---

##### `DataClassificationConfig`<sup>Optional</sup> <a name="DataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.dataClassificationConfig"></a>

```go
DataClassificationConfig interface{}
```

- *Type:* interface{}

data_classification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#data_classification_config QualityMonitor#data_classification_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#id QualityMonitor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InferenceLog`<sup>Optional</sup> <a name="InferenceLog" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.inferenceLog"></a>

```go
InferenceLog interface{}
```

- *Type:* interface{}

inference_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#inference_log QualityMonitor#inference_log}

---

##### `LatestMonitorFailureMsg`<sup>Optional</sup> <a name="LatestMonitorFailureMsg" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.latestMonitorFailureMsg"></a>

```go
LatestMonitorFailureMsg *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#latest_monitor_failure_msg QualityMonitor#latest_monitor_failure_msg}.

---

##### `Notifications`<sup>Optional</sup> <a name="Notifications" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.notifications"></a>

```go
Notifications interface{}
```

- *Type:* interface{}

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#notifications QualityMonitor#notifications}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.schedule"></a>

```go
Schedule interface{}
```

- *Type:* interface{}

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#schedule QualityMonitor#schedule}

---

##### `SkipBuiltinDashboard`<sup>Optional</sup> <a name="SkipBuiltinDashboard" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.skipBuiltinDashboard"></a>

```go
SkipBuiltinDashboard interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#skip_builtin_dashboard QualityMonitor#skip_builtin_dashboard}.

---

##### `SlicingExprs`<sup>Optional</sup> <a name="SlicingExprs" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.slicingExprs"></a>

```go
SlicingExprs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#slicing_exprs QualityMonitor#slicing_exprs}.

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.snapshot"></a>

```go
Snapshot interface{}
```

- *Type:* interface{}

snapshot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#snapshot QualityMonitor#snapshot}

---

##### `TimeSeries`<sup>Optional</sup> <a name="TimeSeries" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.timeSeries"></a>

```go
TimeSeries interface{}
```

- *Type:* interface{}

time_series block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#time_series QualityMonitor#time_series}

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorConfig.property.warehouseId"></a>

```go
WarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#warehouse_id QualityMonitor#warehouse_id}.

---

### QualityMonitorCustomMetrics <a name="QualityMonitorCustomMetrics" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

&qualitymonitor.QualityMonitorCustomMetrics {
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
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.definition">Definition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#definition QualityMonitor#definition}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.inputColumns">InputColumns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#input_columns QualityMonitor#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#name QualityMonitor#name}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.outputDataType">OutputDataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#output_data_type QualityMonitor#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#type QualityMonitor#type}. |

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.definition"></a>

```go
Definition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#definition QualityMonitor#definition}.

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.inputColumns"></a>

```go
InputColumns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#input_columns QualityMonitor#input_columns}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#name QualityMonitor#name}.

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.outputDataType"></a>

```go
OutputDataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#output_data_type QualityMonitor#output_data_type}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetrics.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#type QualityMonitor#type}.

---

### QualityMonitorDataClassificationConfig <a name="QualityMonitorDataClassificationConfig" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

&qualitymonitor.QualityMonitorDataClassificationConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#enabled QualityMonitor#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#enabled QualityMonitor#enabled}.

---

### QualityMonitorInferenceLog <a name="QualityMonitorInferenceLog" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

&qualitymonitor.QualityMonitorInferenceLog {
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
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.granularities">Granularities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#granularities QualityMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.modelIdCol">ModelIdCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#model_id_col QualityMonitor#model_id_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.predictionCol">PredictionCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#prediction_col QualityMonitor#prediction_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.problemType">ProblemType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#problem_type QualityMonitor#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.timestampCol">TimestampCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#timestamp_col QualityMonitor#timestamp_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.labelCol">LabelCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#label_col QualityMonitor#label_col}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.predictionProbaCol">PredictionProbaCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#prediction_proba_col QualityMonitor#prediction_proba_col}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.granularities"></a>

```go
Granularities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#granularities QualityMonitor#granularities}.

---

##### `ModelIdCol`<sup>Required</sup> <a name="ModelIdCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.modelIdCol"></a>

```go
ModelIdCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#model_id_col QualityMonitor#model_id_col}.

---

##### `PredictionCol`<sup>Required</sup> <a name="PredictionCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.predictionCol"></a>

```go
PredictionCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#prediction_col QualityMonitor#prediction_col}.

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.problemType"></a>

```go
ProblemType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#problem_type QualityMonitor#problem_type}.

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.timestampCol"></a>

```go
TimestampCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#timestamp_col QualityMonitor#timestamp_col}.

---

##### `LabelCol`<sup>Optional</sup> <a name="LabelCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.labelCol"></a>

```go
LabelCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#label_col QualityMonitor#label_col}.

---

##### `PredictionProbaCol`<sup>Optional</sup> <a name="PredictionProbaCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLog.property.predictionProbaCol"></a>

```go
PredictionProbaCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#prediction_proba_col QualityMonitor#prediction_proba_col}.

---

### QualityMonitorNotifications <a name="QualityMonitorNotifications" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

&qualitymonitor.QualityMonitorNotifications {
	OnFailure: interface{},
	OnNewClassificationTagDetected: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications.property.onFailure">OnFailure</a></code> | <code>interface{}</code> | on_failure block. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications.property.onNewClassificationTagDetected">OnNewClassificationTagDetected</a></code> | <code>interface{}</code> | on_new_classification_tag_detected block. |

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications.property.onFailure"></a>

```go
OnFailure interface{}
```

- *Type:* interface{}

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#on_failure QualityMonitor#on_failure}

---

##### `OnNewClassificationTagDetected`<sup>Optional</sup> <a name="OnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotifications.property.onNewClassificationTagDetected"></a>

```go
OnNewClassificationTagDetected interface{}
```

- *Type:* interface{}

on_new_classification_tag_detected block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#on_new_classification_tag_detected QualityMonitor#on_new_classification_tag_detected}

---

### QualityMonitorNotificationsOnFailure <a name="QualityMonitorNotificationsOnFailure" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

&qualitymonitor.QualityMonitorNotificationsOnFailure {
	EmailAddresses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#email_addresses QualityMonitor#email_addresses}. |

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailure.property.emailAddresses"></a>

```go
EmailAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#email_addresses QualityMonitor#email_addresses}.

---

### QualityMonitorNotificationsOnNewClassificationTagDetected <a name="QualityMonitorNotificationsOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

&qualitymonitor.QualityMonitorNotificationsOnNewClassificationTagDetected {
	EmailAddresses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#email_addresses QualityMonitor#email_addresses}. |

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetected.property.emailAddresses"></a>

```go
EmailAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#email_addresses QualityMonitor#email_addresses}.

---

### QualityMonitorSchedule <a name="QualityMonitorSchedule" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

&qualitymonitor.QualityMonitorSchedule {
	QuartzCronExpression: *string,
	TimezoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#quartz_cron_expression QualityMonitor#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#timezone_id QualityMonitor#timezone_id}. |

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule.property.quartzCronExpression"></a>

```go
QuartzCronExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#quartz_cron_expression QualityMonitor#quartz_cron_expression}.

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSchedule.property.timezoneId"></a>

```go
TimezoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#timezone_id QualityMonitor#timezone_id}.

---

### QualityMonitorSnapshot <a name="QualityMonitorSnapshot" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

&qualitymonitor.QualityMonitorSnapshot {

}
```


### QualityMonitorTimeSeries <a name="QualityMonitorTimeSeries" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

&qualitymonitor.QualityMonitorTimeSeries {
	Granularities: *[]*string,
	TimestampCol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries.property.granularities">Granularities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#granularities QualityMonitor#granularities}. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries.property.timestampCol">TimestampCol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#timestamp_col QualityMonitor#timestamp_col}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries.property.granularities"></a>

```go
Granularities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#granularities QualityMonitor#granularities}.

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeries.property.timestampCol"></a>

```go
TimestampCol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.82.0/docs/resources/quality_monitor#timestamp_col QualityMonitor#timestamp_col}.

---

## Classes <a name="Classes" id="Classes"></a>

### QualityMonitorCustomMetricsList <a name="QualityMonitorCustomMetricsList" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorCustomMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QualityMonitorCustomMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.get"></a>

```go
func Get(index *f64) QualityMonitorCustomMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorCustomMetricsOutputReference <a name="QualityMonitorCustomMetricsOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorCustomMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QualityMonitorCustomMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.inputColumnsInput">InputColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.outputDataTypeInput">OutputDataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.definition">Definition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.inputColumns">InputColumns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.outputDataType">OutputDataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.definitionInput"></a>

```go
func DefinitionInput() *string
```

- *Type:* *string

---

##### `InputColumnsInput`<sup>Optional</sup> <a name="InputColumnsInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.inputColumnsInput"></a>

```go
func InputColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputDataTypeInput`<sup>Optional</sup> <a name="OutputDataTypeInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```go
func OutputDataTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.definition"></a>

```go
func Definition() *string
```

- *Type:* *string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.inputColumns"></a>

```go
func InputColumns() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.outputDataType"></a>

```go
func OutputDataType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorCustomMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorDataClassificationConfigList <a name="QualityMonitorDataClassificationConfigList" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorDataClassificationConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QualityMonitorDataClassificationConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.get"></a>

```go
func Get(index *f64) QualityMonitorDataClassificationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorDataClassificationConfigOutputReference <a name="QualityMonitorDataClassificationConfigOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorDataClassificationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QualityMonitorDataClassificationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorDataClassificationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorInferenceLogList <a name="QualityMonitorInferenceLogList" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorInferenceLogList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QualityMonitorInferenceLogList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.get"></a>

```go
func Get(index *f64) QualityMonitorInferenceLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorInferenceLogOutputReference <a name="QualityMonitorInferenceLogOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorInferenceLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QualityMonitorInferenceLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelCol` <a name="ResetLabelCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.resetLabelCol"></a>

```go
func ResetLabelCol()
```

##### `ResetPredictionProbaCol` <a name="ResetPredictionProbaCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.resetPredictionProbaCol"></a>

```go
func ResetPredictionProbaCol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.labelColInput">LabelColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.modelIdColInput">ModelIdColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionColInput">PredictionColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionProbaColInput">PredictionProbaColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.problemTypeInput">ProblemTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.timestampColInput">TimestampColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.granularities">Granularities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.labelCol">LabelCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.modelIdCol">ModelIdCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionCol">PredictionCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionProbaCol">PredictionProbaCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.problemType">ProblemType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.timestampCol">TimestampCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.granularitiesInput"></a>

```go
func GranularitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LabelColInput`<sup>Optional</sup> <a name="LabelColInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.labelColInput"></a>

```go
func LabelColInput() *string
```

- *Type:* *string

---

##### `ModelIdColInput`<sup>Optional</sup> <a name="ModelIdColInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.modelIdColInput"></a>

```go
func ModelIdColInput() *string
```

- *Type:* *string

---

##### `PredictionColInput`<sup>Optional</sup> <a name="PredictionColInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionColInput"></a>

```go
func PredictionColInput() *string
```

- *Type:* *string

---

##### `PredictionProbaColInput`<sup>Optional</sup> <a name="PredictionProbaColInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionProbaColInput"></a>

```go
func PredictionProbaColInput() *string
```

- *Type:* *string

---

##### `ProblemTypeInput`<sup>Optional</sup> <a name="ProblemTypeInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.problemTypeInput"></a>

```go
func ProblemTypeInput() *string
```

- *Type:* *string

---

##### `TimestampColInput`<sup>Optional</sup> <a name="TimestampColInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.timestampColInput"></a>

```go
func TimestampColInput() *string
```

- *Type:* *string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.granularities"></a>

```go
func Granularities() *[]*string
```

- *Type:* *[]*string

---

##### `LabelCol`<sup>Required</sup> <a name="LabelCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.labelCol"></a>

```go
func LabelCol() *string
```

- *Type:* *string

---

##### `ModelIdCol`<sup>Required</sup> <a name="ModelIdCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.modelIdCol"></a>

```go
func ModelIdCol() *string
```

- *Type:* *string

---

##### `PredictionCol`<sup>Required</sup> <a name="PredictionCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionCol"></a>

```go
func PredictionCol() *string
```

- *Type:* *string

---

##### `PredictionProbaCol`<sup>Required</sup> <a name="PredictionProbaCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.predictionProbaCol"></a>

```go
func PredictionProbaCol() *string
```

- *Type:* *string

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.problemType"></a>

```go
func ProblemType() *string
```

- *Type:* *string

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.timestampCol"></a>

```go
func TimestampCol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorInferenceLogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorNotificationsList <a name="QualityMonitorNotificationsList" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorNotificationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QualityMonitorNotificationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.get"></a>

```go
func Get(index *f64) QualityMonitorNotificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorNotificationsOnFailureList <a name="QualityMonitorNotificationsOnFailureList" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorNotificationsOnFailureList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QualityMonitorNotificationsOnFailureList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.get"></a>

```go
func Get(index *f64) QualityMonitorNotificationsOnFailureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorNotificationsOnFailureOutputReference <a name="QualityMonitorNotificationsOnFailureOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorNotificationsOnFailureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QualityMonitorNotificationsOnFailureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.resetEmailAddresses"></a>

```go
func ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.emailAddressesInput"></a>

```go
func EmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.emailAddresses"></a>

```go
func EmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorNotificationsOnNewClassificationTagDetectedList <a name="QualityMonitorNotificationsOnNewClassificationTagDetectedList" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorNotificationsOnNewClassificationTagDetectedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QualityMonitorNotificationsOnNewClassificationTagDetectedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.get"></a>

```go
func Get(index *f64) QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference <a name="QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.resetEmailAddresses"></a>

```go
func ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddressesInput"></a>

```go
func EmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.emailAddresses"></a>

```go
func EmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorNotificationsOutputReference <a name="QualityMonitorNotificationsOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QualityMonitorNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.putOnFailure"></a>

```go
func PutOnFailure(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOnNewClassificationTagDetected` <a name="PutOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.putOnNewClassificationTagDetected"></a>

```go
func PutOnNewClassificationTagDetected(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.putOnNewClassificationTagDetected.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.resetOnFailure"></a>

```go
func ResetOnFailure()
```

##### `ResetOnNewClassificationTagDetected` <a name="ResetOnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.resetOnNewClassificationTagDetected"></a>

```go
func ResetOnNewClassificationTagDetected()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList">QualityMonitorNotificationsOnFailureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onNewClassificationTagDetected">OnNewClassificationTagDetected</a></code> | <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList">QualityMonitorNotificationsOnNewClassificationTagDetectedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onNewClassificationTagDetectedInput">OnNewClassificationTagDetectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onFailure"></a>

```go
func OnFailure() QualityMonitorNotificationsOnFailureList
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnFailureList">QualityMonitorNotificationsOnFailureList</a>

---

##### `OnNewClassificationTagDetected`<sup>Required</sup> <a name="OnNewClassificationTagDetected" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onNewClassificationTagDetected"></a>

```go
func OnNewClassificationTagDetected() QualityMonitorNotificationsOnNewClassificationTagDetectedList
```

- *Type:* <a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOnNewClassificationTagDetectedList">QualityMonitorNotificationsOnNewClassificationTagDetectedList</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onFailureInput"></a>

```go
func OnFailureInput() interface{}
```

- *Type:* interface{}

---

##### `OnNewClassificationTagDetectedInput`<sup>Optional</sup> <a name="OnNewClassificationTagDetectedInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.onNewClassificationTagDetectedInput"></a>

```go
func OnNewClassificationTagDetectedInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorScheduleList <a name="QualityMonitorScheduleList" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QualityMonitorScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.get"></a>

```go
func Get(index *f64) QualityMonitorScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorScheduleOutputReference <a name="QualityMonitorScheduleOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QualityMonitorScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.pauseStatus">PauseStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.quartzCronExpressionInput">QuartzCronExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PauseStatus`<sup>Required</sup> <a name="PauseStatus" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.pauseStatus"></a>

```go
func PauseStatus() *string
```

- *Type:* *string

---

##### `QuartzCronExpressionInput`<sup>Optional</sup> <a name="QuartzCronExpressionInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.quartzCronExpressionInput"></a>

```go
func QuartzCronExpressionInput() *string
```

- *Type:* *string

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.timezoneIdInput"></a>

```go
func TimezoneIdInput() *string
```

- *Type:* *string

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.quartzCronExpression"></a>

```go
func QuartzCronExpression() *string
```

- *Type:* *string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.timezoneId"></a>

```go
func TimezoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorSnapshotList <a name="QualityMonitorSnapshotList" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorSnapshotList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QualityMonitorSnapshotList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.get"></a>

```go
func Get(index *f64) QualityMonitorSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorSnapshotOutputReference <a name="QualityMonitorSnapshotOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorSnapshotOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QualityMonitorSnapshotOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorSnapshotOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorTimeSeriesList <a name="QualityMonitorTimeSeriesList" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorTimeSeriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QualityMonitorTimeSeriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.get"></a>

```go
func Get(index *f64) QualityMonitorTimeSeriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QualityMonitorTimeSeriesOutputReference <a name="QualityMonitorTimeSeriesOutputReference" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/qualitymonitor"

qualitymonitor.NewQualityMonitorTimeSeriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QualityMonitorTimeSeriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.timestampColInput">TimestampColInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.granularities">Granularities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.timestampCol">TimestampCol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.granularitiesInput"></a>

```go
func GranularitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimestampColInput`<sup>Optional</sup> <a name="TimestampColInput" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.timestampColInput"></a>

```go
func TimestampColInput() *string
```

- *Type:* *string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.granularities"></a>

```go
func Granularities() *[]*string
```

- *Type:* *[]*string

---

##### `TimestampCol`<sup>Required</sup> <a name="TimestampCol" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.timestampCol"></a>

```go
func TimestampCol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.qualityMonitor.QualityMonitorTimeSeriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



