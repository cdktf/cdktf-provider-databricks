# `alertV2` Submodule <a name="`alertV2` Submodule" id="@cdktf/provider-databricks.alertV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlertV2 <a name="AlertV2" id="@cdktf/provider-databricks.alertV2.AlertV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2 databricks_alert_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alertV2.AlertV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.NewAlertV2(scope Construct, id *string, config AlertV2Config) AlertV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config">AlertV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.alertV2.AlertV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.alertV2.AlertV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.alertV2.AlertV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2Config">AlertV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.putEvaluation">PutEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.resetCustomDescription">ResetCustomDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.resetCustomSummary">ResetCustomSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.resetEvaluation">ResetEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.resetParentPath">ResetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.resetQueryText">ResetQueryText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.resetRunAsUserName">ResetRunAsUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alertV2.AlertV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.alertV2.AlertV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.alertV2.AlertV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alertV2.AlertV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.alertV2.AlertV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.alertV2.AlertV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.alertV2.AlertV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.alertV2.AlertV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.alertV2.AlertV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.alertV2.AlertV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.alertV2.AlertV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.alertV2.AlertV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.alertV2.AlertV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.alertV2.AlertV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.alertV2.AlertV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.alertV2.AlertV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.alertV2.AlertV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.alertV2.AlertV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.alertV2.AlertV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.alertV2.AlertV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.alertV2.AlertV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.alertV2.AlertV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.alertV2.AlertV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEvaluation` <a name="PutEvaluation" id="@cdktf/provider-databricks.alertV2.AlertV2.putEvaluation"></a>

```go
func PutEvaluation(value AlertV2Evaluation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alertV2.AlertV2.putEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2Evaluation">AlertV2Evaluation</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-databricks.alertV2.AlertV2.putSchedule"></a>

```go
func PutSchedule(value AlertV2Schedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alertV2.AlertV2.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2Schedule">AlertV2Schedule</a>

---

##### `ResetCustomDescription` <a name="ResetCustomDescription" id="@cdktf/provider-databricks.alertV2.AlertV2.resetCustomDescription"></a>

```go
func ResetCustomDescription()
```

##### `ResetCustomSummary` <a name="ResetCustomSummary" id="@cdktf/provider-databricks.alertV2.AlertV2.resetCustomSummary"></a>

```go
func ResetCustomSummary()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-databricks.alertV2.AlertV2.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEvaluation` <a name="ResetEvaluation" id="@cdktf/provider-databricks.alertV2.AlertV2.resetEvaluation"></a>

```go
func ResetEvaluation()
```

##### `ResetParentPath` <a name="ResetParentPath" id="@cdktf/provider-databricks.alertV2.AlertV2.resetParentPath"></a>

```go
func ResetParentPath()
```

##### `ResetQueryText` <a name="ResetQueryText" id="@cdktf/provider-databricks.alertV2.AlertV2.resetQueryText"></a>

```go
func ResetQueryText()
```

##### `ResetRunAsUserName` <a name="ResetRunAsUserName" id="@cdktf/provider-databricks.alertV2.AlertV2.resetRunAsUserName"></a>

```go
func ResetRunAsUserName()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-databricks.alertV2.AlertV2.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktf/provider-databricks.alertV2.AlertV2.resetWarehouseId"></a>

```go
func ResetWarehouseId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AlertV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.alertV2.AlertV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.AlertV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.alertV2.AlertV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.alertV2.AlertV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.AlertV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.alertV2.AlertV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.alertV2.AlertV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.AlertV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.alertV2.AlertV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.alertV2.AlertV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.AlertV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AlertV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.alertV2.AlertV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.alertV2.AlertV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AlertV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.alertV2.AlertV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AlertV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.alertV2.AlertV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AlertV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.evaluation">Evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference">AlertV2EvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.ownerUserName">OwnerUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference">AlertV2ScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.customDescriptionInput">CustomDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.customSummaryInput">CustomSummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.evaluationInput">EvaluationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.parentPathInput">ParentPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.queryTextInput">QueryTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.runAsUserNameInput">RunAsUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.customDescription">CustomDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.customSummary">CustomSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.parentPath">ParentPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.queryText">QueryText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.runAsUserName">RunAsUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.alertV2.AlertV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.alertV2.AlertV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alertV2.AlertV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.alertV2.AlertV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.alertV2.AlertV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.alertV2.AlertV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.alertV2.AlertV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.alertV2.AlertV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.alertV2.AlertV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.alertV2.AlertV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.alertV2.AlertV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.alertV2.AlertV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.alertV2.AlertV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.alertV2.AlertV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.alertV2.AlertV2.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Evaluation`<sup>Required</sup> <a name="Evaluation" id="@cdktf/provider-databricks.alertV2.AlertV2.property.evaluation"></a>

```go
func Evaluation() AlertV2EvaluationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference">AlertV2EvaluationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.alertV2.AlertV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-databricks.alertV2.AlertV2.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `OwnerUserName`<sup>Required</sup> <a name="OwnerUserName" id="@cdktf/provider-databricks.alertV2.AlertV2.property.ownerUserName"></a>

```go
func OwnerUserName() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-databricks.alertV2.AlertV2.property.schedule"></a>

```go
func Schedule() AlertV2ScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference">AlertV2ScheduleOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.alertV2.AlertV2.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CustomDescriptionInput`<sup>Optional</sup> <a name="CustomDescriptionInput" id="@cdktf/provider-databricks.alertV2.AlertV2.property.customDescriptionInput"></a>

```go
func CustomDescriptionInput() *string
```

- *Type:* *string

---

##### `CustomSummaryInput`<sup>Optional</sup> <a name="CustomSummaryInput" id="@cdktf/provider-databricks.alertV2.AlertV2.property.customSummaryInput"></a>

```go
func CustomSummaryInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-databricks.alertV2.AlertV2.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EvaluationInput`<sup>Optional</sup> <a name="EvaluationInput" id="@cdktf/provider-databricks.alertV2.AlertV2.property.evaluationInput"></a>

```go
func EvaluationInput() interface{}
```

- *Type:* interface{}

---

##### `ParentPathInput`<sup>Optional</sup> <a name="ParentPathInput" id="@cdktf/provider-databricks.alertV2.AlertV2.property.parentPathInput"></a>

```go
func ParentPathInput() *string
```

- *Type:* *string

---

##### `QueryTextInput`<sup>Optional</sup> <a name="QueryTextInput" id="@cdktf/provider-databricks.alertV2.AlertV2.property.queryTextInput"></a>

```go
func QueryTextInput() *string
```

- *Type:* *string

---

##### `RunAsUserNameInput`<sup>Optional</sup> <a name="RunAsUserNameInput" id="@cdktf/provider-databricks.alertV2.AlertV2.property.runAsUserNameInput"></a>

```go
func RunAsUserNameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-databricks.alertV2.AlertV2.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.alertV2.AlertV2.property.warehouseIdInput"></a>

```go
func WarehouseIdInput() *string
```

- *Type:* *string

---

##### `CustomDescription`<sup>Required</sup> <a name="CustomDescription" id="@cdktf/provider-databricks.alertV2.AlertV2.property.customDescription"></a>

```go
func CustomDescription() *string
```

- *Type:* *string

---

##### `CustomSummary`<sup>Required</sup> <a name="CustomSummary" id="@cdktf/provider-databricks.alertV2.AlertV2.property.customSummary"></a>

```go
func CustomSummary() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.alertV2.AlertV2.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktf/provider-databricks.alertV2.AlertV2.property.parentPath"></a>

```go
func ParentPath() *string
```

- *Type:* *string

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="@cdktf/provider-databricks.alertV2.AlertV2.property.queryText"></a>

```go
func QueryText() *string
```

- *Type:* *string

---

##### `RunAsUserName`<sup>Required</sup> <a name="RunAsUserName" id="@cdktf/provider-databricks.alertV2.AlertV2.property.runAsUserName"></a>

```go
func RunAsUserName() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.alertV2.AlertV2.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.alertV2.AlertV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertV2Config <a name="AlertV2Config" id="@cdktf/provider-databricks.alertV2.AlertV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alertV2.AlertV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

&alertv2.AlertV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomDescription: *string,
	CustomSummary: *string,
	DisplayName: *string,
	Evaluation: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.alertV2.AlertV2Evaluation,
	ParentPath: *string,
	QueryText: *string,
	RunAsUserName: *string,
	Schedule: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.alertV2.AlertV2Schedule,
	WarehouseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.customDescription">CustomDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#custom_description AlertV2#custom_description}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.customSummary">CustomSummary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#custom_summary AlertV2#custom_summary}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#display_name AlertV2#display_name}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.evaluation">Evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Evaluation">AlertV2Evaluation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#evaluation AlertV2#evaluation}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.parentPath">ParentPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#parent_path AlertV2#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.queryText">QueryText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#query_text AlertV2#query_text}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.runAsUserName">RunAsUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#run_as_user_name AlertV2#run_as_user_name}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Schedule">AlertV2Schedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#schedule AlertV2#schedule}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Config.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#warehouse_id AlertV2#warehouse_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomDescription`<sup>Optional</sup> <a name="CustomDescription" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.customDescription"></a>

```go
CustomDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#custom_description AlertV2#custom_description}.

---

##### `CustomSummary`<sup>Optional</sup> <a name="CustomSummary" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.customSummary"></a>

```go
CustomSummary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#custom_summary AlertV2#custom_summary}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#display_name AlertV2#display_name}.

---

##### `Evaluation`<sup>Optional</sup> <a name="Evaluation" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.evaluation"></a>

```go
Evaluation AlertV2Evaluation
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2Evaluation">AlertV2Evaluation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#evaluation AlertV2#evaluation}.

---

##### `ParentPath`<sup>Optional</sup> <a name="ParentPath" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.parentPath"></a>

```go
ParentPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#parent_path AlertV2#parent_path}.

---

##### `QueryText`<sup>Optional</sup> <a name="QueryText" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.queryText"></a>

```go
QueryText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#query_text AlertV2#query_text}.

---

##### `RunAsUserName`<sup>Optional</sup> <a name="RunAsUserName" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.runAsUserName"></a>

```go
RunAsUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#run_as_user_name AlertV2#run_as_user_name}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.schedule"></a>

```go
Schedule AlertV2Schedule
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2Schedule">AlertV2Schedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#schedule AlertV2#schedule}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.alertV2.AlertV2Config.property.warehouseId"></a>

```go
WarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#warehouse_id AlertV2#warehouse_id}.

---

### AlertV2Evaluation <a name="AlertV2Evaluation" id="@cdktf/provider-databricks.alertV2.AlertV2Evaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alertV2.AlertV2Evaluation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

&alertv2.AlertV2Evaluation {
	ComparisonOperator: *string,
	EmptyResultState: *string,
	Notification: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.alertV2.AlertV2EvaluationNotification,
	Source: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.alertV2.AlertV2EvaluationSource,
	Threshold: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.alertV2.AlertV2EvaluationThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Evaluation.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#comparison_operator AlertV2#comparison_operator}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Evaluation.property.emptyResultState">EmptyResultState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#empty_result_state AlertV2#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Evaluation.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotification">AlertV2EvaluationNotification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#notification AlertV2#notification}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Evaluation.property.source">Source</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSource">AlertV2EvaluationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#source AlertV2#source}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Evaluation.property.threshold">Threshold</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThreshold">AlertV2EvaluationThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#threshold AlertV2#threshold}. |

---

##### `ComparisonOperator`<sup>Optional</sup> <a name="ComparisonOperator" id="@cdktf/provider-databricks.alertV2.AlertV2Evaluation.property.comparisonOperator"></a>

```go
ComparisonOperator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#comparison_operator AlertV2#comparison_operator}.

---

##### `EmptyResultState`<sup>Optional</sup> <a name="EmptyResultState" id="@cdktf/provider-databricks.alertV2.AlertV2Evaluation.property.emptyResultState"></a>

```go
EmptyResultState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#empty_result_state AlertV2#empty_result_state}.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-databricks.alertV2.AlertV2Evaluation.property.notification"></a>

```go
Notification AlertV2EvaluationNotification
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotification">AlertV2EvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#notification AlertV2#notification}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-databricks.alertV2.AlertV2Evaluation.property.source"></a>

```go
Source AlertV2EvaluationSource
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSource">AlertV2EvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#source AlertV2#source}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-databricks.alertV2.AlertV2Evaluation.property.threshold"></a>

```go
Threshold AlertV2EvaluationThreshold
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThreshold">AlertV2EvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#threshold AlertV2#threshold}.

---

### AlertV2EvaluationNotification <a name="AlertV2EvaluationNotification" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

&alertv2.AlertV2EvaluationNotification {
	NotifyOnOk: interface{},
	RetriggerSeconds: *f64,
	Subscriptions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotification.property.notifyOnOk">NotifyOnOk</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#notify_on_ok AlertV2#notify_on_ok}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotification.property.retriggerSeconds">RetriggerSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#retrigger_seconds AlertV2#retrigger_seconds}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotification.property.subscriptions">Subscriptions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#subscriptions AlertV2#subscriptions}. |

---

##### `NotifyOnOk`<sup>Optional</sup> <a name="NotifyOnOk" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotification.property.notifyOnOk"></a>

```go
NotifyOnOk interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#notify_on_ok AlertV2#notify_on_ok}.

---

##### `RetriggerSeconds`<sup>Optional</sup> <a name="RetriggerSeconds" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotification.property.retriggerSeconds"></a>

```go
RetriggerSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#retrigger_seconds AlertV2#retrigger_seconds}.

---

##### `Subscriptions`<sup>Optional</sup> <a name="Subscriptions" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotification.property.subscriptions"></a>

```go
Subscriptions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#subscriptions AlertV2#subscriptions}.

---

### AlertV2EvaluationNotificationSubscriptions <a name="AlertV2EvaluationNotificationSubscriptions" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

&alertv2.AlertV2EvaluationNotificationSubscriptions {
	DestinationId: *string,
	UserEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptions.property.destinationId">DestinationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#destination_id AlertV2#destination_id}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptions.property.userEmail">UserEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#user_email AlertV2#user_email}. |

---

##### `DestinationId`<sup>Optional</sup> <a name="DestinationId" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptions.property.destinationId"></a>

```go
DestinationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#destination_id AlertV2#destination_id}.

---

##### `UserEmail`<sup>Optional</sup> <a name="UserEmail" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptions.property.userEmail"></a>

```go
UserEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#user_email AlertV2#user_email}.

---

### AlertV2EvaluationSource <a name="AlertV2EvaluationSource" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

&alertv2.AlertV2EvaluationSource {
	Aggregation: *string,
	Display: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSource.property.aggregation">Aggregation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#aggregation AlertV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSource.property.display">Display</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#display AlertV2#display}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSource.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#name AlertV2#name}. |

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSource.property.aggregation"></a>

```go
Aggregation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#aggregation AlertV2#aggregation}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSource.property.display"></a>

```go
Display *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#display AlertV2#display}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#name AlertV2#name}.

---

### AlertV2EvaluationThreshold <a name="AlertV2EvaluationThreshold" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

&alertv2.AlertV2EvaluationThreshold {
	Column: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.alertV2.AlertV2EvaluationThresholdColumn,
	Value: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.alertV2.AlertV2EvaluationThresholdValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThreshold.property.column">Column</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumn">AlertV2EvaluationThresholdColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#column AlertV2#column}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThreshold.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValue">AlertV2EvaluationThresholdValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#value AlertV2#value}. |

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThreshold.property.column"></a>

```go
Column AlertV2EvaluationThresholdColumn
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumn">AlertV2EvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#column AlertV2#column}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThreshold.property.value"></a>

```go
Value AlertV2EvaluationThresholdValue
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValue">AlertV2EvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#value AlertV2#value}.

---

### AlertV2EvaluationThresholdColumn <a name="AlertV2EvaluationThresholdColumn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

&alertv2.AlertV2EvaluationThresholdColumn {
	Aggregation: *string,
	Display: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumn.property.aggregation">Aggregation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#aggregation AlertV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumn.property.display">Display</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#display AlertV2#display}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumn.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#name AlertV2#name}. |

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumn.property.aggregation"></a>

```go
Aggregation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#aggregation AlertV2#aggregation}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumn.property.display"></a>

```go
Display *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#display AlertV2#display}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumn.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#name AlertV2#name}.

---

### AlertV2EvaluationThresholdValue <a name="AlertV2EvaluationThresholdValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

&alertv2.AlertV2EvaluationThresholdValue {
	BoolValue: interface{},
	DoubleValue: *f64,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValue.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#bool_value AlertV2#bool_value}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValue.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#double_value AlertV2#double_value}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#string_value AlertV2#string_value}. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValue.property.boolValue"></a>

```go
BoolValue interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#bool_value AlertV2#bool_value}.

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValue.property.doubleValue"></a>

```go
DoubleValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#double_value AlertV2#double_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#string_value AlertV2#string_value}.

---

### AlertV2Schedule <a name="AlertV2Schedule" id="@cdktf/provider-databricks.alertV2.AlertV2Schedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alertV2.AlertV2Schedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

&alertv2.AlertV2Schedule {
	PauseStatus: *string,
	QuartzCronSchedule: *string,
	TimezoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Schedule.property.pauseStatus">PauseStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#pause_status AlertV2#pause_status}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Schedule.property.quartzCronSchedule">QuartzCronSchedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#quartz_cron_schedule AlertV2#quartz_cron_schedule}. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2Schedule.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#timezone_id AlertV2#timezone_id}. |

---

##### `PauseStatus`<sup>Optional</sup> <a name="PauseStatus" id="@cdktf/provider-databricks.alertV2.AlertV2Schedule.property.pauseStatus"></a>

```go
PauseStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#pause_status AlertV2#pause_status}.

---

##### `QuartzCronSchedule`<sup>Optional</sup> <a name="QuartzCronSchedule" id="@cdktf/provider-databricks.alertV2.AlertV2Schedule.property.quartzCronSchedule"></a>

```go
QuartzCronSchedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#quartz_cron_schedule AlertV2#quartz_cron_schedule}.

---

##### `TimezoneId`<sup>Optional</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.alertV2.AlertV2Schedule.property.timezoneId"></a>

```go
TimezoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/alert_v2#timezone_id AlertV2#timezone_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertV2EvaluationNotificationOutputReference <a name="AlertV2EvaluationNotificationOutputReference" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.NewAlertV2EvaluationNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertV2EvaluationNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.putSubscriptions">PutSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.resetNotifyOnOk">ResetNotifyOnOk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.resetRetriggerSeconds">ResetRetriggerSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.resetSubscriptions">ResetSubscriptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubscriptions` <a name="PutSubscriptions" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.putSubscriptions"></a>

```go
func PutSubscriptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNotifyOnOk` <a name="ResetNotifyOnOk" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.resetNotifyOnOk"></a>

```go
func ResetNotifyOnOk()
```

##### `ResetRetriggerSeconds` <a name="ResetRetriggerSeconds" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.resetRetriggerSeconds"></a>

```go
func ResetRetriggerSeconds()
```

##### `ResetSubscriptions` <a name="ResetSubscriptions" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.resetSubscriptions"></a>

```go
func ResetSubscriptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.subscriptions">Subscriptions</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList">AlertV2EvaluationNotificationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.notifyOnOkInput">NotifyOnOkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.retriggerSecondsInput">RetriggerSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.subscriptionsInput">SubscriptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.notifyOnOk">NotifyOnOk</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.retriggerSeconds">RetriggerSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.subscriptions"></a>

```go
func Subscriptions() AlertV2EvaluationNotificationSubscriptionsList
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList">AlertV2EvaluationNotificationSubscriptionsList</a>

---

##### `NotifyOnOkInput`<sup>Optional</sup> <a name="NotifyOnOkInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.notifyOnOkInput"></a>

```go
func NotifyOnOkInput() interface{}
```

- *Type:* interface{}

---

##### `RetriggerSecondsInput`<sup>Optional</sup> <a name="RetriggerSecondsInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.retriggerSecondsInput"></a>

```go
func RetriggerSecondsInput() *f64
```

- *Type:* *f64

---

##### `SubscriptionsInput`<sup>Optional</sup> <a name="SubscriptionsInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.subscriptionsInput"></a>

```go
func SubscriptionsInput() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnOk`<sup>Required</sup> <a name="NotifyOnOk" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.notifyOnOk"></a>

```go
func NotifyOnOk() interface{}
```

- *Type:* interface{}

---

##### `RetriggerSeconds`<sup>Required</sup> <a name="RetriggerSeconds" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.retriggerSeconds"></a>

```go
func RetriggerSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertV2EvaluationNotificationSubscriptionsList <a name="AlertV2EvaluationNotificationSubscriptionsList" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.NewAlertV2EvaluationNotificationSubscriptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AlertV2EvaluationNotificationSubscriptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.get"></a>

```go
func Get(index *f64) AlertV2EvaluationNotificationSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertV2EvaluationNotificationSubscriptionsOutputReference <a name="AlertV2EvaluationNotificationSubscriptionsOutputReference" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.NewAlertV2EvaluationNotificationSubscriptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AlertV2EvaluationNotificationSubscriptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.resetDestinationId">ResetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.resetUserEmail">ResetUserEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationId` <a name="ResetDestinationId" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.resetDestinationId"></a>

```go
func ResetDestinationId()
```

##### `ResetUserEmail` <a name="ResetUserEmail" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.resetUserEmail"></a>

```go
func ResetUserEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput">DestinationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmailInput">UserEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationId">DestinationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmail">UserEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationIdInput`<sup>Optional</sup> <a name="DestinationIdInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput"></a>

```go
func DestinationIdInput() *string
```

- *Type:* *string

---

##### `UserEmailInput`<sup>Optional</sup> <a name="UserEmailInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmailInput"></a>

```go
func UserEmailInput() *string
```

- *Type:* *string

---

##### `DestinationId`<sup>Required</sup> <a name="DestinationId" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationId"></a>

```go
func DestinationId() *string
```

- *Type:* *string

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmail"></a>

```go
func UserEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationSubscriptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertV2EvaluationOutputReference <a name="AlertV2EvaluationOutputReference" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.NewAlertV2EvaluationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertV2EvaluationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.resetComparisonOperator">ResetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.resetEmptyResultState">ResetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.putNotification"></a>

```go
func PutNotification(value AlertV2EvaluationNotification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.putNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotification">AlertV2EvaluationNotification</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.putSource"></a>

```go
func PutSource(value AlertV2EvaluationSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSource">AlertV2EvaluationSource</a>

---

##### `PutThreshold` <a name="PutThreshold" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.putThreshold"></a>

```go
func PutThreshold(value AlertV2EvaluationThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThreshold">AlertV2EvaluationThreshold</a>

---

##### `ResetComparisonOperator` <a name="ResetComparisonOperator" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.resetComparisonOperator"></a>

```go
func ResetComparisonOperator()
```

##### `ResetEmptyResultState` <a name="ResetEmptyResultState" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.resetEmptyResultState"></a>

```go
func ResetEmptyResultState()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.resetNotification"></a>

```go
func ResetNotification()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.lastEvaluatedAt">LastEvaluatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference">AlertV2EvaluationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference">AlertV2EvaluationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.threshold">Threshold</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference">AlertV2EvaluationThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.emptyResultStateInput">EmptyResultStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.notificationInput">NotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.emptyResultState">EmptyResultState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastEvaluatedAt`<sup>Required</sup> <a name="LastEvaluatedAt" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.lastEvaluatedAt"></a>

```go
func LastEvaluatedAt() *string
```

- *Type:* *string

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.notification"></a>

```go
func Notification() AlertV2EvaluationNotificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationNotificationOutputReference">AlertV2EvaluationNotificationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.source"></a>

```go
func Source() AlertV2EvaluationSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference">AlertV2EvaluationSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.threshold"></a>

```go
func Threshold() AlertV2EvaluationThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference">AlertV2EvaluationThresholdOutputReference</a>

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.comparisonOperatorInput"></a>

```go
func ComparisonOperatorInput() *string
```

- *Type:* *string

---

##### `EmptyResultStateInput`<sup>Optional</sup> <a name="EmptyResultStateInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.emptyResultStateInput"></a>

```go
func EmptyResultStateInput() *string
```

- *Type:* *string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.notificationInput"></a>

```go
func NotificationInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() interface{}
```

- *Type:* interface{}

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `EmptyResultState`<sup>Required</sup> <a name="EmptyResultState" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.emptyResultState"></a>

```go
func EmptyResultState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertV2EvaluationSourceOutputReference <a name="AlertV2EvaluationSourceOutputReference" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.NewAlertV2EvaluationSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertV2EvaluationSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.resetAggregation"></a>

```go
func ResetAggregation()
```

##### `ResetDisplay` <a name="ResetDisplay" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.resetDisplay"></a>

```go
func ResetDisplay()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.displayInput">DisplayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.aggregation">Aggregation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.aggregationInput"></a>

```go
func AggregationInput() *string
```

- *Type:* *string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.displayInput"></a>

```go
func DisplayInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.aggregation"></a>

```go
func Aggregation() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertV2EvaluationThresholdColumnOutputReference <a name="AlertV2EvaluationThresholdColumnOutputReference" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.NewAlertV2EvaluationThresholdColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertV2EvaluationThresholdColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.resetAggregation"></a>

```go
func ResetAggregation()
```

##### `ResetDisplay` <a name="ResetDisplay" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.resetDisplay"></a>

```go
func ResetDisplay()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.displayInput">DisplayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.aggregation">Aggregation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.aggregationInput"></a>

```go
func AggregationInput() *string
```

- *Type:* *string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.displayInput"></a>

```go
func DisplayInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.aggregation"></a>

```go
func Aggregation() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertV2EvaluationThresholdOutputReference <a name="AlertV2EvaluationThresholdOutputReference" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.NewAlertV2EvaluationThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertV2EvaluationThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumn` <a name="PutColumn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.putColumn"></a>

```go
func PutColumn(value AlertV2EvaluationThresholdColumn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumn">AlertV2EvaluationThresholdColumn</a>

---

##### `PutValue` <a name="PutValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.putValue"></a>

```go
func PutValue(value AlertV2EvaluationThresholdValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValue">AlertV2EvaluationThresholdValue</a>

---

##### `ResetColumn` <a name="ResetColumn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.resetColumn"></a>

```go
func ResetColumn()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference">AlertV2EvaluationThresholdColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference">AlertV2EvaluationThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.columnInput">ColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.column"></a>

```go
func Column() AlertV2EvaluationThresholdColumnOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdColumnOutputReference">AlertV2EvaluationThresholdColumnOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.value"></a>

```go
func Value() AlertV2EvaluationThresholdValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference">AlertV2EvaluationThresholdValueOutputReference</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.columnInput"></a>

```go
func ColumnInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertV2EvaluationThresholdValueOutputReference <a name="AlertV2EvaluationThresholdValueOutputReference" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.NewAlertV2EvaluationThresholdValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertV2EvaluationThresholdValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.resetBoolValue"></a>

```go
func ResetBoolValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.resetDoubleValue"></a>

```go
func ResetDoubleValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.boolValueInput"></a>

```go
func BoolValueInput() interface{}
```

- *Type:* interface{}

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.doubleValueInput"></a>

```go
func DoubleValueInput() *f64
```

- *Type:* *f64

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.boolValue"></a>

```go
func BoolValue() interface{}
```

- *Type:* interface{}

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.doubleValue"></a>

```go
func DoubleValue() *f64
```

- *Type:* *f64

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alertV2.AlertV2EvaluationThresholdValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AlertV2ScheduleOutputReference <a name="AlertV2ScheduleOutputReference" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/alertv2"

alertv2.NewAlertV2ScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertV2ScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.resetPauseStatus">ResetPauseStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.resetQuartzCronSchedule">ResetQuartzCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.resetTimezoneId">ResetTimezoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPauseStatus` <a name="ResetPauseStatus" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.resetPauseStatus"></a>

```go
func ResetPauseStatus()
```

##### `ResetQuartzCronSchedule` <a name="ResetQuartzCronSchedule" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.resetQuartzCronSchedule"></a>

```go
func ResetQuartzCronSchedule()
```

##### `ResetTimezoneId` <a name="ResetTimezoneId" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.resetTimezoneId"></a>

```go
func ResetTimezoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.pauseStatusInput">PauseStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.quartzCronScheduleInput">QuartzCronScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.pauseStatus">PauseStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.quartzCronSchedule">QuartzCronSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PauseStatusInput`<sup>Optional</sup> <a name="PauseStatusInput" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.pauseStatusInput"></a>

```go
func PauseStatusInput() *string
```

- *Type:* *string

---

##### `QuartzCronScheduleInput`<sup>Optional</sup> <a name="QuartzCronScheduleInput" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.quartzCronScheduleInput"></a>

```go
func QuartzCronScheduleInput() *string
```

- *Type:* *string

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.timezoneIdInput"></a>

```go
func TimezoneIdInput() *string
```

- *Type:* *string

---

##### `PauseStatus`<sup>Required</sup> <a name="PauseStatus" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.pauseStatus"></a>

```go
func PauseStatus() *string
```

- *Type:* *string

---

##### `QuartzCronSchedule`<sup>Required</sup> <a name="QuartzCronSchedule" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.quartzCronSchedule"></a>

```go
func QuartzCronSchedule() *string
```

- *Type:* *string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.timezoneId"></a>

```go
func TimezoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alertV2.AlertV2ScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



