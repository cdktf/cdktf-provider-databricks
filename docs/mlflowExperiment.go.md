# `mlflowExperiment` Submodule <a name="`mlflowExperiment` Submodule" id="@cdktf/provider-databricks.mlflowExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MlflowExperiment <a name="MlflowExperiment" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment databricks_mlflow_experiment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowexperiment"

mlflowexperiment.NewMlflowExperiment(scope Construct, id *string, config MlflowExperimentConfig) MlflowExperiment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig">MlflowExperimentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig">MlflowExperimentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetArtifactLocation">ResetArtifactLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetExperimentId">ResetExperimentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetLastUpdateTime">ResetLastUpdateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetLifecycleStage">ResetLifecycleStage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.putTimeouts"></a>

```go
func PutTimeouts(value MlflowExperimentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

---

##### `ResetArtifactLocation` <a name="ResetArtifactLocation" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetArtifactLocation"></a>

```go
func ResetArtifactLocation()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExperimentId` <a name="ResetExperimentId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetExperimentId"></a>

```go
func ResetExperimentId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetId"></a>

```go
func ResetId()
```

##### `ResetLastUpdateTime` <a name="ResetLastUpdateTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetLastUpdateTime"></a>

```go
func ResetLastUpdateTime()
```

##### `ResetLifecycleStage` <a name="ResetLifecycleStage" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetLifecycleStage"></a>

```go
func ResetLifecycleStage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MlflowExperiment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowexperiment"

mlflowexperiment.MlflowExperiment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowexperiment"

mlflowexperiment.MlflowExperiment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowexperiment"

mlflowexperiment.MlflowExperiment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowexperiment"

mlflowexperiment.MlflowExperiment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MlflowExperiment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MlflowExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MlflowExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MlflowExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference">MlflowExperimentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocationInput">ArtifactLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTimeInput">CreationTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentIdInput">ExperimentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTimeInput">LastUpdateTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStageInput">LifecycleStageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocation">ArtifactLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentId">ExperimentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStage">LifecycleStage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeouts"></a>

```go
func Timeouts() MlflowExperimentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference">MlflowExperimentTimeoutsOutputReference</a>

---

##### `ArtifactLocationInput`<sup>Optional</sup> <a name="ArtifactLocationInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocationInput"></a>

```go
func ArtifactLocationInput() *string
```

- *Type:* *string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTimeInput"></a>

```go
func CreationTimeInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExperimentIdInput`<sup>Optional</sup> <a name="ExperimentIdInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentIdInput"></a>

```go
func ExperimentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LastUpdateTimeInput`<sup>Optional</sup> <a name="LastUpdateTimeInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTimeInput"></a>

```go
func LastUpdateTimeInput() *f64
```

- *Type:* *f64

---

##### `LifecycleStageInput`<sup>Optional</sup> <a name="LifecycleStageInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStageInput"></a>

```go
func LifecycleStageInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ArtifactLocation`<sup>Required</sup> <a name="ArtifactLocation" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocation"></a>

```go
func ArtifactLocation() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentId"></a>

```go
func ExperimentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTime"></a>

```go
func LastUpdateTime() *f64
```

- *Type:* *f64

---

##### `LifecycleStage`<sup>Required</sup> <a name="LifecycleStage" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStage"></a>

```go
func LifecycleStage() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MlflowExperimentConfig <a name="MlflowExperimentConfig" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowexperiment"

&mlflowexperiment.MlflowExperimentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ArtifactLocation: *string,
	CreationTime: *f64,
	Description: *string,
	ExperimentId: *string,
	Id: *string,
	LastUpdateTime: *f64,
	LifecycleStage: *string,
	Timeouts: github.com/cdktf/cdktf-provider-databricks-go/databricks.mlflowExperiment.MlflowExperimentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#name MlflowExperiment#name}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.artifactLocation">ArtifactLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.creationTime">CreationTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#description MlflowExperiment#description}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.experimentId">ExperimentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#id MlflowExperiment#id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycleStage">LifecycleStage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#name MlflowExperiment#name}.

---

##### `ArtifactLocation`<sup>Optional</sup> <a name="ArtifactLocation" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.artifactLocation"></a>

```go
ArtifactLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.creationTime"></a>

```go
CreationTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#description MlflowExperiment#description}.

---

##### `ExperimentId`<sup>Optional</sup> <a name="ExperimentId" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.experimentId"></a>

```go
ExperimentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#id MlflowExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastUpdateTime`<sup>Optional</sup> <a name="LastUpdateTime" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lastUpdateTime"></a>

```go
LastUpdateTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}.

---

##### `LifecycleStage`<sup>Optional</sup> <a name="LifecycleStage" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycleStage"></a>

```go
LifecycleStage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.timeouts"></a>

```go
Timeouts MlflowExperimentTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/resources/mlflow_experiment#timeouts MlflowExperiment#timeouts}

---

### MlflowExperimentTimeouts <a name="MlflowExperimentTimeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowexperiment"

&mlflowexperiment.MlflowExperimentTimeouts {

}
```


## Classes <a name="Classes" id="Classes"></a>

### MlflowExperimentTimeoutsOutputReference <a name="MlflowExperimentTimeoutsOutputReference" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowexperiment"

mlflowexperiment.NewMlflowExperimentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MlflowExperimentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



