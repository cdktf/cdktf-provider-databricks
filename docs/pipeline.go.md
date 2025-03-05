# `pipeline` Submodule <a name="`pipeline` Submodule" id="@cdktf/provider-databricks.pipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pipeline <a name="Pipeline" id="@cdktf/provider-databricks.pipeline.Pipeline"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline databricks_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipeline(scope Construct, id *string, config PipelineConfig) Pipeline
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig">PipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineConfig">PipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putCluster">PutCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putDeployment">PutDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putGatewayDefinition">PutGatewayDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putIngestionDefinition">PutIngestionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putLatestUpdates">PutLatestUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putLibrary">PutLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putRestartWindow">PutRestartWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putRunAs">PutRunAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetAllowDuplicateNames">ResetAllowDuplicateNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetBudgetPolicyId">ResetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetCause">ResetCause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetCreatorUserName">ResetCreatorUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetDeployment">ResetDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetDevelopment">ResetDevelopment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetExpectedLastModified">ResetExpectedLastModified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetGatewayDefinition">ResetGatewayDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetHealth">ResetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetIngestionDefinition">ResetIngestionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetLastModified">ResetLastModified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetLatestUpdates">ResetLatestUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetLibrary">ResetLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetPhoton">ResetPhoton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetRestartWindow">ResetRestartWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetRunAs">ResetRunAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetServerless">ResetServerless</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetTrigger">ResetTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.Pipeline.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.pipeline.Pipeline.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.pipeline.Pipeline.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.pipeline.Pipeline.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.pipeline.Pipeline.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.pipeline.Pipeline.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.pipeline.Pipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.pipeline.Pipeline.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.pipeline.Pipeline.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.pipeline.Pipeline.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.pipeline.Pipeline.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.pipeline.Pipeline.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.pipeline.Pipeline.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.Pipeline.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.pipeline.Pipeline.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.pipeline.Pipeline.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCluster` <a name="PutCluster" id="@cdktf/provider-databricks.pipeline.Pipeline.putCluster"></a>

```go
func PutCluster(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putCluster.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeployment` <a name="PutDeployment" id="@cdktf/provider-databricks.pipeline.Pipeline.putDeployment"></a>

```go
func PutDeployment(value PipelineDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a>

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-databricks.pipeline.Pipeline.putFilters"></a>

```go
func PutFilters(value PipelineFilters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---

##### `PutGatewayDefinition` <a name="PutGatewayDefinition" id="@cdktf/provider-databricks.pipeline.Pipeline.putGatewayDefinition"></a>

```go
func PutGatewayDefinition(value PipelineGatewayDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putGatewayDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition">PipelineGatewayDefinition</a>

---

##### `PutIngestionDefinition` <a name="PutIngestionDefinition" id="@cdktf/provider-databricks.pipeline.Pipeline.putIngestionDefinition"></a>

```go
func PutIngestionDefinition(value PipelineIngestionDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putIngestionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition">PipelineIngestionDefinition</a>

---

##### `PutLatestUpdates` <a name="PutLatestUpdates" id="@cdktf/provider-databricks.pipeline.Pipeline.putLatestUpdates"></a>

```go
func PutLatestUpdates(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putLatestUpdates.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLibrary` <a name="PutLibrary" id="@cdktf/provider-databricks.pipeline.Pipeline.putLibrary"></a>

```go
func PutLibrary(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putLibrary.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-databricks.pipeline.Pipeline.putNotification"></a>

```go
func PutNotification(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putNotification.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRestartWindow` <a name="PutRestartWindow" id="@cdktf/provider-databricks.pipeline.Pipeline.putRestartWindow"></a>

```go
func PutRestartWindow(value PipelineRestartWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putRestartWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindow">PipelineRestartWindow</a>

---

##### `PutRunAs` <a name="PutRunAs" id="@cdktf/provider-databricks.pipeline.Pipeline.putRunAs"></a>

```go
func PutRunAs(value PipelineRunAs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putRunAs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineRunAs">PipelineRunAs</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts"></a>

```go
func PutTimeouts(value PipelineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>

---

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-databricks.pipeline.Pipeline.putTrigger"></a>

```go
func PutTrigger(value PipelineTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.Pipeline.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTrigger">PipelineTrigger</a>

---

##### `ResetAllowDuplicateNames` <a name="ResetAllowDuplicateNames" id="@cdktf/provider-databricks.pipeline.Pipeline.resetAllowDuplicateNames"></a>

```go
func ResetAllowDuplicateNames()
```

##### `ResetBudgetPolicyId` <a name="ResetBudgetPolicyId" id="@cdktf/provider-databricks.pipeline.Pipeline.resetBudgetPolicyId"></a>

```go
func ResetBudgetPolicyId()
```

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-databricks.pipeline.Pipeline.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetCause` <a name="ResetCause" id="@cdktf/provider-databricks.pipeline.Pipeline.resetCause"></a>

```go
func ResetCause()
```

##### `ResetChannel` <a name="ResetChannel" id="@cdktf/provider-databricks.pipeline.Pipeline.resetChannel"></a>

```go
func ResetChannel()
```

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-databricks.pipeline.Pipeline.resetCluster"></a>

```go
func ResetCluster()
```

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-databricks.pipeline.Pipeline.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-databricks.pipeline.Pipeline.resetConfiguration"></a>

```go
func ResetConfiguration()
```

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktf/provider-databricks.pipeline.Pipeline.resetContinuous"></a>

```go
func ResetContinuous()
```

##### `ResetCreatorUserName` <a name="ResetCreatorUserName" id="@cdktf/provider-databricks.pipeline.Pipeline.resetCreatorUserName"></a>

```go
func ResetCreatorUserName()
```

##### `ResetDeployment` <a name="ResetDeployment" id="@cdktf/provider-databricks.pipeline.Pipeline.resetDeployment"></a>

```go
func ResetDeployment()
```

##### `ResetDevelopment` <a name="ResetDevelopment" id="@cdktf/provider-databricks.pipeline.Pipeline.resetDevelopment"></a>

```go
func ResetDevelopment()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktf/provider-databricks.pipeline.Pipeline.resetEdition"></a>

```go
func ResetEdition()
```

##### `ResetExpectedLastModified` <a name="ResetExpectedLastModified" id="@cdktf/provider-databricks.pipeline.Pipeline.resetExpectedLastModified"></a>

```go
func ResetExpectedLastModified()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-databricks.pipeline.Pipeline.resetFilters"></a>

```go
func ResetFilters()
```

##### `ResetGatewayDefinition` <a name="ResetGatewayDefinition" id="@cdktf/provider-databricks.pipeline.Pipeline.resetGatewayDefinition"></a>

```go
func ResetGatewayDefinition()
```

##### `ResetHealth` <a name="ResetHealth" id="@cdktf/provider-databricks.pipeline.Pipeline.resetHealth"></a>

```go
func ResetHealth()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.pipeline.Pipeline.resetId"></a>

```go
func ResetId()
```

##### `ResetIngestionDefinition` <a name="ResetIngestionDefinition" id="@cdktf/provider-databricks.pipeline.Pipeline.resetIngestionDefinition"></a>

```go
func ResetIngestionDefinition()
```

##### `ResetLastModified` <a name="ResetLastModified" id="@cdktf/provider-databricks.pipeline.Pipeline.resetLastModified"></a>

```go
func ResetLastModified()
```

##### `ResetLatestUpdates` <a name="ResetLatestUpdates" id="@cdktf/provider-databricks.pipeline.Pipeline.resetLatestUpdates"></a>

```go
func ResetLatestUpdates()
```

##### `ResetLibrary` <a name="ResetLibrary" id="@cdktf/provider-databricks.pipeline.Pipeline.resetLibrary"></a>

```go
func ResetLibrary()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.pipeline.Pipeline.resetName"></a>

```go
func ResetName()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-databricks.pipeline.Pipeline.resetNotification"></a>

```go
func ResetNotification()
```

##### `ResetPhoton` <a name="ResetPhoton" id="@cdktf/provider-databricks.pipeline.Pipeline.resetPhoton"></a>

```go
func ResetPhoton()
```

##### `ResetRestartWindow` <a name="ResetRestartWindow" id="@cdktf/provider-databricks.pipeline.Pipeline.resetRestartWindow"></a>

```go
func ResetRestartWindow()
```

##### `ResetRunAs` <a name="ResetRunAs" id="@cdktf/provider-databricks.pipeline.Pipeline.resetRunAs"></a>

```go
func ResetRunAs()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-databricks.pipeline.Pipeline.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetServerless` <a name="ResetServerless" id="@cdktf/provider-databricks.pipeline.Pipeline.resetServerless"></a>

```go
func ResetServerless()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-databricks.pipeline.Pipeline.resetState"></a>

```go
func ResetState()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-databricks.pipeline.Pipeline.resetStorage"></a>

```go
func ResetStorage()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-databricks.pipeline.Pipeline.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTrigger` <a name="ResetTrigger" id="@cdktf/provider-databricks.pipeline.Pipeline.resetTrigger"></a>

```go
func ResetTrigger()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-databricks.pipeline.Pipeline.resetUrl"></a>

```go
func ResetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.pipeline.Pipeline.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.Pipeline_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.pipeline.Pipeline.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.Pipeline_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.Pipeline_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.Pipeline_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Pipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Pipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Pipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.cluster">Cluster</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList">PipelineClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference">PipelineDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference">PipelineFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.gatewayDefinition">GatewayDefinition</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference">PipelineGatewayDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.ingestionDefinition">IngestionDefinition</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference">PipelineIngestionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.latestUpdates">LatestUpdates</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList">PipelineLatestUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.library">Library</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList">PipelineLibraryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList">PipelineNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.restartWindow">RestartWindow</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference">PipelineRestartWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.runAs">RunAs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference">PipelineRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.runAsUserName">RunAsUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference">PipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference">PipelineTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNamesInput">AllowDuplicateNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.budgetPolicyIdInput">BudgetPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.causeInput">CauseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.channelInput">ChannelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.clusterInput">ClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.configurationInput">ConfigurationInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.continuousInput">ContinuousInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.creatorUserNameInput">CreatorUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.deploymentInput">DeploymentInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.developmentInput">DevelopmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.editionInput">EditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.expectedLastModifiedInput">ExpectedLastModifiedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.gatewayDefinitionInput">GatewayDefinitionInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition">PipelineGatewayDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.healthInput">HealthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.ingestionDefinitionInput">IngestionDefinitionInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition">PipelineIngestionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.lastModifiedInput">LastModifiedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.latestUpdatesInput">LatestUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.libraryInput">LibraryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.notificationInput">NotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.photonInput">PhotonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.restartWindowInput">RestartWindowInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindow">PipelineRestartWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.runAsInput">RunAsInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAs">PipelineRunAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.serverlessInput">ServerlessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.storageInput">StorageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTrigger">PipelineTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNames">AllowDuplicateNames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.cause">Cause</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.channel">Channel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.configuration">Configuration</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.continuous">Continuous</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.creatorUserName">CreatorUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.development">Development</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.expectedLastModified">ExpectedLastModified</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.health">Health</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.lastModified">LastModified</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.photon">Photon</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.serverless">Serverless</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.storage">Storage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.pipeline.Pipeline.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.pipeline.Pipeline.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.Pipeline.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.pipeline.Pipeline.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.pipeline.Pipeline.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.pipeline.Pipeline.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.pipeline.Pipeline.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.pipeline.Pipeline.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.pipeline.Pipeline.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.pipeline.Pipeline.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.pipeline.Pipeline.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-databricks.pipeline.Pipeline.property.cluster"></a>

```go
func Cluster() PipelineClusterList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList">PipelineClusterList</a>

---

##### `Deployment`<sup>Required</sup> <a name="Deployment" id="@cdktf/provider-databricks.pipeline.Pipeline.property.deployment"></a>

```go
func Deployment() PipelineDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference">PipelineDeploymentOutputReference</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-databricks.pipeline.Pipeline.property.filters"></a>

```go
func Filters() PipelineFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference">PipelineFiltersOutputReference</a>

---

##### `GatewayDefinition`<sup>Required</sup> <a name="GatewayDefinition" id="@cdktf/provider-databricks.pipeline.Pipeline.property.gatewayDefinition"></a>

```go
func GatewayDefinition() PipelineGatewayDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference">PipelineGatewayDefinitionOutputReference</a>

---

##### `IngestionDefinition`<sup>Required</sup> <a name="IngestionDefinition" id="@cdktf/provider-databricks.pipeline.Pipeline.property.ingestionDefinition"></a>

```go
func IngestionDefinition() PipelineIngestionDefinitionOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference">PipelineIngestionDefinitionOutputReference</a>

---

##### `LatestUpdates`<sup>Required</sup> <a name="LatestUpdates" id="@cdktf/provider-databricks.pipeline.Pipeline.property.latestUpdates"></a>

```go
func LatestUpdates() PipelineLatestUpdatesList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList">PipelineLatestUpdatesList</a>

---

##### `Library`<sup>Required</sup> <a name="Library" id="@cdktf/provider-databricks.pipeline.Pipeline.property.library"></a>

```go
func Library() PipelineLibraryList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList">PipelineLibraryList</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-databricks.pipeline.Pipeline.property.notification"></a>

```go
func Notification() PipelineNotificationList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList">PipelineNotificationList</a>

---

##### `RestartWindow`<sup>Required</sup> <a name="RestartWindow" id="@cdktf/provider-databricks.pipeline.Pipeline.property.restartWindow"></a>

```go
func RestartWindow() PipelineRestartWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference">PipelineRestartWindowOutputReference</a>

---

##### `RunAs`<sup>Required</sup> <a name="RunAs" id="@cdktf/provider-databricks.pipeline.Pipeline.property.runAs"></a>

```go
func RunAs() PipelineRunAsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference">PipelineRunAsOutputReference</a>

---

##### `RunAsUserName`<sup>Required</sup> <a name="RunAsUserName" id="@cdktf/provider-databricks.pipeline.Pipeline.property.runAsUserName"></a>

```go
func RunAsUserName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.property.timeouts"></a>

```go
func Timeouts() PipelineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference">PipelineTimeoutsOutputReference</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-databricks.pipeline.Pipeline.property.trigger"></a>

```go
func Trigger() PipelineTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference">PipelineTriggerOutputReference</a>

---

##### `AllowDuplicateNamesInput`<sup>Optional</sup> <a name="AllowDuplicateNamesInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNamesInput"></a>

```go
func AllowDuplicateNamesInput() interface{}
```

- *Type:* interface{}

---

##### `BudgetPolicyIdInput`<sup>Optional</sup> <a name="BudgetPolicyIdInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.budgetPolicyIdInput"></a>

```go
func BudgetPolicyIdInput() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `CauseInput`<sup>Optional</sup> <a name="CauseInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.causeInput"></a>

```go
func CauseInput() *string
```

- *Type:* *string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.channelInput"></a>

```go
func ChannelInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.clusterInput"></a>

```go
func ClusterInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.configurationInput"></a>

```go
func ConfigurationInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.continuousInput"></a>

```go
func ContinuousInput() interface{}
```

- *Type:* interface{}

---

##### `CreatorUserNameInput`<sup>Optional</sup> <a name="CreatorUserNameInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.creatorUserNameInput"></a>

```go
func CreatorUserNameInput() *string
```

- *Type:* *string

---

##### `DeploymentInput`<sup>Optional</sup> <a name="DeploymentInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.deploymentInput"></a>

```go
func DeploymentInput() PipelineDeployment
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a>

---

##### `DevelopmentInput`<sup>Optional</sup> <a name="DevelopmentInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.developmentInput"></a>

```go
func DevelopmentInput() interface{}
```

- *Type:* interface{}

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.editionInput"></a>

```go
func EditionInput() *string
```

- *Type:* *string

---

##### `ExpectedLastModifiedInput`<sup>Optional</sup> <a name="ExpectedLastModifiedInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.expectedLastModifiedInput"></a>

```go
func ExpectedLastModifiedInput() *f64
```

- *Type:* *f64

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.filtersInput"></a>

```go
func FiltersInput() PipelineFilters
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---

##### `GatewayDefinitionInput`<sup>Optional</sup> <a name="GatewayDefinitionInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.gatewayDefinitionInput"></a>

```go
func GatewayDefinitionInput() PipelineGatewayDefinition
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition">PipelineGatewayDefinition</a>

---

##### `HealthInput`<sup>Optional</sup> <a name="HealthInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.healthInput"></a>

```go
func HealthInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngestionDefinitionInput`<sup>Optional</sup> <a name="IngestionDefinitionInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.ingestionDefinitionInput"></a>

```go
func IngestionDefinitionInput() PipelineIngestionDefinition
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition">PipelineIngestionDefinition</a>

---

##### `LastModifiedInput`<sup>Optional</sup> <a name="LastModifiedInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.lastModifiedInput"></a>

```go
func LastModifiedInput() *f64
```

- *Type:* *f64

---

##### `LatestUpdatesInput`<sup>Optional</sup> <a name="LatestUpdatesInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.latestUpdatesInput"></a>

```go
func LatestUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `LibraryInput`<sup>Optional</sup> <a name="LibraryInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.libraryInput"></a>

```go
func LibraryInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.notificationInput"></a>

```go
func NotificationInput() interface{}
```

- *Type:* interface{}

---

##### `PhotonInput`<sup>Optional</sup> <a name="PhotonInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.photonInput"></a>

```go
func PhotonInput() interface{}
```

- *Type:* interface{}

---

##### `RestartWindowInput`<sup>Optional</sup> <a name="RestartWindowInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.restartWindowInput"></a>

```go
func RestartWindowInput() PipelineRestartWindow
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindow">PipelineRestartWindow</a>

---

##### `RunAsInput`<sup>Optional</sup> <a name="RunAsInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.runAsInput"></a>

```go
func RunAsInput() PipelineRunAs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineRunAs">PipelineRunAs</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `ServerlessInput`<sup>Optional</sup> <a name="ServerlessInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.serverlessInput"></a>

```go
func ServerlessInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.storageInput"></a>

```go
func StorageInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.triggerInput"></a>

```go
func TriggerInput() PipelineTrigger
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTrigger">PipelineTrigger</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `AllowDuplicateNames`<sup>Required</sup> <a name="AllowDuplicateNames" id="@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNames"></a>

```go
func AllowDuplicateNames() interface{}
```

- *Type:* interface{}

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktf/provider-databricks.pipeline.Pipeline.property.budgetPolicyId"></a>

```go
func BudgetPolicyId() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-databricks.pipeline.Pipeline.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `Cause`<sup>Required</sup> <a name="Cause" id="@cdktf/provider-databricks.pipeline.Pipeline.property.cause"></a>

```go
func Cause() *string
```

- *Type:* *string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-databricks.pipeline.Pipeline.property.channel"></a>

```go
func Channel() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.pipeline.Pipeline.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-databricks.pipeline.Pipeline.property.configuration"></a>

```go
func Configuration() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktf/provider-databricks.pipeline.Pipeline.property.continuous"></a>

```go
func Continuous() interface{}
```

- *Type:* interface{}

---

##### `CreatorUserName`<sup>Required</sup> <a name="CreatorUserName" id="@cdktf/provider-databricks.pipeline.Pipeline.property.creatorUserName"></a>

```go
func CreatorUserName() *string
```

- *Type:* *string

---

##### `Development`<sup>Required</sup> <a name="Development" id="@cdktf/provider-databricks.pipeline.Pipeline.property.development"></a>

```go
func Development() interface{}
```

- *Type:* interface{}

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-databricks.pipeline.Pipeline.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `ExpectedLastModified`<sup>Required</sup> <a name="ExpectedLastModified" id="@cdktf/provider-databricks.pipeline.Pipeline.property.expectedLastModified"></a>

```go
func ExpectedLastModified() *f64
```

- *Type:* *f64

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktf/provider-databricks.pipeline.Pipeline.property.health"></a>

```go
func Health() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.pipeline.Pipeline.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-databricks.pipeline.Pipeline.property.lastModified"></a>

```go
func LastModified() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.pipeline.Pipeline.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Photon`<sup>Required</sup> <a name="Photon" id="@cdktf/provider-databricks.pipeline.Pipeline.property.photon"></a>

```go
func Photon() interface{}
```

- *Type:* interface{}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-databricks.pipeline.Pipeline.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `Serverless`<sup>Required</sup> <a name="Serverless" id="@cdktf/provider-databricks.pipeline.Pipeline.property.serverless"></a>

```go
func Serverless() interface{}
```

- *Type:* interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.pipeline.Pipeline.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-databricks.pipeline.Pipeline.property.storage"></a>

```go
func Storage() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-databricks.pipeline.Pipeline.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.pipeline.Pipeline.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.pipeline.Pipeline.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineCluster <a name="PipelineCluster" id="@cdktf/provider-databricks.pipeline.PipelineCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineCluster {
	ApplyPolicyDefaultValues: interface{},
	Autoscale: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterAutoscale,
	AwsAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterAwsAttributes,
	AzureAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterAzureAttributes,
	ClusterLogConf: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterClusterLogConf,
	CustomTags: *map[string]*string,
	DriverInstancePoolId: *string,
	DriverNodeTypeId: *string,
	EnableLocalDiskEncryption: interface{},
	GcpAttributes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterGcpAttributes,
	InitScripts: interface{},
	InstancePoolId: *string,
	Label: *string,
	NodeTypeId: *string,
	NumWorkers: *f64,
	PolicyId: *string,
	SparkConf: *map[string]*string,
	SparkEnvVars: *map[string]*string,
	SshPublicKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.applyPolicyDefaultValues">ApplyPolicyDefaultValues</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#apply_policy_default_values Pipeline#apply_policy_default_values}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.clusterLogConf">ClusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#custom_tags Pipeline#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverInstancePoolId">DriverInstancePoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#driver_instance_pool_id Pipeline#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverNodeTypeId">DriverNodeTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#driver_node_type_id Pipeline#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.enableLocalDiskEncryption">EnableLocalDiskEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#enable_local_disk_encryption Pipeline#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.initScripts">InitScripts</a></code> | <code>interface{}</code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#instance_pool_id Pipeline#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#label Pipeline#label}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#node_type_id Pipeline#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#num_workers Pipeline#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#policy_id Pipeline#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkConf">SparkConf</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#spark_conf Pipeline#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkEnvVars">SparkEnvVars</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#spark_env_vars Pipeline#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ssh_public_keys Pipeline#ssh_public_keys}. |

---

##### `ApplyPolicyDefaultValues`<sup>Optional</sup> <a name="ApplyPolicyDefaultValues" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.applyPolicyDefaultValues"></a>

```go
ApplyPolicyDefaultValues interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#apply_policy_default_values Pipeline#apply_policy_default_values}.

---

##### `Autoscale`<sup>Optional</sup> <a name="Autoscale" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.autoscale"></a>

```go
Autoscale PipelineClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#autoscale Pipeline#autoscale}

---

##### `AwsAttributes`<sup>Optional</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.awsAttributes"></a>

```go
AwsAttributes PipelineClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#aws_attributes Pipeline#aws_attributes}

---

##### `AzureAttributes`<sup>Optional</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.azureAttributes"></a>

```go
AzureAttributes PipelineClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#azure_attributes Pipeline#azure_attributes}

---

##### `ClusterLogConf`<sup>Optional</sup> <a name="ClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.clusterLogConf"></a>

```go
ClusterLogConf PipelineClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#cluster_log_conf Pipeline#cluster_log_conf}

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.customTags"></a>

```go
CustomTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#custom_tags Pipeline#custom_tags}.

---

##### `DriverInstancePoolId`<sup>Optional</sup> <a name="DriverInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverInstancePoolId"></a>

```go
DriverInstancePoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#driver_instance_pool_id Pipeline#driver_instance_pool_id}.

---

##### `DriverNodeTypeId`<sup>Optional</sup> <a name="DriverNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverNodeTypeId"></a>

```go
DriverNodeTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#driver_node_type_id Pipeline#driver_node_type_id}.

---

##### `EnableLocalDiskEncryption`<sup>Optional</sup> <a name="EnableLocalDiskEncryption" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.enableLocalDiskEncryption"></a>

```go
EnableLocalDiskEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#enable_local_disk_encryption Pipeline#enable_local_disk_encryption}.

---

##### `GcpAttributes`<sup>Optional</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.gcpAttributes"></a>

```go
GcpAttributes PipelineClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#gcp_attributes Pipeline#gcp_attributes}

---

##### `InitScripts`<sup>Optional</sup> <a name="InitScripts" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.initScripts"></a>

```go
InitScripts interface{}
```

- *Type:* interface{}

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#init_scripts Pipeline#init_scripts}

---

##### `InstancePoolId`<sup>Optional</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.instancePoolId"></a>

```go
InstancePoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#instance_pool_id Pipeline#instance_pool_id}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#label Pipeline#label}.

---

##### `NodeTypeId`<sup>Optional</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.nodeTypeId"></a>

```go
NodeTypeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#node_type_id Pipeline#node_type_id}.

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.numWorkers"></a>

```go
NumWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#num_workers Pipeline#num_workers}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#policy_id Pipeline#policy_id}.

---

##### `SparkConf`<sup>Optional</sup> <a name="SparkConf" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkConf"></a>

```go
SparkConf *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#spark_conf Pipeline#spark_conf}.

---

##### `SparkEnvVars`<sup>Optional</sup> <a name="SparkEnvVars" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkEnvVars"></a>

```go
SparkEnvVars *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#spark_env_vars Pipeline#spark_env_vars}.

---

##### `SshPublicKeys`<sup>Optional</sup> <a name="SshPublicKeys" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sshPublicKeys"></a>

```go
SshPublicKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ssh_public_keys Pipeline#ssh_public_keys}.

---

### PipelineClusterAutoscale <a name="PipelineClusterAutoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterAutoscale {
	MaxWorkers: *f64,
	MinWorkers: *f64,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#max_workers Pipeline#max_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.minWorkers">MinWorkers</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#min_workers Pipeline#min_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#mode Pipeline#mode}. |

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.maxWorkers"></a>

```go
MaxWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#max_workers Pipeline#max_workers}.

---

##### `MinWorkers`<sup>Required</sup> <a name="MinWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.minWorkers"></a>

```go
MinWorkers *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#min_workers Pipeline#min_workers}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#mode Pipeline#mode}.

---

### PipelineClusterAwsAttributes <a name="PipelineClusterAwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterAwsAttributes {
	Availability: *string,
	EbsVolumeCount: *f64,
	EbsVolumeIops: *f64,
	EbsVolumeSize: *f64,
	EbsVolumeThroughput: *f64,
	EbsVolumeType: *string,
	FirstOnDemand: *f64,
	InstanceProfileArn: *string,
	SpotBidPricePercent: *f64,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeCount">EbsVolumeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ebs_volume_count Pipeline#ebs_volume_count}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeIops">EbsVolumeIops</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ebs_volume_iops Pipeline#ebs_volume_iops}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ebs_volume_size Pipeline#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeThroughput">EbsVolumeThroughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ebs_volume_throughput Pipeline#ebs_volume_throughput}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeType">EbsVolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ebs_volume_type Pipeline#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#instance_profile_arn Pipeline#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#spot_bid_price_percent Pipeline#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#zone_id Pipeline#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `EbsVolumeCount`<sup>Optional</sup> <a name="EbsVolumeCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeCount"></a>

```go
EbsVolumeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ebs_volume_count Pipeline#ebs_volume_count}.

---

##### `EbsVolumeIops`<sup>Optional</sup> <a name="EbsVolumeIops" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeIops"></a>

```go
EbsVolumeIops *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ebs_volume_iops Pipeline#ebs_volume_iops}.

---

##### `EbsVolumeSize`<sup>Optional</sup> <a name="EbsVolumeSize" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeSize"></a>

```go
EbsVolumeSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ebs_volume_size Pipeline#ebs_volume_size}.

---

##### `EbsVolumeThroughput`<sup>Optional</sup> <a name="EbsVolumeThroughput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeThroughput"></a>

```go
EbsVolumeThroughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ebs_volume_throughput Pipeline#ebs_volume_throughput}.

---

##### `EbsVolumeType`<sup>Optional</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeType"></a>

```go
EbsVolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ebs_volume_type Pipeline#ebs_volume_type}.

---

##### `FirstOnDemand`<sup>Optional</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.firstOnDemand"></a>

```go
FirstOnDemand *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.instanceProfileArn"></a>

```go
InstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#instance_profile_arn Pipeline#instance_profile_arn}.

---

##### `SpotBidPricePercent`<sup>Optional</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.spotBidPricePercent"></a>

```go
SpotBidPricePercent *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#spot_bid_price_percent Pipeline#spot_bid_price_percent}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#zone_id Pipeline#zone_id}.

---

### PipelineClusterAzureAttributes <a name="PipelineClusterAzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterAzureAttributes {
	Availability: *string,
	FirstOnDemand: *f64,
	LogAnalyticsInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo,
	SpotBidMaxPrice: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.logAnalyticsInfo">LogAnalyticsInfo</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo">PipelineClusterAzureAttributesLogAnalyticsInfo</a></code> | log_analytics_info block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#spot_bid_max_price Pipeline#spot_bid_max_price}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `FirstOnDemand`<sup>Optional</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.firstOnDemand"></a>

```go
FirstOnDemand *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}.

---

##### `LogAnalyticsInfo`<sup>Optional</sup> <a name="LogAnalyticsInfo" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.logAnalyticsInfo"></a>

```go
LogAnalyticsInfo PipelineClusterAzureAttributesLogAnalyticsInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo">PipelineClusterAzureAttributesLogAnalyticsInfo</a>

log_analytics_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#log_analytics_info Pipeline#log_analytics_info}

---

##### `SpotBidMaxPrice`<sup>Optional</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.spotBidMaxPrice"></a>

```go
SpotBidMaxPrice *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#spot_bid_max_price Pipeline#spot_bid_max_price}.

---

### PipelineClusterAzureAttributesLogAnalyticsInfo <a name="PipelineClusterAzureAttributesLogAnalyticsInfo" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo {
	LogAnalyticsPrimaryKey: *string,
	LogAnalyticsWorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsPrimaryKey">LogAnalyticsPrimaryKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#log_analytics_primary_key Pipeline#log_analytics_primary_key}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#log_analytics_workspace_id Pipeline#log_analytics_workspace_id}. |

---

##### `LogAnalyticsPrimaryKey`<sup>Optional</sup> <a name="LogAnalyticsPrimaryKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsPrimaryKey"></a>

```go
LogAnalyticsPrimaryKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#log_analytics_primary_key Pipeline#log_analytics_primary_key}.

---

##### `LogAnalyticsWorkspaceId`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#log_analytics_workspace_id Pipeline#log_analytics_workspace_id}.

---

### PipelineClusterClusterLogConf <a name="PipelineClusterClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterClusterLogConf {
	Dbfs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterClusterLogConfDbfs,
	S3: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterClusterLogConfS3,
	Volumes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterClusterLogConfVolumes,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumes">PipelineClusterClusterLogConfVolumes</a></code> | volumes block. |

---

##### `Dbfs`<sup>Optional</sup> <a name="Dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.dbfs"></a>

```go
Dbfs PipelineClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#dbfs Pipeline#dbfs}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.s3"></a>

```go
S3 PipelineClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#s3 Pipeline#s3}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.volumes"></a>

```go
Volumes PipelineClusterClusterLogConfVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumes">PipelineClusterClusterLogConfVolumes</a>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#volumes Pipeline#volumes}

---

### PipelineClusterClusterLogConfDbfs <a name="PipelineClusterClusterLogConfDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterClusterLogConfDbfs {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterClusterLogConfS3 <a name="PipelineClusterClusterLogConfS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterClusterLogConfS3 {
	Destination: *string,
	CannedAcl: *string,
	EnableEncryption: interface{},
	EncryptionType: *string,
	Endpoint: *string,
	KmsKey: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#endpoint Pipeline#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#kms_key Pipeline#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#region Pipeline#region}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `CannedAcl`<sup>Optional</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.cannedAcl"></a>

```go
CannedAcl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}.

---

##### `EnableEncryption`<sup>Optional</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.enableEncryption"></a>

```go
EnableEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#endpoint Pipeline#endpoint}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#kms_key Pipeline#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#region Pipeline#region}.

---

### PipelineClusterClusterLogConfVolumes <a name="PipelineClusterClusterLogConfVolumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterClusterLogConfVolumes {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumes.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumes.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterGcpAttributes <a name="PipelineClusterGcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterGcpAttributes {
	Availability: *string,
	GoogleServiceAccount: *string,
	LocalSsdCount: *f64,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#google_service_account Pipeline#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.localSsdCount">LocalSsdCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#local_ssd_count Pipeline#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#zone_id Pipeline#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `GoogleServiceAccount`<sup>Optional</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.googleServiceAccount"></a>

```go
GoogleServiceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#google_service_account Pipeline#google_service_account}.

---

##### `LocalSsdCount`<sup>Optional</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.localSsdCount"></a>

```go
LocalSsdCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#local_ssd_count Pipeline#local_ssd_count}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#zone_id Pipeline#zone_id}.

---

### PipelineClusterInitScripts <a name="PipelineClusterInitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterInitScripts {
	Abfss: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterInitScriptsAbfss,
	Dbfs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterInitScriptsDbfs,
	File: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterInitScriptsFile,
	Gcs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterInitScriptsGcs,
	S3: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterInitScriptsS3,
	Volumes: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterInitScriptsVolumes,
	Workspace: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineClusterInitScriptsWorkspace,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.abfss">Abfss</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | abfss block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a></code> | volumes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.workspace">Workspace</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | workspace block. |

---

##### `Abfss`<sup>Optional</sup> <a name="Abfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.abfss"></a>

```go
Abfss PipelineClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

abfss block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#abfss Pipeline#abfss}

---

##### `Dbfs`<sup>Optional</sup> <a name="Dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.dbfs"></a>

```go
Dbfs PipelineClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#dbfs Pipeline#dbfs}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.file"></a>

```go
File PipelineClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#file Pipeline#file}

---

##### `Gcs`<sup>Optional</sup> <a name="Gcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.gcs"></a>

```go
Gcs PipelineClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#gcs Pipeline#gcs}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.s3"></a>

```go
S3 PipelineClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#s3 Pipeline#s3}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.volumes"></a>

```go
Volumes PipelineClusterInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#volumes Pipeline#volumes}

---

##### `Workspace`<sup>Optional</sup> <a name="Workspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.workspace"></a>

```go
Workspace PipelineClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#workspace Pipeline#workspace}

---

### PipelineClusterInitScriptsAbfss <a name="PipelineClusterInitScriptsAbfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterInitScriptsAbfss {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsDbfs <a name="PipelineClusterInitScriptsDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterInitScriptsDbfs {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsFile <a name="PipelineClusterInitScriptsFile" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterInitScriptsFile {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsGcs <a name="PipelineClusterInitScriptsGcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterInitScriptsGcs {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsS3 <a name="PipelineClusterInitScriptsS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterInitScriptsS3 {
	Destination: *string,
	CannedAcl: *string,
	EnableEncryption: interface{},
	EncryptionType: *string,
	Endpoint: *string,
	KmsKey: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#endpoint Pipeline#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#kms_key Pipeline#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#region Pipeline#region}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `CannedAcl`<sup>Optional</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.cannedAcl"></a>

```go
CannedAcl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}.

---

##### `EnableEncryption`<sup>Optional</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.enableEncryption"></a>

```go
EnableEncryption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#endpoint Pipeline#endpoint}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#kms_key Pipeline#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#region Pipeline#region}.

---

### PipelineClusterInitScriptsVolumes <a name="PipelineClusterInitScriptsVolumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterInitScriptsVolumes {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsWorkspace <a name="PipelineClusterInitScriptsWorkspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineClusterInitScriptsWorkspace {
	Destination: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineConfig <a name="PipelineConfig" id="@cdktf/provider-databricks.pipeline.PipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AllowDuplicateNames: interface{},
	BudgetPolicyId: *string,
	Catalog: *string,
	Cause: *string,
	Channel: *string,
	Cluster: interface{},
	ClusterId: *string,
	Configuration: *map[string]*string,
	Continuous: interface{},
	CreatorUserName: *string,
	Deployment: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineDeployment,
	Development: interface{},
	Edition: *string,
	ExpectedLastModified: *f64,
	Filters: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineFilters,
	GatewayDefinition: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineGatewayDefinition,
	Health: *string,
	Id: *string,
	IngestionDefinition: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineIngestionDefinition,
	LastModified: *f64,
	LatestUpdates: interface{},
	Library: interface{},
	Name: *string,
	Notification: interface{},
	Photon: interface{},
	RestartWindow: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineRestartWindow,
	RunAs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineRunAs,
	Schema: *string,
	Serverless: interface{},
	State: *string,
	Storage: *string,
	Target: *string,
	Timeouts: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineTimeouts,
	Trigger: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineTrigger,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.allowDuplicateNames">AllowDuplicateNames</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#budget_policy_id Pipeline#budget_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#catalog Pipeline#catalog}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.cause">Cause</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#cause Pipeline#cause}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.channel">Channel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#channel Pipeline#channel}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.cluster">Cluster</a></code> | <code>interface{}</code> | cluster block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#cluster_id Pipeline#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.configuration">Configuration</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#configuration Pipeline#configuration}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.continuous">Continuous</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#continuous Pipeline#continuous}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.creatorUserName">CreatorUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#creator_user_name Pipeline#creator_user_name}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.deployment">Deployment</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.development">Development</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#development Pipeline#development}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.edition">Edition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#edition Pipeline#edition}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.expectedLastModified">ExpectedLastModified</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#expected_last_modified Pipeline#expected_last_modified}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.gatewayDefinition">GatewayDefinition</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition">PipelineGatewayDefinition</a></code> | gateway_definition block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.health">Health</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#health Pipeline#health}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#id Pipeline#id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.ingestionDefinition">IngestionDefinition</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition">PipelineIngestionDefinition</a></code> | ingestion_definition block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.lastModified">LastModified</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#last_modified Pipeline#last_modified}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.latestUpdates">LatestUpdates</a></code> | <code>interface{}</code> | latest_updates block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.library">Library</a></code> | <code>interface{}</code> | library block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#name Pipeline#name}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.notification">Notification</a></code> | <code>interface{}</code> | notification block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.photon">Photon</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#photon Pipeline#photon}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.restartWindow">RestartWindow</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindow">PipelineRestartWindow</a></code> | restart_window block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.runAs">RunAs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAs">PipelineRunAs</a></code> | run_as block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.schema">Schema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#schema Pipeline#schema}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.serverless">Serverless</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#serverless Pipeline#serverless}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#state Pipeline#state}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.storage">Storage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#storage Pipeline#storage}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.target">Target</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#target Pipeline#target}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTrigger">PipelineTrigger</a></code> | trigger block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#url Pipeline#url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowDuplicateNames`<sup>Optional</sup> <a name="AllowDuplicateNames" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.allowDuplicateNames"></a>

```go
AllowDuplicateNames interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}.

---

##### `BudgetPolicyId`<sup>Optional</sup> <a name="BudgetPolicyId" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.budgetPolicyId"></a>

```go
BudgetPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#budget_policy_id Pipeline#budget_policy_id}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#catalog Pipeline#catalog}.

---

##### `Cause`<sup>Optional</sup> <a name="Cause" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.cause"></a>

```go
Cause *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#cause Pipeline#cause}.

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.channel"></a>

```go
Channel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#channel Pipeline#channel}.

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.cluster"></a>

```go
Cluster interface{}
```

- *Type:* interface{}

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#cluster Pipeline#cluster}

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#cluster_id Pipeline#cluster_id}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.configuration"></a>

```go
Configuration *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#configuration Pipeline#configuration}.

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.continuous"></a>

```go
Continuous interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#continuous Pipeline#continuous}.

---

##### `CreatorUserName`<sup>Optional</sup> <a name="CreatorUserName" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.creatorUserName"></a>

```go
CreatorUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#creator_user_name Pipeline#creator_user_name}.

---

##### `Deployment`<sup>Optional</sup> <a name="Deployment" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.deployment"></a>

```go
Deployment PipelineDeployment
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#deployment Pipeline#deployment}

---

##### `Development`<sup>Optional</sup> <a name="Development" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.development"></a>

```go
Development interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#development Pipeline#development}.

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.edition"></a>

```go
Edition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#edition Pipeline#edition}.

---

##### `ExpectedLastModified`<sup>Optional</sup> <a name="ExpectedLastModified" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.expectedLastModified"></a>

```go
ExpectedLastModified *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#expected_last_modified Pipeline#expected_last_modified}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.filters"></a>

```go
Filters PipelineFilters
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#filters Pipeline#filters}

---

##### `GatewayDefinition`<sup>Optional</sup> <a name="GatewayDefinition" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.gatewayDefinition"></a>

```go
GatewayDefinition PipelineGatewayDefinition
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition">PipelineGatewayDefinition</a>

gateway_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#gateway_definition Pipeline#gateway_definition}

---

##### `Health`<sup>Optional</sup> <a name="Health" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.health"></a>

```go
Health *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#health Pipeline#health}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#id Pipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngestionDefinition`<sup>Optional</sup> <a name="IngestionDefinition" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.ingestionDefinition"></a>

```go
IngestionDefinition PipelineIngestionDefinition
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition">PipelineIngestionDefinition</a>

ingestion_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ingestion_definition Pipeline#ingestion_definition}

---

##### `LastModified`<sup>Optional</sup> <a name="LastModified" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.lastModified"></a>

```go
LastModified *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#last_modified Pipeline#last_modified}.

---

##### `LatestUpdates`<sup>Optional</sup> <a name="LatestUpdates" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.latestUpdates"></a>

```go
LatestUpdates interface{}
```

- *Type:* interface{}

latest_updates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#latest_updates Pipeline#latest_updates}

---

##### `Library`<sup>Optional</sup> <a name="Library" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.library"></a>

```go
Library interface{}
```

- *Type:* interface{}

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#library Pipeline#library}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#name Pipeline#name}.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.notification"></a>

```go
Notification interface{}
```

- *Type:* interface{}

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#notification Pipeline#notification}

---

##### `Photon`<sup>Optional</sup> <a name="Photon" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.photon"></a>

```go
Photon interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#photon Pipeline#photon}.

---

##### `RestartWindow`<sup>Optional</sup> <a name="RestartWindow" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.restartWindow"></a>

```go
RestartWindow PipelineRestartWindow
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindow">PipelineRestartWindow</a>

restart_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#restart_window Pipeline#restart_window}

---

##### `RunAs`<sup>Optional</sup> <a name="RunAs" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.runAs"></a>

```go
RunAs PipelineRunAs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineRunAs">PipelineRunAs</a>

run_as block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#run_as Pipeline#run_as}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#schema Pipeline#schema}.

---

##### `Serverless`<sup>Optional</sup> <a name="Serverless" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.serverless"></a>

```go
Serverless interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#serverless Pipeline#serverless}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#state Pipeline#state}.

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.storage"></a>

```go
Storage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#storage Pipeline#storage}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#target Pipeline#target}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.timeouts"></a>

```go
Timeouts PipelineTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#timeouts Pipeline#timeouts}

---

##### `Trigger`<sup>Optional</sup> <a name="Trigger" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.trigger"></a>

```go
Trigger PipelineTrigger
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTrigger">PipelineTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#trigger Pipeline#trigger}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#url Pipeline#url}.

---

### PipelineDeployment <a name="PipelineDeployment" id="@cdktf/provider-databricks.pipeline.PipelineDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineDeployment {
	Kind: *string,
	MetadataFilePath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#kind Pipeline#kind}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment.property.metadataFilePath">MetadataFilePath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#metadata_file_path Pipeline#metadata_file_path}. |

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-databricks.pipeline.PipelineDeployment.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#kind Pipeline#kind}.

---

##### `MetadataFilePath`<sup>Optional</sup> <a name="MetadataFilePath" id="@cdktf/provider-databricks.pipeline.PipelineDeployment.property.metadataFilePath"></a>

```go
MetadataFilePath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#metadata_file_path Pipeline#metadata_file_path}.

---

### PipelineFilters <a name="PipelineFilters" id="@cdktf/provider-databricks.pipeline.PipelineFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineFilters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineFilters {
	Exclude: *[]*string,
	Include: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters.property.exclude">Exclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#exclude Pipeline#exclude}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters.property.include">Include</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#include Pipeline#include}. |

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-databricks.pipeline.PipelineFilters.property.exclude"></a>

```go
Exclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#exclude Pipeline#exclude}.

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktf/provider-databricks.pipeline.PipelineFilters.property.include"></a>

```go
Include *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#include Pipeline#include}.

---

### PipelineGatewayDefinition <a name="PipelineGatewayDefinition" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineGatewayDefinition {
	ConnectionId: *string,
	ConnectionName: *string,
	GatewayStorageCatalog: *string,
	GatewayStorageName: *string,
	GatewayStorageSchema: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition.property.connectionId">ConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#connection_id Pipeline#connection_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition.property.connectionName">ConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#connection_name Pipeline#connection_name}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition.property.gatewayStorageCatalog">GatewayStorageCatalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#gateway_storage_catalog Pipeline#gateway_storage_catalog}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition.property.gatewayStorageName">GatewayStorageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#gateway_storage_name Pipeline#gateway_storage_name}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition.property.gatewayStorageSchema">GatewayStorageSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#gateway_storage_schema Pipeline#gateway_storage_schema}. |

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#connection_id Pipeline#connection_id}.

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#connection_name Pipeline#connection_name}.

---

##### `GatewayStorageCatalog`<sup>Optional</sup> <a name="GatewayStorageCatalog" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition.property.gatewayStorageCatalog"></a>

```go
GatewayStorageCatalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#gateway_storage_catalog Pipeline#gateway_storage_catalog}.

---

##### `GatewayStorageName`<sup>Optional</sup> <a name="GatewayStorageName" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition.property.gatewayStorageName"></a>

```go
GatewayStorageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#gateway_storage_name Pipeline#gateway_storage_name}.

---

##### `GatewayStorageSchema`<sup>Optional</sup> <a name="GatewayStorageSchema" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition.property.gatewayStorageSchema"></a>

```go
GatewayStorageSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#gateway_storage_schema Pipeline#gateway_storage_schema}.

---

### PipelineIngestionDefinition <a name="PipelineIngestionDefinition" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineIngestionDefinition {
	ConnectionName: *string,
	IngestionGatewayId: *string,
	Objects: interface{},
	TableConfiguration: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineIngestionDefinitionTableConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition.property.connectionName">ConnectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#connection_name Pipeline#connection_name}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition.property.ingestionGatewayId">IngestionGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ingestion_gateway_id Pipeline#ingestion_gateway_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition.property.objects">Objects</a></code> | <code>interface{}</code> | objects block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition.property.tableConfiguration">TableConfiguration</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration">PipelineIngestionDefinitionTableConfiguration</a></code> | table_configuration block. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#connection_name Pipeline#connection_name}.

---

##### `IngestionGatewayId`<sup>Optional</sup> <a name="IngestionGatewayId" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition.property.ingestionGatewayId"></a>

```go
IngestionGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#ingestion_gateway_id Pipeline#ingestion_gateway_id}.

---

##### `Objects`<sup>Optional</sup> <a name="Objects" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition.property.objects"></a>

```go
Objects interface{}
```

- *Type:* interface{}

objects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#objects Pipeline#objects}

---

##### `TableConfiguration`<sup>Optional</sup> <a name="TableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition.property.tableConfiguration"></a>

```go
TableConfiguration PipelineIngestionDefinitionTableConfiguration
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration">PipelineIngestionDefinitionTableConfiguration</a>

table_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#table_configuration Pipeline#table_configuration}

---

### PipelineIngestionDefinitionObjects <a name="PipelineIngestionDefinitionObjects" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjects.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineIngestionDefinitionObjects {
	Report: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineIngestionDefinitionObjectsReport,
	Schema: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineIngestionDefinitionObjectsSchema,
	Table: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineIngestionDefinitionObjectsTable,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjects.property.report">Report</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport">PipelineIngestionDefinitionObjectsReport</a></code> | report block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjects.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema">PipelineIngestionDefinitionObjectsSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjects.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable">PipelineIngestionDefinitionObjectsTable</a></code> | table block. |

---

##### `Report`<sup>Optional</sup> <a name="Report" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjects.property.report"></a>

```go
Report PipelineIngestionDefinitionObjectsReport
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport">PipelineIngestionDefinitionObjectsReport</a>

report block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#report Pipeline#report}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjects.property.schema"></a>

```go
Schema PipelineIngestionDefinitionObjectsSchema
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema">PipelineIngestionDefinitionObjectsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#schema Pipeline#schema}

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjects.property.table"></a>

```go
Table PipelineIngestionDefinitionObjectsTable
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable">PipelineIngestionDefinitionObjectsTable</a>

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#table Pipeline#table}

---

### PipelineIngestionDefinitionObjectsReport <a name="PipelineIngestionDefinitionObjectsReport" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineIngestionDefinitionObjectsReport {
	DestinationCatalog: *string,
	DestinationSchema: *string,
	DestinationTable: *string,
	SourceUrl: *string,
	TableConfiguration: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport.property.destinationCatalog">DestinationCatalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_catalog Pipeline#destination_catalog}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport.property.destinationSchema">DestinationSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_schema Pipeline#destination_schema}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport.property.destinationTable">DestinationTable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_table Pipeline#destination_table}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#source_url Pipeline#source_url}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport.property.tableConfiguration">TableConfiguration</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration">PipelineIngestionDefinitionObjectsReportTableConfiguration</a></code> | table_configuration block. |

---

##### `DestinationCatalog`<sup>Optional</sup> <a name="DestinationCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport.property.destinationCatalog"></a>

```go
DestinationCatalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_catalog Pipeline#destination_catalog}.

---

##### `DestinationSchema`<sup>Optional</sup> <a name="DestinationSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport.property.destinationSchema"></a>

```go
DestinationSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_schema Pipeline#destination_schema}.

---

##### `DestinationTable`<sup>Optional</sup> <a name="DestinationTable" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport.property.destinationTable"></a>

```go
DestinationTable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_table Pipeline#destination_table}.

---

##### `SourceUrl`<sup>Optional</sup> <a name="SourceUrl" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport.property.sourceUrl"></a>

```go
SourceUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#source_url Pipeline#source_url}.

---

##### `TableConfiguration`<sup>Optional</sup> <a name="TableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport.property.tableConfiguration"></a>

```go
TableConfiguration PipelineIngestionDefinitionObjectsReportTableConfiguration
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration">PipelineIngestionDefinitionObjectsReportTableConfiguration</a>

table_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#table_configuration Pipeline#table_configuration}

---

### PipelineIngestionDefinitionObjectsReportTableConfiguration <a name="PipelineIngestionDefinitionObjectsReportTableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration {
	PrimaryKeys: *[]*string,
	SalesforceIncludeFormulaFields: interface{},
	ScdType: *string,
	SequenceBy: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration.property.primaryKeys">PrimaryKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#primary_keys Pipeline#primary_keys}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration.property.salesforceIncludeFormulaFields">SalesforceIncludeFormulaFields</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration.property.scdType">ScdType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#scd_type Pipeline#scd_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration.property.sequenceBy">SequenceBy</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#sequence_by Pipeline#sequence_by}. |

---

##### `PrimaryKeys`<sup>Optional</sup> <a name="PrimaryKeys" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration.property.primaryKeys"></a>

```go
PrimaryKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#primary_keys Pipeline#primary_keys}.

---

##### `SalesforceIncludeFormulaFields`<sup>Optional</sup> <a name="SalesforceIncludeFormulaFields" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration.property.salesforceIncludeFormulaFields"></a>

```go
SalesforceIncludeFormulaFields interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}.

---

##### `ScdType`<sup>Optional</sup> <a name="ScdType" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration.property.scdType"></a>

```go
ScdType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#scd_type Pipeline#scd_type}.

---

##### `SequenceBy`<sup>Optional</sup> <a name="SequenceBy" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration.property.sequenceBy"></a>

```go
SequenceBy *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#sequence_by Pipeline#sequence_by}.

---

### PipelineIngestionDefinitionObjectsSchema <a name="PipelineIngestionDefinitionObjectsSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineIngestionDefinitionObjectsSchema {
	DestinationCatalog: *string,
	DestinationSchema: *string,
	SourceCatalog: *string,
	SourceSchema: *string,
	TableConfiguration: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema.property.destinationCatalog">DestinationCatalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_catalog Pipeline#destination_catalog}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema.property.destinationSchema">DestinationSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_schema Pipeline#destination_schema}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema.property.sourceCatalog">SourceCatalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#source_catalog Pipeline#source_catalog}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema.property.sourceSchema">SourceSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#source_schema Pipeline#source_schema}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema.property.tableConfiguration">TableConfiguration</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration">PipelineIngestionDefinitionObjectsSchemaTableConfiguration</a></code> | table_configuration block. |

---

##### `DestinationCatalog`<sup>Optional</sup> <a name="DestinationCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema.property.destinationCatalog"></a>

```go
DestinationCatalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_catalog Pipeline#destination_catalog}.

---

##### `DestinationSchema`<sup>Optional</sup> <a name="DestinationSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema.property.destinationSchema"></a>

```go
DestinationSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_schema Pipeline#destination_schema}.

---

##### `SourceCatalog`<sup>Optional</sup> <a name="SourceCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema.property.sourceCatalog"></a>

```go
SourceCatalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#source_catalog Pipeline#source_catalog}.

---

##### `SourceSchema`<sup>Optional</sup> <a name="SourceSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema.property.sourceSchema"></a>

```go
SourceSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#source_schema Pipeline#source_schema}.

---

##### `TableConfiguration`<sup>Optional</sup> <a name="TableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema.property.tableConfiguration"></a>

```go
TableConfiguration PipelineIngestionDefinitionObjectsSchemaTableConfiguration
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration">PipelineIngestionDefinitionObjectsSchemaTableConfiguration</a>

table_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#table_configuration Pipeline#table_configuration}

---

### PipelineIngestionDefinitionObjectsSchemaTableConfiguration <a name="PipelineIngestionDefinitionObjectsSchemaTableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration {
	PrimaryKeys: *[]*string,
	SalesforceIncludeFormulaFields: interface{},
	ScdType: *string,
	SequenceBy: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration.property.primaryKeys">PrimaryKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#primary_keys Pipeline#primary_keys}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration.property.salesforceIncludeFormulaFields">SalesforceIncludeFormulaFields</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration.property.scdType">ScdType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#scd_type Pipeline#scd_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration.property.sequenceBy">SequenceBy</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#sequence_by Pipeline#sequence_by}. |

---

##### `PrimaryKeys`<sup>Optional</sup> <a name="PrimaryKeys" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration.property.primaryKeys"></a>

```go
PrimaryKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#primary_keys Pipeline#primary_keys}.

---

##### `SalesforceIncludeFormulaFields`<sup>Optional</sup> <a name="SalesforceIncludeFormulaFields" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration.property.salesforceIncludeFormulaFields"></a>

```go
SalesforceIncludeFormulaFields interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}.

---

##### `ScdType`<sup>Optional</sup> <a name="ScdType" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration.property.scdType"></a>

```go
ScdType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#scd_type Pipeline#scd_type}.

---

##### `SequenceBy`<sup>Optional</sup> <a name="SequenceBy" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration.property.sequenceBy"></a>

```go
SequenceBy *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#sequence_by Pipeline#sequence_by}.

---

### PipelineIngestionDefinitionObjectsTable <a name="PipelineIngestionDefinitionObjectsTable" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineIngestionDefinitionObjectsTable {
	DestinationCatalog: *string,
	DestinationSchema: *string,
	DestinationTable: *string,
	SourceCatalog: *string,
	SourceSchema: *string,
	SourceTable: *string,
	TableConfiguration: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.destinationCatalog">DestinationCatalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_catalog Pipeline#destination_catalog}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.destinationSchema">DestinationSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_schema Pipeline#destination_schema}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.destinationTable">DestinationTable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_table Pipeline#destination_table}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.sourceCatalog">SourceCatalog</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#source_catalog Pipeline#source_catalog}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.sourceSchema">SourceSchema</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#source_schema Pipeline#source_schema}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.sourceTable">SourceTable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#source_table Pipeline#source_table}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.tableConfiguration">TableConfiguration</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration">PipelineIngestionDefinitionObjectsTableTableConfiguration</a></code> | table_configuration block. |

---

##### `DestinationCatalog`<sup>Optional</sup> <a name="DestinationCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.destinationCatalog"></a>

```go
DestinationCatalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_catalog Pipeline#destination_catalog}.

---

##### `DestinationSchema`<sup>Optional</sup> <a name="DestinationSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.destinationSchema"></a>

```go
DestinationSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_schema Pipeline#destination_schema}.

---

##### `DestinationTable`<sup>Optional</sup> <a name="DestinationTable" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.destinationTable"></a>

```go
DestinationTable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#destination_table Pipeline#destination_table}.

---

##### `SourceCatalog`<sup>Optional</sup> <a name="SourceCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.sourceCatalog"></a>

```go
SourceCatalog *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#source_catalog Pipeline#source_catalog}.

---

##### `SourceSchema`<sup>Optional</sup> <a name="SourceSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.sourceSchema"></a>

```go
SourceSchema *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#source_schema Pipeline#source_schema}.

---

##### `SourceTable`<sup>Optional</sup> <a name="SourceTable" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.sourceTable"></a>

```go
SourceTable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#source_table Pipeline#source_table}.

---

##### `TableConfiguration`<sup>Optional</sup> <a name="TableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable.property.tableConfiguration"></a>

```go
TableConfiguration PipelineIngestionDefinitionObjectsTableTableConfiguration
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration">PipelineIngestionDefinitionObjectsTableTableConfiguration</a>

table_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#table_configuration Pipeline#table_configuration}

---

### PipelineIngestionDefinitionObjectsTableTableConfiguration <a name="PipelineIngestionDefinitionObjectsTableTableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration {
	PrimaryKeys: *[]*string,
	SalesforceIncludeFormulaFields: interface{},
	ScdType: *string,
	SequenceBy: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration.property.primaryKeys">PrimaryKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#primary_keys Pipeline#primary_keys}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration.property.salesforceIncludeFormulaFields">SalesforceIncludeFormulaFields</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration.property.scdType">ScdType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#scd_type Pipeline#scd_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration.property.sequenceBy">SequenceBy</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#sequence_by Pipeline#sequence_by}. |

---

##### `PrimaryKeys`<sup>Optional</sup> <a name="PrimaryKeys" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration.property.primaryKeys"></a>

```go
PrimaryKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#primary_keys Pipeline#primary_keys}.

---

##### `SalesforceIncludeFormulaFields`<sup>Optional</sup> <a name="SalesforceIncludeFormulaFields" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration.property.salesforceIncludeFormulaFields"></a>

```go
SalesforceIncludeFormulaFields interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}.

---

##### `ScdType`<sup>Optional</sup> <a name="ScdType" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration.property.scdType"></a>

```go
ScdType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#scd_type Pipeline#scd_type}.

---

##### `SequenceBy`<sup>Optional</sup> <a name="SequenceBy" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration.property.sequenceBy"></a>

```go
SequenceBy *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#sequence_by Pipeline#sequence_by}.

---

### PipelineIngestionDefinitionTableConfiguration <a name="PipelineIngestionDefinitionTableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineIngestionDefinitionTableConfiguration {
	PrimaryKeys: *[]*string,
	SalesforceIncludeFormulaFields: interface{},
	ScdType: *string,
	SequenceBy: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration.property.primaryKeys">PrimaryKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#primary_keys Pipeline#primary_keys}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration.property.salesforceIncludeFormulaFields">SalesforceIncludeFormulaFields</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration.property.scdType">ScdType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#scd_type Pipeline#scd_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration.property.sequenceBy">SequenceBy</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#sequence_by Pipeline#sequence_by}. |

---

##### `PrimaryKeys`<sup>Optional</sup> <a name="PrimaryKeys" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration.property.primaryKeys"></a>

```go
PrimaryKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#primary_keys Pipeline#primary_keys}.

---

##### `SalesforceIncludeFormulaFields`<sup>Optional</sup> <a name="SalesforceIncludeFormulaFields" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration.property.salesforceIncludeFormulaFields"></a>

```go
SalesforceIncludeFormulaFields interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#salesforce_include_formula_fields Pipeline#salesforce_include_formula_fields}.

---

##### `ScdType`<sup>Optional</sup> <a name="ScdType" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration.property.scdType"></a>

```go
ScdType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#scd_type Pipeline#scd_type}.

---

##### `SequenceBy`<sup>Optional</sup> <a name="SequenceBy" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration.property.sequenceBy"></a>

```go
SequenceBy *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#sequence_by Pipeline#sequence_by}.

---

### PipelineLatestUpdates <a name="PipelineLatestUpdates" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineLatestUpdates {
	CreationTime: *string,
	State: *string,
	UpdateId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdates.property.creationTime">CreationTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#creation_time Pipeline#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdates.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#state Pipeline#state}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdates.property.updateId">UpdateId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#update_id Pipeline#update_id}. |

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdates.property.creationTime"></a>

```go
CreationTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#creation_time Pipeline#creation_time}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdates.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#state Pipeline#state}.

---

##### `UpdateId`<sup>Optional</sup> <a name="UpdateId" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdates.property.updateId"></a>

```go
UpdateId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#update_id Pipeline#update_id}.

---

### PipelineLibrary <a name="PipelineLibrary" id="@cdktf/provider-databricks.pipeline.PipelineLibrary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineLibrary {
	File: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineLibraryFile,
	Jar: *string,
	Maven: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineLibraryMaven,
	Notebook: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineLibraryNotebook,
	Whl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.jar">Jar</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#jar Pipeline#jar}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | notebook block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.whl">Whl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#whl Pipeline#whl}. |

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.file"></a>

```go
File PipelineLibraryFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#file Pipeline#file}

---

##### `Jar`<sup>Optional</sup> <a name="Jar" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.jar"></a>

```go
Jar *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#jar Pipeline#jar}.

---

##### `Maven`<sup>Optional</sup> <a name="Maven" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.maven"></a>

```go
Maven PipelineLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#maven Pipeline#maven}

---

##### `Notebook`<sup>Optional</sup> <a name="Notebook" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.notebook"></a>

```go
Notebook PipelineLibraryNotebook
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

notebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#notebook Pipeline#notebook}

---

##### `Whl`<sup>Optional</sup> <a name="Whl" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.whl"></a>

```go
Whl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#whl Pipeline#whl}.

---

### PipelineLibraryFile <a name="PipelineLibraryFile" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineLibraryFile {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#path Pipeline#path}. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#path Pipeline#path}.

---

### PipelineLibraryMaven <a name="PipelineLibraryMaven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineLibraryMaven {
	Coordinates: *string,
	Exclusions: *[]*string,
	Repo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.coordinates">Coordinates</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#coordinates Pipeline#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#exclusions Pipeline#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.repo">Repo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#repo Pipeline#repo}. |

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.coordinates"></a>

```go
Coordinates *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#coordinates Pipeline#coordinates}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.exclusions"></a>

```go
Exclusions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#exclusions Pipeline#exclusions}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.repo"></a>

```go
Repo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#repo Pipeline#repo}.

---

### PipelineLibraryNotebook <a name="PipelineLibraryNotebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineLibraryNotebook {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#path Pipeline#path}. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#path Pipeline#path}.

---

### PipelineNotification <a name="PipelineNotification" id="@cdktf/provider-databricks.pipeline.PipelineNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineNotification {
	Alerts: *[]*string,
	EmailRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotification.property.alerts">Alerts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#alerts Pipeline#alerts}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotification.property.emailRecipients">EmailRecipients</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#email_recipients Pipeline#email_recipients}. |

---

##### `Alerts`<sup>Optional</sup> <a name="Alerts" id="@cdktf/provider-databricks.pipeline.PipelineNotification.property.alerts"></a>

```go
Alerts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#alerts Pipeline#alerts}.

---

##### `EmailRecipients`<sup>Optional</sup> <a name="EmailRecipients" id="@cdktf/provider-databricks.pipeline.PipelineNotification.property.emailRecipients"></a>

```go
EmailRecipients *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#email_recipients Pipeline#email_recipients}.

---

### PipelineRestartWindow <a name="PipelineRestartWindow" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineRestartWindow {
	StartHour: *f64,
	DaysOfWeek: *[]*string,
	TimeZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindow.property.startHour">StartHour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#start_hour Pipeline#start_hour}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindow.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#days_of_week Pipeline#days_of_week}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindow.property.timeZoneId">TimeZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#time_zone_id Pipeline#time_zone_id}. |

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindow.property.startHour"></a>

```go
StartHour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#start_hour Pipeline#start_hour}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindow.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#days_of_week Pipeline#days_of_week}.

---

##### `TimeZoneId`<sup>Optional</sup> <a name="TimeZoneId" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindow.property.timeZoneId"></a>

```go
TimeZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#time_zone_id Pipeline#time_zone_id}.

---

### PipelineRunAs <a name="PipelineRunAs" id="@cdktf/provider-databricks.pipeline.PipelineRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineRunAs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineRunAs {
	ServicePrincipalName: *string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAs.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#service_principal_name Pipeline#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAs.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#user_name Pipeline#user_name}. |

---

##### `ServicePrincipalName`<sup>Optional</sup> <a name="ServicePrincipalName" id="@cdktf/provider-databricks.pipeline.PipelineRunAs.property.servicePrincipalName"></a>

```go
ServicePrincipalName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#service_principal_name Pipeline#service_principal_name}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-databricks.pipeline.PipelineRunAs.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#user_name Pipeline#user_name}.

---

### PipelineTimeouts <a name="PipelineTimeouts" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineTimeouts {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#default Pipeline#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#default Pipeline#default}.

---

### PipelineTrigger <a name="PipelineTrigger" id="@cdktf/provider-databricks.pipeline.PipelineTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineTrigger {
	Cron: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineTriggerCron,
	Manual: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.pipeline.PipelineTriggerManual,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTrigger.property.cron">Cron</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCron">PipelineTriggerCron</a></code> | cron block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTrigger.property.manual">Manual</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManual">PipelineTriggerManual</a></code> | manual block. |

---

##### `Cron`<sup>Optional</sup> <a name="Cron" id="@cdktf/provider-databricks.pipeline.PipelineTrigger.property.cron"></a>

```go
Cron PipelineTriggerCron
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCron">PipelineTriggerCron</a>

cron block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#cron Pipeline#cron}

---

##### `Manual`<sup>Optional</sup> <a name="Manual" id="@cdktf/provider-databricks.pipeline.PipelineTrigger.property.manual"></a>

```go
Manual PipelineTriggerManual
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManual">PipelineTriggerManual</a>

manual block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#manual Pipeline#manual}

---

### PipelineTriggerCron <a name="PipelineTriggerCron" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCron"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCron.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineTriggerCron {
	QuartzCronSchedule: *string,
	TimezoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCron.property.quartzCronSchedule">QuartzCronSchedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#quartz_cron_schedule Pipeline#quartz_cron_schedule}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCron.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#timezone_id Pipeline#timezone_id}. |

---

##### `QuartzCronSchedule`<sup>Optional</sup> <a name="QuartzCronSchedule" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCron.property.quartzCronSchedule"></a>

```go
QuartzCronSchedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#quartz_cron_schedule Pipeline#quartz_cron_schedule}.

---

##### `TimezoneId`<sup>Optional</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCron.property.timezoneId"></a>

```go
TimezoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/pipeline#timezone_id Pipeline#timezone_id}.

---

### PipelineTriggerManual <a name="PipelineTriggerManual" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManual"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManual.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

&pipeline.PipelineTriggerManual {

}
```


## Classes <a name="Classes" id="Classes"></a>

### PipelineClusterAutoscaleOutputReference <a name="PipelineClusterAutoscaleOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterAutoscaleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterAutoscaleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkersInput">MinWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkers">MaxWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkers">MinWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkersInput"></a>

```go
func MaxWorkersInput() *f64
```

- *Type:* *f64

---

##### `MinWorkersInput`<sup>Optional</sup> <a name="MinWorkersInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkersInput"></a>

```go
func MinWorkersInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkers"></a>

```go
func MaxWorkers() *f64
```

- *Type:* *f64

---

##### `MinWorkers`<sup>Required</sup> <a name="MinWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkers"></a>

```go
func MinWorkers() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---


### PipelineClusterAwsAttributesOutputReference <a name="PipelineClusterAwsAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterAwsAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterAwsAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeCount">ResetEbsVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeIops">ResetEbsVolumeIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeSize">ResetEbsVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeThroughput">ResetEbsVolumeThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeType">ResetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetFirstOnDemand">ResetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetSpotBidPricePercent">ResetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetEbsVolumeCount` <a name="ResetEbsVolumeCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeCount"></a>

```go
func ResetEbsVolumeCount()
```

##### `ResetEbsVolumeIops` <a name="ResetEbsVolumeIops" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeIops"></a>

```go
func ResetEbsVolumeIops()
```

##### `ResetEbsVolumeSize` <a name="ResetEbsVolumeSize" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeSize"></a>

```go
func ResetEbsVolumeSize()
```

##### `ResetEbsVolumeThroughput` <a name="ResetEbsVolumeThroughput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeThroughput"></a>

```go
func ResetEbsVolumeThroughput()
```

##### `ResetEbsVolumeType` <a name="ResetEbsVolumeType" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeType"></a>

```go
func ResetEbsVolumeType()
```

##### `ResetFirstOnDemand` <a name="ResetFirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetFirstOnDemand"></a>

```go
func ResetFirstOnDemand()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```go
func ResetInstanceProfileArn()
```

##### `ResetSpotBidPricePercent` <a name="ResetSpotBidPricePercent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```go
func ResetSpotBidPricePercent()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetZoneId"></a>

```go
func ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCountInput">EbsVolumeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeIopsInput">EbsVolumeIopsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput">EbsVolumeSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeThroughputInput">EbsVolumeThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput">EbsVolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemandInput">FirstOnDemandInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercentInput">SpotBidPricePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCount">EbsVolumeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeIops">EbsVolumeIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeThroughput">EbsVolumeThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `EbsVolumeCountInput`<sup>Optional</sup> <a name="EbsVolumeCountInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCountInput"></a>

```go
func EbsVolumeCountInput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeIopsInput`<sup>Optional</sup> <a name="EbsVolumeIopsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeIopsInput"></a>

```go
func EbsVolumeIopsInput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeSizeInput`<sup>Optional</sup> <a name="EbsVolumeSizeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput"></a>

```go
func EbsVolumeSizeInput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeThroughputInput`<sup>Optional</sup> <a name="EbsVolumeThroughputInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeThroughputInput"></a>

```go
func EbsVolumeThroughputInput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeTypeInput`<sup>Optional</sup> <a name="EbsVolumeTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput"></a>

```go
func EbsVolumeTypeInput() *string
```

- *Type:* *string

---

##### `FirstOnDemandInput`<sup>Optional</sup> <a name="FirstOnDemandInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemandInput"></a>

```go
func FirstOnDemandInput() *f64
```

- *Type:* *f64

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```go
func InstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `SpotBidPricePercentInput`<sup>Optional</sup> <a name="SpotBidPricePercentInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```go
func SpotBidPricePercentInput() *f64
```

- *Type:* *f64

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `EbsVolumeCount`<sup>Required</sup> <a name="EbsVolumeCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCount"></a>

```go
func EbsVolumeCount() *f64
```

- *Type:* *f64

---

##### `EbsVolumeIops`<sup>Required</sup> <a name="EbsVolumeIops" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeIops"></a>

```go
func EbsVolumeIops() *f64
```

- *Type:* *f64

---

##### `EbsVolumeSize`<sup>Required</sup> <a name="EbsVolumeSize" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSize"></a>

```go
func EbsVolumeSize() *f64
```

- *Type:* *f64

---

##### `EbsVolumeThroughput`<sup>Required</sup> <a name="EbsVolumeThroughput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeThroughput"></a>

```go
func EbsVolumeThroughput() *f64
```

- *Type:* *f64

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeType"></a>

```go
func EbsVolumeType() *string
```

- *Type:* *string

---

##### `FirstOnDemand`<sup>Required</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemand"></a>

```go
func FirstOnDemand() *f64
```

- *Type:* *f64

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArn"></a>

```go
func InstanceProfileArn() *string
```

- *Type:* *string

---

##### `SpotBidPricePercent`<sup>Required</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```go
func SpotBidPricePercent() *f64
```

- *Type:* *f64

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---


### PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference <a name="PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterAzureAttributesLogAnalyticsInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsPrimaryKey">ResetLogAnalyticsPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsWorkspaceId">ResetLogAnalyticsWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogAnalyticsPrimaryKey` <a name="ResetLogAnalyticsPrimaryKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsPrimaryKey"></a>

```go
func ResetLogAnalyticsPrimaryKey()
```

##### `ResetLogAnalyticsWorkspaceId` <a name="ResetLogAnalyticsWorkspaceId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.resetLogAnalyticsWorkspaceId"></a>

```go
func ResetLogAnalyticsWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKeyInput">LogAnalyticsPrimaryKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKey">LogAnalyticsPrimaryKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo">PipelineClusterAzureAttributesLogAnalyticsInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAnalyticsPrimaryKeyInput`<sup>Optional</sup> <a name="LogAnalyticsPrimaryKeyInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKeyInput"></a>

```go
func LogAnalyticsPrimaryKeyInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsPrimaryKey`<sup>Required</sup> <a name="LogAnalyticsPrimaryKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsPrimaryKey"></a>

```go
func LogAnalyticsPrimaryKey() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterAzureAttributesLogAnalyticsInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo">PipelineClusterAzureAttributesLogAnalyticsInfo</a>

---


### PipelineClusterAzureAttributesOutputReference <a name="PipelineClusterAzureAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterAzureAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterAzureAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.putLogAnalyticsInfo">PutLogAnalyticsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetFirstOnDemand">ResetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetLogAnalyticsInfo">ResetLogAnalyticsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetSpotBidMaxPrice">ResetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogAnalyticsInfo` <a name="PutLogAnalyticsInfo" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.putLogAnalyticsInfo"></a>

```go
func PutLogAnalyticsInfo(value PipelineClusterAzureAttributesLogAnalyticsInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.putLogAnalyticsInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo">PipelineClusterAzureAttributesLogAnalyticsInfo</a>

---

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetFirstOnDemand` <a name="ResetFirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetFirstOnDemand"></a>

```go
func ResetFirstOnDemand()
```

##### `ResetLogAnalyticsInfo` <a name="ResetLogAnalyticsInfo" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetLogAnalyticsInfo"></a>

```go
func ResetLogAnalyticsInfo()
```

##### `ResetSpotBidMaxPrice` <a name="ResetSpotBidMaxPrice" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```go
func ResetSpotBidMaxPrice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.logAnalyticsInfo">LogAnalyticsInfo</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference">PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemandInput">FirstOnDemandInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.logAnalyticsInfoInput">LogAnalyticsInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo">PipelineClusterAzureAttributesLogAnalyticsInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput">SpotBidMaxPriceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemand">FirstOnDemand</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogAnalyticsInfo`<sup>Required</sup> <a name="LogAnalyticsInfo" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.logAnalyticsInfo"></a>

```go
func LogAnalyticsInfo() PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference">PipelineClusterAzureAttributesLogAnalyticsInfoOutputReference</a>

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `FirstOnDemandInput`<sup>Optional</sup> <a name="FirstOnDemandInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemandInput"></a>

```go
func FirstOnDemandInput() *f64
```

- *Type:* *f64

---

##### `LogAnalyticsInfoInput`<sup>Optional</sup> <a name="LogAnalyticsInfoInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.logAnalyticsInfoInput"></a>

```go
func LogAnalyticsInfoInput() PipelineClusterAzureAttributesLogAnalyticsInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesLogAnalyticsInfo">PipelineClusterAzureAttributesLogAnalyticsInfo</a>

---

##### `SpotBidMaxPriceInput`<sup>Optional</sup> <a name="SpotBidMaxPriceInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```go
func SpotBidMaxPriceInput() *f64
```

- *Type:* *f64

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `FirstOnDemand`<sup>Required</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemand"></a>

```go
func FirstOnDemand() *f64
```

- *Type:* *f64

---

##### `SpotBidMaxPrice`<sup>Required</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```go
func SpotBidMaxPrice() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---


### PipelineClusterClusterLogConfDbfsOutputReference <a name="PipelineClusterClusterLogConfDbfsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterClusterLogConfDbfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterClusterLogConfDbfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---


### PipelineClusterClusterLogConfOutputReference <a name="PipelineClusterClusterLogConfOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterClusterLogConfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterClusterLogConfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs">PutDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetDbfs">ResetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDbfs` <a name="PutDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs"></a>

```go
func PutDbfs(value PipelineClusterClusterLogConfDbfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3"></a>

```go
func PutS3(value PipelineClusterClusterLogConfS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putVolumes"></a>

```go
func PutVolumes(value PipelineClusterClusterLogConfVolumes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putVolumes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumes">PipelineClusterClusterLogConfVolumes</a>

---

##### `ResetDbfs` <a name="ResetDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetDbfs"></a>

```go
func ResetDbfs()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetS3"></a>

```go
func ResetS3()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference">PipelineClusterClusterLogConfDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference">PipelineClusterClusterLogConfS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference">PipelineClusterClusterLogConfVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfsInput">DbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.volumesInput">VolumesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumes">PipelineClusterClusterLogConfVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dbfs`<sup>Required</sup> <a name="Dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfs"></a>

```go
func Dbfs() PipelineClusterClusterLogConfDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference">PipelineClusterClusterLogConfDbfsOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3"></a>

```go
func S3() PipelineClusterClusterLogConfS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference">PipelineClusterClusterLogConfS3OutputReference</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.volumes"></a>

```go
func Volumes() PipelineClusterClusterLogConfVolumesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference">PipelineClusterClusterLogConfVolumesOutputReference</a>

---

##### `DbfsInput`<sup>Optional</sup> <a name="DbfsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfsInput"></a>

```go
func DbfsInput() PipelineClusterClusterLogConfDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3Input"></a>

```go
func S3Input() PipelineClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.volumesInput"></a>

```go
func VolumesInput() PipelineClusterClusterLogConfVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumes">PipelineClusterClusterLogConfVolumes</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---


### PipelineClusterClusterLogConfS3OutputReference <a name="PipelineClusterClusterLogConfS3OutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterClusterLogConfS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterClusterLogConfS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetCannedAcl">ResetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEnableEncryption">ResetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCannedAcl` <a name="ResetCannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetCannedAcl"></a>

```go
func ResetCannedAcl()
```

##### `ResetEnableEncryption` <a name="ResetEnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEnableEncryption"></a>

```go
func ResetEnableEncryption()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAclInput">CannedAclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryptionInput">EnableEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CannedAclInput`<sup>Optional</sup> <a name="CannedAclInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAclInput"></a>

```go
func CannedAclInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `EnableEncryptionInput`<sup>Optional</sup> <a name="EnableEncryptionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryptionInput"></a>

```go
func EnableEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CannedAcl`<sup>Required</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAcl"></a>

```go
func CannedAcl() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryption"></a>

```go
func EnableEncryption() interface{}
```

- *Type:* interface{}

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterClusterLogConfS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---


### PipelineClusterClusterLogConfVolumesOutputReference <a name="PipelineClusterClusterLogConfVolumesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterClusterLogConfVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterClusterLogConfVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumes">PipelineClusterClusterLogConfVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterClusterLogConfVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfVolumes">PipelineClusterClusterLogConfVolumes</a>

---


### PipelineClusterGcpAttributesOutputReference <a name="PipelineClusterGcpAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterGcpAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterGcpAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetGoogleServiceAccount">ResetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetLocalSsdCount">ResetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetGoogleServiceAccount` <a name="ResetGoogleServiceAccount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetGoogleServiceAccount"></a>

```go
func ResetGoogleServiceAccount()
```

##### `ResetLocalSsdCount` <a name="ResetLocalSsdCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetLocalSsdCount"></a>

```go
func ResetLocalSsdCount()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetZoneId"></a>

```go
func ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccountInput">GoogleServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCountInput">LocalSsdCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCount">LocalSsdCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `GoogleServiceAccountInput`<sup>Optional</sup> <a name="GoogleServiceAccountInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccountInput"></a>

```go
func GoogleServiceAccountInput() *string
```

- *Type:* *string

---

##### `LocalSsdCountInput`<sup>Optional</sup> <a name="LocalSsdCountInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCountInput"></a>

```go
func LocalSsdCountInput() *f64
```

- *Type:* *f64

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `GoogleServiceAccount`<sup>Required</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccount"></a>

```go
func GoogleServiceAccount() *string
```

- *Type:* *string

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCount"></a>

```go
func LocalSsdCount() *f64
```

- *Type:* *f64

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---


### PipelineClusterInitScriptsAbfssOutputReference <a name="PipelineClusterInitScriptsAbfssOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterInitScriptsAbfssOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterInitScriptsAbfssOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---


### PipelineClusterInitScriptsDbfsOutputReference <a name="PipelineClusterInitScriptsDbfsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterInitScriptsDbfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterInitScriptsDbfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---


### PipelineClusterInitScriptsFileOutputReference <a name="PipelineClusterInitScriptsFileOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterInitScriptsFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterInitScriptsFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---


### PipelineClusterInitScriptsGcsOutputReference <a name="PipelineClusterInitScriptsGcsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterInitScriptsGcsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterInitScriptsGcsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---


### PipelineClusterInitScriptsList <a name="PipelineClusterInitScriptsList" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterInitScriptsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PipelineClusterInitScriptsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get"></a>

```go
func Get(index *f64) PipelineClusterInitScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineClusterInitScriptsOutputReference <a name="PipelineClusterInitScriptsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterInitScriptsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PipelineClusterInitScriptsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss">PutAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs">PutDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs">PutGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace">PutWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetAbfss">ResetAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetDbfs">ResetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetGcs">ResetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetWorkspace">ResetWorkspace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbfss` <a name="PutAbfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss"></a>

```go
func PutAbfss(value PipelineClusterInitScriptsAbfss)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---

##### `PutDbfs` <a name="PutDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs"></a>

```go
func PutDbfs(value PipelineClusterInitScriptsDbfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---

##### `PutFile` <a name="PutFile" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile"></a>

```go
func PutFile(value PipelineClusterInitScriptsFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---

##### `PutGcs` <a name="PutGcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs"></a>

```go
func PutGcs(value PipelineClusterInitScriptsGcs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3"></a>

```go
func PutS3(value PipelineClusterInitScriptsS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putVolumes"></a>

```go
func PutVolumes(value PipelineClusterInitScriptsVolumes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putVolumes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

---

##### `PutWorkspace` <a name="PutWorkspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace"></a>

```go
func PutWorkspace(value PipelineClusterInitScriptsWorkspace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---

##### `ResetAbfss` <a name="ResetAbfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetAbfss"></a>

```go
func ResetAbfss()
```

##### `ResetDbfs` <a name="ResetDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetDbfs"></a>

```go
func ResetDbfs()
```

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetFile"></a>

```go
func ResetFile()
```

##### `ResetGcs` <a name="ResetGcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetGcs"></a>

```go
func ResetGcs()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetS3"></a>

```go
func ResetS3()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetVolumes"></a>

```go
func ResetVolumes()
```

##### `ResetWorkspace` <a name="ResetWorkspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetWorkspace"></a>

```go
func ResetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfss">Abfss</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference">PipelineClusterInitScriptsAbfssOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference">PipelineClusterInitScriptsDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference">PipelineClusterInitScriptsFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference">PipelineClusterInitScriptsGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference">PipelineClusterInitScriptsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference">PipelineClusterInitScriptsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspace">Workspace</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference">PipelineClusterInitScriptsWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfssInput">AbfssInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfsInput">DbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcsInput">GcsInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumesInput">VolumesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Abfss`<sup>Required</sup> <a name="Abfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfss"></a>

```go
func Abfss() PipelineClusterInitScriptsAbfssOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference">PipelineClusterInitScriptsAbfssOutputReference</a>

---

##### `Dbfs`<sup>Required</sup> <a name="Dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfs"></a>

```go
func Dbfs() PipelineClusterInitScriptsDbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference">PipelineClusterInitScriptsDbfsOutputReference</a>

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.file"></a>

```go
func File() PipelineClusterInitScriptsFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference">PipelineClusterInitScriptsFileOutputReference</a>

---

##### `Gcs`<sup>Required</sup> <a name="Gcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcs"></a>

```go
func Gcs() PipelineClusterInitScriptsGcsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference">PipelineClusterInitScriptsGcsOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3"></a>

```go
func S3() PipelineClusterInitScriptsS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference">PipelineClusterInitScriptsS3OutputReference</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumes"></a>

```go
func Volumes() PipelineClusterInitScriptsVolumesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference">PipelineClusterInitScriptsVolumesOutputReference</a>

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspace"></a>

```go
func Workspace() PipelineClusterInitScriptsWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference">PipelineClusterInitScriptsWorkspaceOutputReference</a>

---

##### `AbfssInput`<sup>Optional</sup> <a name="AbfssInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfssInput"></a>

```go
func AbfssInput() PipelineClusterInitScriptsAbfss
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---

##### `DbfsInput`<sup>Optional</sup> <a name="DbfsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfsInput"></a>

```go
func DbfsInput() PipelineClusterInitScriptsDbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fileInput"></a>

```go
func FileInput() PipelineClusterInitScriptsFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---

##### `GcsInput`<sup>Optional</sup> <a name="GcsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcsInput"></a>

```go
func GcsInput() PipelineClusterInitScriptsGcs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3Input"></a>

```go
func S3Input() PipelineClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumesInput"></a>

```go
func VolumesInput() PipelineClusterInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspaceInput"></a>

```go
func WorkspaceInput() PipelineClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineClusterInitScriptsS3OutputReference <a name="PipelineClusterInitScriptsS3OutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterInitScriptsS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterInitScriptsS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetCannedAcl">ResetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEnableEncryption">ResetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCannedAcl` <a name="ResetCannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetCannedAcl"></a>

```go
func ResetCannedAcl()
```

##### `ResetEnableEncryption` <a name="ResetEnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEnableEncryption"></a>

```go
func ResetEnableEncryption()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAclInput">CannedAclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryptionInput">EnableEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAcl">CannedAcl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CannedAclInput`<sup>Optional</sup> <a name="CannedAclInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAclInput"></a>

```go
func CannedAclInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `EnableEncryptionInput`<sup>Optional</sup> <a name="EnableEncryptionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryptionInput"></a>

```go
func EnableEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CannedAcl`<sup>Required</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAcl"></a>

```go
func CannedAcl() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryption"></a>

```go
func EnableEncryption() interface{}
```

- *Type:* interface{}

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterInitScriptsS3
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---


### PipelineClusterInitScriptsVolumesOutputReference <a name="PipelineClusterInitScriptsVolumesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterInitScriptsVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterInitScriptsVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterInitScriptsVolumes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

---


### PipelineClusterInitScriptsWorkspaceOutputReference <a name="PipelineClusterInitScriptsWorkspaceOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterInitScriptsWorkspaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineClusterInitScriptsWorkspaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineClusterInitScriptsWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---


### PipelineClusterList <a name="PipelineClusterList" id="@cdktf/provider-databricks.pipeline.PipelineClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PipelineClusterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.get"></a>

```go
func Get(index *f64) PipelineClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineClusterOutputReference <a name="PipelineClusterOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PipelineClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale">PutAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes">PutAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes">PutAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf">PutClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes">PutGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts">PutInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetApplyPolicyDefaultValues">ResetApplyPolicyDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAutoscale">ResetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAwsAttributes">ResetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAzureAttributes">ResetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetClusterLogConf">ResetClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverInstancePoolId">ResetDriverInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverNodeTypeId">ResetDriverNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetEnableLocalDiskEncryption">ResetEnableLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetGcpAttributes">ResetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInitScripts">ResetInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInstancePoolId">ResetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNodeTypeId">ResetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkConf">ResetSparkConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkEnvVars">ResetSparkEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSshPublicKeys">ResetSshPublicKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscale` <a name="PutAutoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale"></a>

```go
func PutAutoscale(value PipelineClusterAutoscale)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---

##### `PutAwsAttributes` <a name="PutAwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes"></a>

```go
func PutAwsAttributes(value PipelineClusterAwsAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---

##### `PutAzureAttributes` <a name="PutAzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes"></a>

```go
func PutAzureAttributes(value PipelineClusterAzureAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---

##### `PutClusterLogConf` <a name="PutClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf"></a>

```go
func PutClusterLogConf(value PipelineClusterClusterLogConf)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---

##### `PutGcpAttributes` <a name="PutGcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes"></a>

```go
func PutGcpAttributes(value PipelineClusterGcpAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---

##### `PutInitScripts` <a name="PutInitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts"></a>

```go
func PutInitScripts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplyPolicyDefaultValues` <a name="ResetApplyPolicyDefaultValues" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetApplyPolicyDefaultValues"></a>

```go
func ResetApplyPolicyDefaultValues()
```

##### `ResetAutoscale` <a name="ResetAutoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAutoscale"></a>

```go
func ResetAutoscale()
```

##### `ResetAwsAttributes` <a name="ResetAwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAwsAttributes"></a>

```go
func ResetAwsAttributes()
```

##### `ResetAzureAttributes` <a name="ResetAzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAzureAttributes"></a>

```go
func ResetAzureAttributes()
```

##### `ResetClusterLogConf` <a name="ResetClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetClusterLogConf"></a>

```go
func ResetClusterLogConf()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetCustomTags"></a>

```go
func ResetCustomTags()
```

##### `ResetDriverInstancePoolId` <a name="ResetDriverInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverInstancePoolId"></a>

```go
func ResetDriverInstancePoolId()
```

##### `ResetDriverNodeTypeId` <a name="ResetDriverNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverNodeTypeId"></a>

```go
func ResetDriverNodeTypeId()
```

##### `ResetEnableLocalDiskEncryption` <a name="ResetEnableLocalDiskEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetEnableLocalDiskEncryption"></a>

```go
func ResetEnableLocalDiskEncryption()
```

##### `ResetGcpAttributes` <a name="ResetGcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetGcpAttributes"></a>

```go
func ResetGcpAttributes()
```

##### `ResetInitScripts` <a name="ResetInitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInitScripts"></a>

```go
func ResetInitScripts()
```

##### `ResetInstancePoolId` <a name="ResetInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInstancePoolId"></a>

```go
func ResetInstancePoolId()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetNodeTypeId` <a name="ResetNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNodeTypeId"></a>

```go
func ResetNodeTypeId()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNumWorkers"></a>

```go
func ResetNumWorkers()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetPolicyId"></a>

```go
func ResetPolicyId()
```

##### `ResetSparkConf` <a name="ResetSparkConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkConf"></a>

```go
func ResetSparkConf()
```

##### `ResetSparkEnvVars` <a name="ResetSparkEnvVars" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkEnvVars"></a>

```go
func ResetSparkEnvVars()
```

##### `ResetSshPublicKeys` <a name="ResetSshPublicKeys" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSshPublicKeys"></a>

```go
func ResetSshPublicKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference">PipelineClusterAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference">PipelineClusterAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference">PipelineClusterAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConf">ClusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference">PipelineClusterClusterLogConfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference">PipelineClusterGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScripts">InitScripts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList">PipelineClusterInitScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValuesInput">ApplyPolicyDefaultValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscaleInput">AutoscaleInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributesInput">AwsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributesInput">AzureAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConfInput">ClusterLogConfInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTagsInput">CustomTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolIdInput">DriverInstancePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeIdInput">DriverNodeTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryptionInput">EnableLocalDiskEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributesInput">GcpAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScriptsInput">InitScriptsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeIdInput">NodeTypeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkersInput">NumWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConfInput">SparkConfInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVarsInput">SparkEnvVarsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValues">ApplyPolicyDefaultValues</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTags">CustomTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolId">DriverInstancePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeId">DriverNodeTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryption">EnableLocalDiskEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeId">NodeTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkers">NumWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConf">SparkConf</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVars">SparkEnvVars</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Autoscale`<sup>Required</sup> <a name="Autoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscale"></a>

```go
func Autoscale() PipelineClusterAutoscaleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference">PipelineClusterAutoscaleOutputReference</a>

---

##### `AwsAttributes`<sup>Required</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributes"></a>

```go
func AwsAttributes() PipelineClusterAwsAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference">PipelineClusterAwsAttributesOutputReference</a>

---

##### `AzureAttributes`<sup>Required</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributes"></a>

```go
func AzureAttributes() PipelineClusterAzureAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference">PipelineClusterAzureAttributesOutputReference</a>

---

##### `ClusterLogConf`<sup>Required</sup> <a name="ClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConf"></a>

```go
func ClusterLogConf() PipelineClusterClusterLogConfOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference">PipelineClusterClusterLogConfOutputReference</a>

---

##### `GcpAttributes`<sup>Required</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributes"></a>

```go
func GcpAttributes() PipelineClusterGcpAttributesOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference">PipelineClusterGcpAttributesOutputReference</a>

---

##### `InitScripts`<sup>Required</sup> <a name="InitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScripts"></a>

```go
func InitScripts() PipelineClusterInitScriptsList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList">PipelineClusterInitScriptsList</a>

---

##### `ApplyPolicyDefaultValuesInput`<sup>Optional</sup> <a name="ApplyPolicyDefaultValuesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValuesInput"></a>

```go
func ApplyPolicyDefaultValuesInput() interface{}
```

- *Type:* interface{}

---

##### `AutoscaleInput`<sup>Optional</sup> <a name="AutoscaleInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscaleInput"></a>

```go
func AutoscaleInput() PipelineClusterAutoscale
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---

##### `AwsAttributesInput`<sup>Optional</sup> <a name="AwsAttributesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributesInput"></a>

```go
func AwsAttributesInput() PipelineClusterAwsAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---

##### `AzureAttributesInput`<sup>Optional</sup> <a name="AzureAttributesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributesInput"></a>

```go
func AzureAttributesInput() PipelineClusterAzureAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---

##### `ClusterLogConfInput`<sup>Optional</sup> <a name="ClusterLogConfInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConfInput"></a>

```go
func ClusterLogConfInput() PipelineClusterClusterLogConf
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTagsInput"></a>

```go
func CustomTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DriverInstancePoolIdInput`<sup>Optional</sup> <a name="DriverInstancePoolIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolIdInput"></a>

```go
func DriverInstancePoolIdInput() *string
```

- *Type:* *string

---

##### `DriverNodeTypeIdInput`<sup>Optional</sup> <a name="DriverNodeTypeIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeIdInput"></a>

```go
func DriverNodeTypeIdInput() *string
```

- *Type:* *string

---

##### `EnableLocalDiskEncryptionInput`<sup>Optional</sup> <a name="EnableLocalDiskEncryptionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryptionInput"></a>

```go
func EnableLocalDiskEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `GcpAttributesInput`<sup>Optional</sup> <a name="GcpAttributesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributesInput"></a>

```go
func GcpAttributesInput() PipelineClusterGcpAttributes
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---

##### `InitScriptsInput`<sup>Optional</sup> <a name="InitScriptsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScriptsInput"></a>

```go
func InitScriptsInput() interface{}
```

- *Type:* interface{}

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolIdInput"></a>

```go
func InstancePoolIdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `NodeTypeIdInput`<sup>Optional</sup> <a name="NodeTypeIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeIdInput"></a>

```go
func NodeTypeIdInput() *string
```

- *Type:* *string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkersInput"></a>

```go
func NumWorkersInput() *f64
```

- *Type:* *f64

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `SparkConfInput`<sup>Optional</sup> <a name="SparkConfInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConfInput"></a>

```go
func SparkConfInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SparkEnvVarsInput`<sup>Optional</sup> <a name="SparkEnvVarsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVarsInput"></a>

```go
func SparkEnvVarsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeysInput"></a>

```go
func SshPublicKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApplyPolicyDefaultValues`<sup>Required</sup> <a name="ApplyPolicyDefaultValues" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValues"></a>

```go
func ApplyPolicyDefaultValues() interface{}
```

- *Type:* interface{}

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTags"></a>

```go
func CustomTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DriverInstancePoolId`<sup>Required</sup> <a name="DriverInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolId"></a>

```go
func DriverInstancePoolId() *string
```

- *Type:* *string

---

##### `DriverNodeTypeId`<sup>Required</sup> <a name="DriverNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeId"></a>

```go
func DriverNodeTypeId() *string
```

- *Type:* *string

---

##### `EnableLocalDiskEncryption`<sup>Required</sup> <a name="EnableLocalDiskEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryption"></a>

```go
func EnableLocalDiskEncryption() interface{}
```

- *Type:* interface{}

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolId"></a>

```go
func InstancePoolId() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeId"></a>

```go
func NodeTypeId() *string
```

- *Type:* *string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkers"></a>

```go
func NumWorkers() *f64
```

- *Type:* *f64

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `SparkConf`<sup>Required</sup> <a name="SparkConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConf"></a>

```go
func SparkConf() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SparkEnvVars`<sup>Required</sup> <a name="SparkEnvVars" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVars"></a>

```go
func SparkEnvVars() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeys"></a>

```go
func SshPublicKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineDeploymentOutputReference <a name="PipelineDeploymentOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resetMetadataFilePath">ResetMetadataFilePath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resetKind"></a>

```go
func ResetKind()
```

##### `ResetMetadataFilePath` <a name="ResetMetadataFilePath" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.resetMetadataFilePath"></a>

```go
func ResetMetadataFilePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.metadataFilePathInput">MetadataFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.metadataFilePath">MetadataFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `MetadataFilePathInput`<sup>Optional</sup> <a name="MetadataFilePathInput" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.metadataFilePathInput"></a>

```go
func MetadataFilePathInput() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `MetadataFilePath`<sup>Required</sup> <a name="MetadataFilePath" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.metadataFilePath"></a>

```go
func MetadataFilePath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineDeployment
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineDeployment">PipelineDeployment</a>

---


### PipelineFiltersOutputReference <a name="PipelineFiltersOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetInclude"></a>

```go
func ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.includeInput">IncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.excludeInput"></a>

```go
func ExcludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.includeInput"></a>

```go
func IncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineFilters
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---


### PipelineGatewayDefinitionOutputReference <a name="PipelineGatewayDefinitionOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineGatewayDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineGatewayDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.resetGatewayStorageCatalog">ResetGatewayStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.resetGatewayStorageName">ResetGatewayStorageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.resetGatewayStorageSchema">ResetGatewayStorageSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.resetConnectionId"></a>

```go
func ResetConnectionId()
```

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetGatewayStorageCatalog` <a name="ResetGatewayStorageCatalog" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.resetGatewayStorageCatalog"></a>

```go
func ResetGatewayStorageCatalog()
```

##### `ResetGatewayStorageName` <a name="ResetGatewayStorageName" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.resetGatewayStorageName"></a>

```go
func ResetGatewayStorageName()
```

##### `ResetGatewayStorageSchema` <a name="ResetGatewayStorageSchema" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.resetGatewayStorageSchema"></a>

```go
func ResetGatewayStorageSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.gatewayStorageCatalogInput">GatewayStorageCatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.gatewayStorageNameInput">GatewayStorageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.gatewayStorageSchemaInput">GatewayStorageSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.gatewayStorageCatalog">GatewayStorageCatalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.gatewayStorageName">GatewayStorageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.gatewayStorageSchema">GatewayStorageSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition">PipelineGatewayDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `GatewayStorageCatalogInput`<sup>Optional</sup> <a name="GatewayStorageCatalogInput" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.gatewayStorageCatalogInput"></a>

```go
func GatewayStorageCatalogInput() *string
```

- *Type:* *string

---

##### `GatewayStorageNameInput`<sup>Optional</sup> <a name="GatewayStorageNameInput" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.gatewayStorageNameInput"></a>

```go
func GatewayStorageNameInput() *string
```

- *Type:* *string

---

##### `GatewayStorageSchemaInput`<sup>Optional</sup> <a name="GatewayStorageSchemaInput" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.gatewayStorageSchemaInput"></a>

```go
func GatewayStorageSchemaInput() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `GatewayStorageCatalog`<sup>Required</sup> <a name="GatewayStorageCatalog" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.gatewayStorageCatalog"></a>

```go
func GatewayStorageCatalog() *string
```

- *Type:* *string

---

##### `GatewayStorageName`<sup>Required</sup> <a name="GatewayStorageName" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.gatewayStorageName"></a>

```go
func GatewayStorageName() *string
```

- *Type:* *string

---

##### `GatewayStorageSchema`<sup>Required</sup> <a name="GatewayStorageSchema" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.gatewayStorageSchema"></a>

```go
func GatewayStorageSchema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineGatewayDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineGatewayDefinition
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineGatewayDefinition">PipelineGatewayDefinition</a>

---


### PipelineIngestionDefinitionObjectsList <a name="PipelineIngestionDefinitionObjectsList" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineIngestionDefinitionObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PipelineIngestionDefinitionObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.get"></a>

```go
func Get(index *f64) PipelineIngestionDefinitionObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineIngestionDefinitionObjectsOutputReference <a name="PipelineIngestionDefinitionObjectsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineIngestionDefinitionObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PipelineIngestionDefinitionObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.putReport">PutReport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.resetReport">ResetReport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.resetTable">ResetTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReport` <a name="PutReport" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.putReport"></a>

```go
func PutReport(value PipelineIngestionDefinitionObjectsReport)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.putReport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport">PipelineIngestionDefinitionObjectsReport</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.putSchema"></a>

```go
func PutSchema(value PipelineIngestionDefinitionObjectsSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema">PipelineIngestionDefinitionObjectsSchema</a>

---

##### `PutTable` <a name="PutTable" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.putTable"></a>

```go
func PutTable(value PipelineIngestionDefinitionObjectsTable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.putTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable">PipelineIngestionDefinitionObjectsTable</a>

---

##### `ResetReport` <a name="ResetReport" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.resetReport"></a>

```go
func ResetReport()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.resetTable"></a>

```go
func ResetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.report">Report</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference">PipelineIngestionDefinitionObjectsReportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference">PipelineIngestionDefinitionObjectsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference">PipelineIngestionDefinitionObjectsTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.reportInput">ReportInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport">PipelineIngestionDefinitionObjectsReport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema">PipelineIngestionDefinitionObjectsSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.tableInput">TableInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable">PipelineIngestionDefinitionObjectsTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Report`<sup>Required</sup> <a name="Report" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.report"></a>

```go
func Report() PipelineIngestionDefinitionObjectsReportOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference">PipelineIngestionDefinitionObjectsReportOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.schema"></a>

```go
func Schema() PipelineIngestionDefinitionObjectsSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference">PipelineIngestionDefinitionObjectsSchemaOutputReference</a>

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.table"></a>

```go
func Table() PipelineIngestionDefinitionObjectsTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference">PipelineIngestionDefinitionObjectsTableOutputReference</a>

---

##### `ReportInput`<sup>Optional</sup> <a name="ReportInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.reportInput"></a>

```go
func ReportInput() PipelineIngestionDefinitionObjectsReport
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport">PipelineIngestionDefinitionObjectsReport</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.schemaInput"></a>

```go
func SchemaInput() PipelineIngestionDefinitionObjectsSchema
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema">PipelineIngestionDefinitionObjectsSchema</a>

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.tableInput"></a>

```go
func TableInput() PipelineIngestionDefinitionObjectsTable
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable">PipelineIngestionDefinitionObjectsTable</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineIngestionDefinitionObjectsReportOutputReference <a name="PipelineIngestionDefinitionObjectsReportOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineIngestionDefinitionObjectsReportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineIngestionDefinitionObjectsReportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.putTableConfiguration">PutTableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.resetDestinationCatalog">ResetDestinationCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.resetDestinationSchema">ResetDestinationSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.resetDestinationTable">ResetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.resetSourceUrl">ResetSourceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.resetTableConfiguration">ResetTableConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTableConfiguration` <a name="PutTableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.putTableConfiguration"></a>

```go
func PutTableConfiguration(value PipelineIngestionDefinitionObjectsReportTableConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.putTableConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration">PipelineIngestionDefinitionObjectsReportTableConfiguration</a>

---

##### `ResetDestinationCatalog` <a name="ResetDestinationCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.resetDestinationCatalog"></a>

```go
func ResetDestinationCatalog()
```

##### `ResetDestinationSchema` <a name="ResetDestinationSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.resetDestinationSchema"></a>

```go
func ResetDestinationSchema()
```

##### `ResetDestinationTable` <a name="ResetDestinationTable" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.resetDestinationTable"></a>

```go
func ResetDestinationTable()
```

##### `ResetSourceUrl` <a name="ResetSourceUrl" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.resetSourceUrl"></a>

```go
func ResetSourceUrl()
```

##### `ResetTableConfiguration` <a name="ResetTableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.resetTableConfiguration"></a>

```go
func ResetTableConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.tableConfiguration">TableConfiguration</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference">PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.destinationCatalogInput">DestinationCatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.destinationSchemaInput">DestinationSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.destinationTableInput">DestinationTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.sourceUrlInput">SourceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.tableConfigurationInput">TableConfigurationInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration">PipelineIngestionDefinitionObjectsReportTableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.destinationCatalog">DestinationCatalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.destinationSchema">DestinationSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.destinationTable">DestinationTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport">PipelineIngestionDefinitionObjectsReport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableConfiguration`<sup>Required</sup> <a name="TableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.tableConfiguration"></a>

```go
func TableConfiguration() PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference">PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference</a>

---

##### `DestinationCatalogInput`<sup>Optional</sup> <a name="DestinationCatalogInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.destinationCatalogInput"></a>

```go
func DestinationCatalogInput() *string
```

- *Type:* *string

---

##### `DestinationSchemaInput`<sup>Optional</sup> <a name="DestinationSchemaInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.destinationSchemaInput"></a>

```go
func DestinationSchemaInput() *string
```

- *Type:* *string

---

##### `DestinationTableInput`<sup>Optional</sup> <a name="DestinationTableInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.destinationTableInput"></a>

```go
func DestinationTableInput() *string
```

- *Type:* *string

---

##### `SourceUrlInput`<sup>Optional</sup> <a name="SourceUrlInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.sourceUrlInput"></a>

```go
func SourceUrlInput() *string
```

- *Type:* *string

---

##### `TableConfigurationInput`<sup>Optional</sup> <a name="TableConfigurationInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.tableConfigurationInput"></a>

```go
func TableConfigurationInput() PipelineIngestionDefinitionObjectsReportTableConfiguration
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration">PipelineIngestionDefinitionObjectsReportTableConfiguration</a>

---

##### `DestinationCatalog`<sup>Required</sup> <a name="DestinationCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.destinationCatalog"></a>

```go
func DestinationCatalog() *string
```

- *Type:* *string

---

##### `DestinationSchema`<sup>Required</sup> <a name="DestinationSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.destinationSchema"></a>

```go
func DestinationSchema() *string
```

- *Type:* *string

---

##### `DestinationTable`<sup>Required</sup> <a name="DestinationTable" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.destinationTable"></a>

```go
func DestinationTable() *string
```

- *Type:* *string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.sourceUrl"></a>

```go
func SourceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineIngestionDefinitionObjectsReport
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReport">PipelineIngestionDefinitionObjectsReport</a>

---


### PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference <a name="PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.resetPrimaryKeys">ResetPrimaryKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.resetSalesforceIncludeFormulaFields">ResetSalesforceIncludeFormulaFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.resetScdType">ResetScdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.resetSequenceBy">ResetSequenceBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimaryKeys` <a name="ResetPrimaryKeys" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.resetPrimaryKeys"></a>

```go
func ResetPrimaryKeys()
```

##### `ResetSalesforceIncludeFormulaFields` <a name="ResetSalesforceIncludeFormulaFields" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.resetSalesforceIncludeFormulaFields"></a>

```go
func ResetSalesforceIncludeFormulaFields()
```

##### `ResetScdType` <a name="ResetScdType" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.resetScdType"></a>

```go
func ResetScdType()
```

##### `ResetSequenceBy` <a name="ResetSequenceBy" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.resetSequenceBy"></a>

```go
func ResetSequenceBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.primaryKeysInput">PrimaryKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.salesforceIncludeFormulaFieldsInput">SalesforceIncludeFormulaFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.scdTypeInput">ScdTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.sequenceByInput">SequenceByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.primaryKeys">PrimaryKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.salesforceIncludeFormulaFields">SalesforceIncludeFormulaFields</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.scdType">ScdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.sequenceBy">SequenceBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration">PipelineIngestionDefinitionObjectsReportTableConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryKeysInput`<sup>Optional</sup> <a name="PrimaryKeysInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.primaryKeysInput"></a>

```go
func PrimaryKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `SalesforceIncludeFormulaFieldsInput`<sup>Optional</sup> <a name="SalesforceIncludeFormulaFieldsInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.salesforceIncludeFormulaFieldsInput"></a>

```go
func SalesforceIncludeFormulaFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `ScdTypeInput`<sup>Optional</sup> <a name="ScdTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.scdTypeInput"></a>

```go
func ScdTypeInput() *string
```

- *Type:* *string

---

##### `SequenceByInput`<sup>Optional</sup> <a name="SequenceByInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.sequenceByInput"></a>

```go
func SequenceByInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrimaryKeys`<sup>Required</sup> <a name="PrimaryKeys" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.primaryKeys"></a>

```go
func PrimaryKeys() *[]*string
```

- *Type:* *[]*string

---

##### `SalesforceIncludeFormulaFields`<sup>Required</sup> <a name="SalesforceIncludeFormulaFields" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.salesforceIncludeFormulaFields"></a>

```go
func SalesforceIncludeFormulaFields() interface{}
```

- *Type:* interface{}

---

##### `ScdType`<sup>Required</sup> <a name="ScdType" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.scdType"></a>

```go
func ScdType() *string
```

- *Type:* *string

---

##### `SequenceBy`<sup>Required</sup> <a name="SequenceBy" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.sequenceBy"></a>

```go
func SequenceBy() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineIngestionDefinitionObjectsReportTableConfiguration
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsReportTableConfiguration">PipelineIngestionDefinitionObjectsReportTableConfiguration</a>

---


### PipelineIngestionDefinitionObjectsSchemaOutputReference <a name="PipelineIngestionDefinitionObjectsSchemaOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineIngestionDefinitionObjectsSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineIngestionDefinitionObjectsSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.putTableConfiguration">PutTableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.resetDestinationCatalog">ResetDestinationCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.resetDestinationSchema">ResetDestinationSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.resetSourceCatalog">ResetSourceCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.resetSourceSchema">ResetSourceSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.resetTableConfiguration">ResetTableConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTableConfiguration` <a name="PutTableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.putTableConfiguration"></a>

```go
func PutTableConfiguration(value PipelineIngestionDefinitionObjectsSchemaTableConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.putTableConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration">PipelineIngestionDefinitionObjectsSchemaTableConfiguration</a>

---

##### `ResetDestinationCatalog` <a name="ResetDestinationCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.resetDestinationCatalog"></a>

```go
func ResetDestinationCatalog()
```

##### `ResetDestinationSchema` <a name="ResetDestinationSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.resetDestinationSchema"></a>

```go
func ResetDestinationSchema()
```

##### `ResetSourceCatalog` <a name="ResetSourceCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.resetSourceCatalog"></a>

```go
func ResetSourceCatalog()
```

##### `ResetSourceSchema` <a name="ResetSourceSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.resetSourceSchema"></a>

```go
func ResetSourceSchema()
```

##### `ResetTableConfiguration` <a name="ResetTableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.resetTableConfiguration"></a>

```go
func ResetTableConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.tableConfiguration">TableConfiguration</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference">PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.destinationCatalogInput">DestinationCatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.destinationSchemaInput">DestinationSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.sourceCatalogInput">SourceCatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.sourceSchemaInput">SourceSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.tableConfigurationInput">TableConfigurationInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration">PipelineIngestionDefinitionObjectsSchemaTableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.destinationCatalog">DestinationCatalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.destinationSchema">DestinationSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.sourceCatalog">SourceCatalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.sourceSchema">SourceSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema">PipelineIngestionDefinitionObjectsSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableConfiguration`<sup>Required</sup> <a name="TableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.tableConfiguration"></a>

```go
func TableConfiguration() PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference">PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference</a>

---

##### `DestinationCatalogInput`<sup>Optional</sup> <a name="DestinationCatalogInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.destinationCatalogInput"></a>

```go
func DestinationCatalogInput() *string
```

- *Type:* *string

---

##### `DestinationSchemaInput`<sup>Optional</sup> <a name="DestinationSchemaInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.destinationSchemaInput"></a>

```go
func DestinationSchemaInput() *string
```

- *Type:* *string

---

##### `SourceCatalogInput`<sup>Optional</sup> <a name="SourceCatalogInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.sourceCatalogInput"></a>

```go
func SourceCatalogInput() *string
```

- *Type:* *string

---

##### `SourceSchemaInput`<sup>Optional</sup> <a name="SourceSchemaInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.sourceSchemaInput"></a>

```go
func SourceSchemaInput() *string
```

- *Type:* *string

---

##### `TableConfigurationInput`<sup>Optional</sup> <a name="TableConfigurationInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.tableConfigurationInput"></a>

```go
func TableConfigurationInput() PipelineIngestionDefinitionObjectsSchemaTableConfiguration
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration">PipelineIngestionDefinitionObjectsSchemaTableConfiguration</a>

---

##### `DestinationCatalog`<sup>Required</sup> <a name="DestinationCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.destinationCatalog"></a>

```go
func DestinationCatalog() *string
```

- *Type:* *string

---

##### `DestinationSchema`<sup>Required</sup> <a name="DestinationSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.destinationSchema"></a>

```go
func DestinationSchema() *string
```

- *Type:* *string

---

##### `SourceCatalog`<sup>Required</sup> <a name="SourceCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.sourceCatalog"></a>

```go
func SourceCatalog() *string
```

- *Type:* *string

---

##### `SourceSchema`<sup>Required</sup> <a name="SourceSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.sourceSchema"></a>

```go
func SourceSchema() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineIngestionDefinitionObjectsSchema
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchema">PipelineIngestionDefinitionObjectsSchema</a>

---


### PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference <a name="PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.resetPrimaryKeys">ResetPrimaryKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.resetSalesforceIncludeFormulaFields">ResetSalesforceIncludeFormulaFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.resetScdType">ResetScdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.resetSequenceBy">ResetSequenceBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimaryKeys` <a name="ResetPrimaryKeys" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.resetPrimaryKeys"></a>

```go
func ResetPrimaryKeys()
```

##### `ResetSalesforceIncludeFormulaFields` <a name="ResetSalesforceIncludeFormulaFields" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.resetSalesforceIncludeFormulaFields"></a>

```go
func ResetSalesforceIncludeFormulaFields()
```

##### `ResetScdType` <a name="ResetScdType" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.resetScdType"></a>

```go
func ResetScdType()
```

##### `ResetSequenceBy` <a name="ResetSequenceBy" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.resetSequenceBy"></a>

```go
func ResetSequenceBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.primaryKeysInput">PrimaryKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.salesforceIncludeFormulaFieldsInput">SalesforceIncludeFormulaFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.scdTypeInput">ScdTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.sequenceByInput">SequenceByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.primaryKeys">PrimaryKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.salesforceIncludeFormulaFields">SalesforceIncludeFormulaFields</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.scdType">ScdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.sequenceBy">SequenceBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration">PipelineIngestionDefinitionObjectsSchemaTableConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryKeysInput`<sup>Optional</sup> <a name="PrimaryKeysInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.primaryKeysInput"></a>

```go
func PrimaryKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `SalesforceIncludeFormulaFieldsInput`<sup>Optional</sup> <a name="SalesforceIncludeFormulaFieldsInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.salesforceIncludeFormulaFieldsInput"></a>

```go
func SalesforceIncludeFormulaFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `ScdTypeInput`<sup>Optional</sup> <a name="ScdTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.scdTypeInput"></a>

```go
func ScdTypeInput() *string
```

- *Type:* *string

---

##### `SequenceByInput`<sup>Optional</sup> <a name="SequenceByInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.sequenceByInput"></a>

```go
func SequenceByInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrimaryKeys`<sup>Required</sup> <a name="PrimaryKeys" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.primaryKeys"></a>

```go
func PrimaryKeys() *[]*string
```

- *Type:* *[]*string

---

##### `SalesforceIncludeFormulaFields`<sup>Required</sup> <a name="SalesforceIncludeFormulaFields" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.salesforceIncludeFormulaFields"></a>

```go
func SalesforceIncludeFormulaFields() interface{}
```

- *Type:* interface{}

---

##### `ScdType`<sup>Required</sup> <a name="ScdType" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.scdType"></a>

```go
func ScdType() *string
```

- *Type:* *string

---

##### `SequenceBy`<sup>Required</sup> <a name="SequenceBy" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.sequenceBy"></a>

```go
func SequenceBy() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineIngestionDefinitionObjectsSchemaTableConfiguration
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsSchemaTableConfiguration">PipelineIngestionDefinitionObjectsSchemaTableConfiguration</a>

---


### PipelineIngestionDefinitionObjectsTableOutputReference <a name="PipelineIngestionDefinitionObjectsTableOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineIngestionDefinitionObjectsTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineIngestionDefinitionObjectsTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.putTableConfiguration">PutTableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetDestinationCatalog">ResetDestinationCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetDestinationSchema">ResetDestinationSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetDestinationTable">ResetDestinationTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetSourceCatalog">ResetSourceCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetSourceSchema">ResetSourceSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetSourceTable">ResetSourceTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetTableConfiguration">ResetTableConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTableConfiguration` <a name="PutTableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.putTableConfiguration"></a>

```go
func PutTableConfiguration(value PipelineIngestionDefinitionObjectsTableTableConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.putTableConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration">PipelineIngestionDefinitionObjectsTableTableConfiguration</a>

---

##### `ResetDestinationCatalog` <a name="ResetDestinationCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetDestinationCatalog"></a>

```go
func ResetDestinationCatalog()
```

##### `ResetDestinationSchema` <a name="ResetDestinationSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetDestinationSchema"></a>

```go
func ResetDestinationSchema()
```

##### `ResetDestinationTable` <a name="ResetDestinationTable" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetDestinationTable"></a>

```go
func ResetDestinationTable()
```

##### `ResetSourceCatalog` <a name="ResetSourceCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetSourceCatalog"></a>

```go
func ResetSourceCatalog()
```

##### `ResetSourceSchema` <a name="ResetSourceSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetSourceSchema"></a>

```go
func ResetSourceSchema()
```

##### `ResetSourceTable` <a name="ResetSourceTable" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetSourceTable"></a>

```go
func ResetSourceTable()
```

##### `ResetTableConfiguration` <a name="ResetTableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.resetTableConfiguration"></a>

```go
func ResetTableConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.tableConfiguration">TableConfiguration</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference">PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.destinationCatalogInput">DestinationCatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.destinationSchemaInput">DestinationSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.destinationTableInput">DestinationTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.sourceCatalogInput">SourceCatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.sourceSchemaInput">SourceSchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.sourceTableInput">SourceTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.tableConfigurationInput">TableConfigurationInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration">PipelineIngestionDefinitionObjectsTableTableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.destinationCatalog">DestinationCatalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.destinationSchema">DestinationSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.destinationTable">DestinationTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.sourceCatalog">SourceCatalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.sourceSchema">SourceSchema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.sourceTable">SourceTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable">PipelineIngestionDefinitionObjectsTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableConfiguration`<sup>Required</sup> <a name="TableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.tableConfiguration"></a>

```go
func TableConfiguration() PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference">PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference</a>

---

##### `DestinationCatalogInput`<sup>Optional</sup> <a name="DestinationCatalogInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.destinationCatalogInput"></a>

```go
func DestinationCatalogInput() *string
```

- *Type:* *string

---

##### `DestinationSchemaInput`<sup>Optional</sup> <a name="DestinationSchemaInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.destinationSchemaInput"></a>

```go
func DestinationSchemaInput() *string
```

- *Type:* *string

---

##### `DestinationTableInput`<sup>Optional</sup> <a name="DestinationTableInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.destinationTableInput"></a>

```go
func DestinationTableInput() *string
```

- *Type:* *string

---

##### `SourceCatalogInput`<sup>Optional</sup> <a name="SourceCatalogInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.sourceCatalogInput"></a>

```go
func SourceCatalogInput() *string
```

- *Type:* *string

---

##### `SourceSchemaInput`<sup>Optional</sup> <a name="SourceSchemaInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.sourceSchemaInput"></a>

```go
func SourceSchemaInput() *string
```

- *Type:* *string

---

##### `SourceTableInput`<sup>Optional</sup> <a name="SourceTableInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.sourceTableInput"></a>

```go
func SourceTableInput() *string
```

- *Type:* *string

---

##### `TableConfigurationInput`<sup>Optional</sup> <a name="TableConfigurationInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.tableConfigurationInput"></a>

```go
func TableConfigurationInput() PipelineIngestionDefinitionObjectsTableTableConfiguration
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration">PipelineIngestionDefinitionObjectsTableTableConfiguration</a>

---

##### `DestinationCatalog`<sup>Required</sup> <a name="DestinationCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.destinationCatalog"></a>

```go
func DestinationCatalog() *string
```

- *Type:* *string

---

##### `DestinationSchema`<sup>Required</sup> <a name="DestinationSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.destinationSchema"></a>

```go
func DestinationSchema() *string
```

- *Type:* *string

---

##### `DestinationTable`<sup>Required</sup> <a name="DestinationTable" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.destinationTable"></a>

```go
func DestinationTable() *string
```

- *Type:* *string

---

##### `SourceCatalog`<sup>Required</sup> <a name="SourceCatalog" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.sourceCatalog"></a>

```go
func SourceCatalog() *string
```

- *Type:* *string

---

##### `SourceSchema`<sup>Required</sup> <a name="SourceSchema" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.sourceSchema"></a>

```go
func SourceSchema() *string
```

- *Type:* *string

---

##### `SourceTable`<sup>Required</sup> <a name="SourceTable" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.sourceTable"></a>

```go
func SourceTable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineIngestionDefinitionObjectsTable
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTable">PipelineIngestionDefinitionObjectsTable</a>

---


### PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference <a name="PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.resetPrimaryKeys">ResetPrimaryKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.resetSalesforceIncludeFormulaFields">ResetSalesforceIncludeFormulaFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.resetScdType">ResetScdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.resetSequenceBy">ResetSequenceBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimaryKeys` <a name="ResetPrimaryKeys" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.resetPrimaryKeys"></a>

```go
func ResetPrimaryKeys()
```

##### `ResetSalesforceIncludeFormulaFields` <a name="ResetSalesforceIncludeFormulaFields" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.resetSalesforceIncludeFormulaFields"></a>

```go
func ResetSalesforceIncludeFormulaFields()
```

##### `ResetScdType` <a name="ResetScdType" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.resetScdType"></a>

```go
func ResetScdType()
```

##### `ResetSequenceBy` <a name="ResetSequenceBy" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.resetSequenceBy"></a>

```go
func ResetSequenceBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.primaryKeysInput">PrimaryKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.salesforceIncludeFormulaFieldsInput">SalesforceIncludeFormulaFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.scdTypeInput">ScdTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.sequenceByInput">SequenceByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.primaryKeys">PrimaryKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.salesforceIncludeFormulaFields">SalesforceIncludeFormulaFields</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.scdType">ScdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.sequenceBy">SequenceBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration">PipelineIngestionDefinitionObjectsTableTableConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryKeysInput`<sup>Optional</sup> <a name="PrimaryKeysInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.primaryKeysInput"></a>

```go
func PrimaryKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `SalesforceIncludeFormulaFieldsInput`<sup>Optional</sup> <a name="SalesforceIncludeFormulaFieldsInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.salesforceIncludeFormulaFieldsInput"></a>

```go
func SalesforceIncludeFormulaFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `ScdTypeInput`<sup>Optional</sup> <a name="ScdTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.scdTypeInput"></a>

```go
func ScdTypeInput() *string
```

- *Type:* *string

---

##### `SequenceByInput`<sup>Optional</sup> <a name="SequenceByInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.sequenceByInput"></a>

```go
func SequenceByInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrimaryKeys`<sup>Required</sup> <a name="PrimaryKeys" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.primaryKeys"></a>

```go
func PrimaryKeys() *[]*string
```

- *Type:* *[]*string

---

##### `SalesforceIncludeFormulaFields`<sup>Required</sup> <a name="SalesforceIncludeFormulaFields" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.salesforceIncludeFormulaFields"></a>

```go
func SalesforceIncludeFormulaFields() interface{}
```

- *Type:* interface{}

---

##### `ScdType`<sup>Required</sup> <a name="ScdType" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.scdType"></a>

```go
func ScdType() *string
```

- *Type:* *string

---

##### `SequenceBy`<sup>Required</sup> <a name="SequenceBy" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.sequenceBy"></a>

```go
func SequenceBy() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineIngestionDefinitionObjectsTableTableConfiguration
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsTableTableConfiguration">PipelineIngestionDefinitionObjectsTableTableConfiguration</a>

---


### PipelineIngestionDefinitionOutputReference <a name="PipelineIngestionDefinitionOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineIngestionDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineIngestionDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.putObjects">PutObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.putTableConfiguration">PutTableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.resetIngestionGatewayId">ResetIngestionGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.resetObjects">ResetObjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.resetTableConfiguration">ResetTableConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjects` <a name="PutObjects" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.putObjects"></a>

```go
func PutObjects(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.putObjects.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTableConfiguration` <a name="PutTableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.putTableConfiguration"></a>

```go
func PutTableConfiguration(value PipelineIngestionDefinitionTableConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.putTableConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration">PipelineIngestionDefinitionTableConfiguration</a>

---

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetIngestionGatewayId` <a name="ResetIngestionGatewayId" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.resetIngestionGatewayId"></a>

```go
func ResetIngestionGatewayId()
```

##### `ResetObjects` <a name="ResetObjects" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.resetObjects"></a>

```go
func ResetObjects()
```

##### `ResetTableConfiguration` <a name="ResetTableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.resetTableConfiguration"></a>

```go
func ResetTableConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.objects">Objects</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList">PipelineIngestionDefinitionObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.tableConfiguration">TableConfiguration</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference">PipelineIngestionDefinitionTableConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.ingestionGatewayIdInput">IngestionGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.objectsInput">ObjectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.tableConfigurationInput">TableConfigurationInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration">PipelineIngestionDefinitionTableConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.ingestionGatewayId">IngestionGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition">PipelineIngestionDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Objects`<sup>Required</sup> <a name="Objects" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.objects"></a>

```go
func Objects() PipelineIngestionDefinitionObjectsList
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionObjectsList">PipelineIngestionDefinitionObjectsList</a>

---

##### `TableConfiguration`<sup>Required</sup> <a name="TableConfiguration" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.tableConfiguration"></a>

```go
func TableConfiguration() PipelineIngestionDefinitionTableConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference">PipelineIngestionDefinitionTableConfigurationOutputReference</a>

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `IngestionGatewayIdInput`<sup>Optional</sup> <a name="IngestionGatewayIdInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.ingestionGatewayIdInput"></a>

```go
func IngestionGatewayIdInput() *string
```

- *Type:* *string

---

##### `ObjectsInput`<sup>Optional</sup> <a name="ObjectsInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.objectsInput"></a>

```go
func ObjectsInput() interface{}
```

- *Type:* interface{}

---

##### `TableConfigurationInput`<sup>Optional</sup> <a name="TableConfigurationInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.tableConfigurationInput"></a>

```go
func TableConfigurationInput() PipelineIngestionDefinitionTableConfiguration
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration">PipelineIngestionDefinitionTableConfiguration</a>

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `IngestionGatewayId`<sup>Required</sup> <a name="IngestionGatewayId" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.ingestionGatewayId"></a>

```go
func IngestionGatewayId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineIngestionDefinition
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinition">PipelineIngestionDefinition</a>

---


### PipelineIngestionDefinitionTableConfigurationOutputReference <a name="PipelineIngestionDefinitionTableConfigurationOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineIngestionDefinitionTableConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineIngestionDefinitionTableConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.resetPrimaryKeys">ResetPrimaryKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.resetSalesforceIncludeFormulaFields">ResetSalesforceIncludeFormulaFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.resetScdType">ResetScdType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.resetSequenceBy">ResetSequenceBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimaryKeys` <a name="ResetPrimaryKeys" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.resetPrimaryKeys"></a>

```go
func ResetPrimaryKeys()
```

##### `ResetSalesforceIncludeFormulaFields` <a name="ResetSalesforceIncludeFormulaFields" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.resetSalesforceIncludeFormulaFields"></a>

```go
func ResetSalesforceIncludeFormulaFields()
```

##### `ResetScdType` <a name="ResetScdType" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.resetScdType"></a>

```go
func ResetScdType()
```

##### `ResetSequenceBy` <a name="ResetSequenceBy" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.resetSequenceBy"></a>

```go
func ResetSequenceBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.primaryKeysInput">PrimaryKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.salesforceIncludeFormulaFieldsInput">SalesforceIncludeFormulaFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.scdTypeInput">ScdTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.sequenceByInput">SequenceByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.primaryKeys">PrimaryKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.salesforceIncludeFormulaFields">SalesforceIncludeFormulaFields</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.scdType">ScdType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.sequenceBy">SequenceBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration">PipelineIngestionDefinitionTableConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryKeysInput`<sup>Optional</sup> <a name="PrimaryKeysInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.primaryKeysInput"></a>

```go
func PrimaryKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `SalesforceIncludeFormulaFieldsInput`<sup>Optional</sup> <a name="SalesforceIncludeFormulaFieldsInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.salesforceIncludeFormulaFieldsInput"></a>

```go
func SalesforceIncludeFormulaFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `ScdTypeInput`<sup>Optional</sup> <a name="ScdTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.scdTypeInput"></a>

```go
func ScdTypeInput() *string
```

- *Type:* *string

---

##### `SequenceByInput`<sup>Optional</sup> <a name="SequenceByInput" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.sequenceByInput"></a>

```go
func SequenceByInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrimaryKeys`<sup>Required</sup> <a name="PrimaryKeys" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.primaryKeys"></a>

```go
func PrimaryKeys() *[]*string
```

- *Type:* *[]*string

---

##### `SalesforceIncludeFormulaFields`<sup>Required</sup> <a name="SalesforceIncludeFormulaFields" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.salesforceIncludeFormulaFields"></a>

```go
func SalesforceIncludeFormulaFields() interface{}
```

- *Type:* interface{}

---

##### `ScdType`<sup>Required</sup> <a name="ScdType" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.scdType"></a>

```go
func ScdType() *string
```

- *Type:* *string

---

##### `SequenceBy`<sup>Required</sup> <a name="SequenceBy" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.sequenceBy"></a>

```go
func SequenceBy() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineIngestionDefinitionTableConfiguration
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineIngestionDefinitionTableConfiguration">PipelineIngestionDefinitionTableConfiguration</a>

---


### PipelineLatestUpdatesList <a name="PipelineLatestUpdatesList" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineLatestUpdatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PipelineLatestUpdatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.get"></a>

```go
func Get(index *f64) PipelineLatestUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineLatestUpdatesOutputReference <a name="PipelineLatestUpdatesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineLatestUpdatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PipelineLatestUpdatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.resetUpdateId">ResetUpdateId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetUpdateId` <a name="ResetUpdateId" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.resetUpdateId"></a>

```go
func ResetUpdateId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.creationTimeInput">CreationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.updateIdInput">UpdateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.updateId">UpdateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.creationTimeInput"></a>

```go
func CreationTimeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `UpdateIdInput`<sup>Optional</sup> <a name="UpdateIdInput" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.updateIdInput"></a>

```go
func UpdateIdInput() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdateId`<sup>Required</sup> <a name="UpdateId" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.updateId"></a>

```go
func UpdateId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLatestUpdatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineLibraryFileOutputReference <a name="PipelineLibraryFileOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineLibraryFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineLibraryFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineLibraryFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---


### PipelineLibraryList <a name="PipelineLibraryList" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineLibraryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PipelineLibraryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.get"></a>

```go
func Get(index *f64) PipelineLibraryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineLibraryMavenOutputReference <a name="PipelineLibraryMavenOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineLibraryMavenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineLibraryMavenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetRepo"></a>

```go
func ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repoInput">RepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinates">Coordinates</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repo">Repo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinatesInput"></a>

```go
func CoordinatesInput() *string
```

- *Type:* *string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repoInput"></a>

```go
func RepoInput() *string
```

- *Type:* *string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinates"></a>

```go
func Coordinates() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repo"></a>

```go
func Repo() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---


### PipelineLibraryNotebookOutputReference <a name="PipelineLibraryNotebookOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineLibraryNotebookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineLibraryNotebookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineLibraryNotebook
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---


### PipelineLibraryOutputReference <a name="PipelineLibraryOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineLibraryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PipelineLibraryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven">PutMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook">PutNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetJar">ResetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetMaven">ResetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetNotebook">ResetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetWhl">ResetWhl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFile` <a name="PutFile" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile"></a>

```go
func PutFile(value PipelineLibraryFile)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---

##### `PutMaven` <a name="PutMaven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven"></a>

```go
func PutMaven(value PipelineLibraryMaven)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---

##### `PutNotebook` <a name="PutNotebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook"></a>

```go
func PutNotebook(value PipelineLibraryNotebook)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetFile"></a>

```go
func ResetFile()
```

##### `ResetJar` <a name="ResetJar" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetJar"></a>

```go
func ResetJar()
```

##### `ResetMaven` <a name="ResetMaven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetMaven"></a>

```go
func ResetMaven()
```

##### `ResetNotebook` <a name="ResetNotebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetNotebook"></a>

```go
func ResetNotebook()
```

##### `ResetWhl` <a name="ResetWhl" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetWhl"></a>

```go
func ResetWhl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference">PipelineLibraryFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference">PipelineLibraryMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference">PipelineLibraryNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jarInput">JarInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.mavenInput">MavenInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebookInput">NotebookInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whlInput">WhlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jar">Jar</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whl">Whl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.file"></a>

```go
func File() PipelineLibraryFileOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference">PipelineLibraryFileOutputReference</a>

---

##### `Maven`<sup>Required</sup> <a name="Maven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.maven"></a>

```go
func Maven() PipelineLibraryMavenOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference">PipelineLibraryMavenOutputReference</a>

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebook"></a>

```go
func Notebook() PipelineLibraryNotebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference">PipelineLibraryNotebookOutputReference</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fileInput"></a>

```go
func FileInput() PipelineLibraryFile
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---

##### `JarInput`<sup>Optional</sup> <a name="JarInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jarInput"></a>

```go
func JarInput() *string
```

- *Type:* *string

---

##### `MavenInput`<sup>Optional</sup> <a name="MavenInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.mavenInput"></a>

```go
func MavenInput() PipelineLibraryMaven
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---

##### `NotebookInput`<sup>Optional</sup> <a name="NotebookInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebookInput"></a>

```go
func NotebookInput() PipelineLibraryNotebook
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---

##### `WhlInput`<sup>Optional</sup> <a name="WhlInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whlInput"></a>

```go
func WhlInput() *string
```

- *Type:* *string

---

##### `Jar`<sup>Required</sup> <a name="Jar" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jar"></a>

```go
func Jar() *string
```

- *Type:* *string

---

##### `Whl`<sup>Required</sup> <a name="Whl" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whl"></a>

```go
func Whl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineNotificationList <a name="PipelineNotificationList" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineNotificationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PipelineNotificationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.get"></a>

```go
func Get(index *f64) PipelineNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineNotificationOutputReference <a name="PipelineNotificationOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PipelineNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resetAlerts">ResetAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resetEmailRecipients">ResetEmailRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlerts` <a name="ResetAlerts" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resetAlerts"></a>

```go
func ResetAlerts()
```

##### `ResetEmailRecipients` <a name="ResetEmailRecipients" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resetEmailRecipients"></a>

```go
func ResetEmailRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alertsInput">AlertsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipientsInput">EmailRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alerts">Alerts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipients">EmailRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlertsInput`<sup>Optional</sup> <a name="AlertsInput" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alertsInput"></a>

```go
func AlertsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailRecipientsInput`<sup>Optional</sup> <a name="EmailRecipientsInput" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipientsInput"></a>

```go
func EmailRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Alerts`<sup>Required</sup> <a name="Alerts" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alerts"></a>

```go
func Alerts() *[]*string
```

- *Type:* *[]*string

---

##### `EmailRecipients`<sup>Required</sup> <a name="EmailRecipients" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipients"></a>

```go
func EmailRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineRestartWindowOutputReference <a name="PipelineRestartWindowOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineRestartWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineRestartWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.resetTimeZoneId">ResetTimeZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```

##### `ResetTimeZoneId` <a name="ResetTimeZoneId" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.resetTimeZoneId"></a>

```go
func ResetTimeZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.startHourInput">StartHourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.timeZoneIdInput">TimeZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.startHour">StartHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.timeZoneId">TimeZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindow">PipelineRestartWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `StartHourInput`<sup>Optional</sup> <a name="StartHourInput" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.startHourInput"></a>

```go
func StartHourInput() *f64
```

- *Type:* *f64

---

##### `TimeZoneIdInput`<sup>Optional</sup> <a name="TimeZoneIdInput" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.timeZoneIdInput"></a>

```go
func TimeZoneIdInput() *string
```

- *Type:* *string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `StartHour`<sup>Required</sup> <a name="StartHour" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.startHour"></a>

```go
func StartHour() *f64
```

- *Type:* *f64

---

##### `TimeZoneId`<sup>Required</sup> <a name="TimeZoneId" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.timeZoneId"></a>

```go
func TimeZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineRestartWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineRestartWindow
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineRestartWindow">PipelineRestartWindow</a>

---


### PipelineRunAsOutputReference <a name="PipelineRunAsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineRunAsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineRunAsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.resetServicePrincipalName">ResetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServicePrincipalName` <a name="ResetServicePrincipalName" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.resetServicePrincipalName"></a>

```go
func ResetServicePrincipalName()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.resetUserName"></a>

```go
func ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.servicePrincipalNameInput">ServicePrincipalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineRunAs">PipelineRunAs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServicePrincipalNameInput`<sup>Optional</sup> <a name="ServicePrincipalNameInput" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.servicePrincipalNameInput"></a>

```go
func ServicePrincipalNameInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.servicePrincipalName"></a>

```go
func ServicePrincipalName() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineRunAsOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineRunAs
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineRunAs">PipelineRunAs</a>

---


### PipelineTimeoutsOutputReference <a name="PipelineTimeoutsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PipelineTriggerCronOutputReference <a name="PipelineTriggerCronOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineTriggerCronOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineTriggerCronOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.resetQuartzCronSchedule">ResetQuartzCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.resetTimezoneId">ResetTimezoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuartzCronSchedule` <a name="ResetQuartzCronSchedule" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.resetQuartzCronSchedule"></a>

```go
func ResetQuartzCronSchedule()
```

##### `ResetTimezoneId` <a name="ResetTimezoneId" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.resetTimezoneId"></a>

```go
func ResetTimezoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.quartzCronScheduleInput">QuartzCronScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.quartzCronSchedule">QuartzCronSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCron">PipelineTriggerCron</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QuartzCronScheduleInput`<sup>Optional</sup> <a name="QuartzCronScheduleInput" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.quartzCronScheduleInput"></a>

```go
func QuartzCronScheduleInput() *string
```

- *Type:* *string

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.timezoneIdInput"></a>

```go
func TimezoneIdInput() *string
```

- *Type:* *string

---

##### `QuartzCronSchedule`<sup>Required</sup> <a name="QuartzCronSchedule" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.quartzCronSchedule"></a>

```go
func QuartzCronSchedule() *string
```

- *Type:* *string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.timezoneId"></a>

```go
func TimezoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineTriggerCron
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCron">PipelineTriggerCron</a>

---


### PipelineTriggerManualOutputReference <a name="PipelineTriggerManualOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineTriggerManualOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineTriggerManualOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManual">PipelineTriggerManual</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineTriggerManual
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManual">PipelineTriggerManual</a>

---


### PipelineTriggerOutputReference <a name="PipelineTriggerOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/pipeline"

pipeline.NewPipelineTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PipelineTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.putCron">PutCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.putManual">PutManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.resetCron">ResetCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.resetManual">ResetManual</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCron` <a name="PutCron" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.putCron"></a>

```go
func PutCron(value PipelineTriggerCron)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.putCron.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCron">PipelineTriggerCron</a>

---

##### `PutManual` <a name="PutManual" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.putManual"></a>

```go
func PutManual(value PipelineTriggerManual)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.putManual.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManual">PipelineTriggerManual</a>

---

##### `ResetCron` <a name="ResetCron" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.resetCron"></a>

```go
func ResetCron()
```

##### `ResetManual` <a name="ResetManual" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.resetManual"></a>

```go
func ResetManual()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.cron">Cron</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference">PipelineTriggerCronOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.manual">Manual</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference">PipelineTriggerManualOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.cronInput">CronInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCron">PipelineTriggerCron</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.manualInput">ManualInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManual">PipelineTriggerManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTrigger">PipelineTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.cron"></a>

```go
func Cron() PipelineTriggerCronOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCronOutputReference">PipelineTriggerCronOutputReference</a>

---

##### `Manual`<sup>Required</sup> <a name="Manual" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.manual"></a>

```go
func Manual() PipelineTriggerManualOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManualOutputReference">PipelineTriggerManualOutputReference</a>

---

##### `CronInput`<sup>Optional</sup> <a name="CronInput" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.cronInput"></a>

```go
func CronInput() PipelineTriggerCron
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerCron">PipelineTriggerCron</a>

---

##### `ManualInput`<sup>Optional</sup> <a name="ManualInput" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.manualInput"></a>

```go
func ManualInput() PipelineTriggerManual
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTriggerManual">PipelineTriggerManual</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() PipelineTrigger
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTrigger">PipelineTrigger</a>

---



