# `modelServing` Submodule <a name="`modelServing` Submodule" id="@cdktf/provider-databricks.modelServing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelServing <a name="ModelServing" id="@cdktf/provider-databricks.modelServing.ModelServing"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving databricks_model_serving}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServing(scope Construct, id *string, config ModelServingConfig) ModelServing
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig">ModelServingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig">ModelServingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putAiGateway">PutAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putEmailNotifications">PutEmailNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putRateLimits">PutRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetAiGateway">ResetAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetBudgetPolicyId">ResetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetEmailNotifications">ResetEmailNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetRateLimits">ResetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetRouteOptimized">ResetRouteOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServing.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.modelServing.ModelServing.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.modelServing.ModelServing.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.modelServing.ModelServing.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.modelServing.ModelServing.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.modelServing.ModelServing.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.modelServing.ModelServing.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.modelServing.ModelServing.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.modelServing.ModelServing.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.modelServing.ModelServing.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.modelServing.ModelServing.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServing.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.modelServing.ModelServing.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAiGateway` <a name="PutAiGateway" id="@cdktf/provider-databricks.modelServing.ModelServing.putAiGateway"></a>

```go
func PutAiGateway(value ModelServingAiGateway)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putAiGateway.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a>

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-databricks.modelServing.ModelServing.putConfig"></a>

```go
func PutConfig(value ModelServingConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---

##### `PutEmailNotifications` <a name="PutEmailNotifications" id="@cdktf/provider-databricks.modelServing.ModelServing.putEmailNotifications"></a>

```go
func PutEmailNotifications(value ModelServingEmailNotifications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putEmailNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotifications">ModelServingEmailNotifications</a>

---

##### `PutRateLimits` <a name="PutRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.putRateLimits"></a>

```go
func PutRateLimits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putRateLimits.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-databricks.modelServing.ModelServing.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts"></a>

```go
func PutTimeouts(value ModelServingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

---

##### `ResetAiGateway` <a name="ResetAiGateway" id="@cdktf/provider-databricks.modelServing.ModelServing.resetAiGateway"></a>

```go
func ResetAiGateway()
```

##### `ResetBudgetPolicyId` <a name="ResetBudgetPolicyId" id="@cdktf/provider-databricks.modelServing.ModelServing.resetBudgetPolicyId"></a>

```go
func ResetBudgetPolicyId()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-databricks.modelServing.ModelServing.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.modelServing.ModelServing.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEmailNotifications` <a name="ResetEmailNotifications" id="@cdktf/provider-databricks.modelServing.ModelServing.resetEmailNotifications"></a>

```go
func ResetEmailNotifications()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.modelServing.ModelServing.resetId"></a>

```go
func ResetId()
```

##### `ResetRateLimits` <a name="ResetRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.resetRateLimits"></a>

```go
func ResetRateLimits()
```

##### `ResetRouteOptimized` <a name="ResetRouteOptimized" id="@cdktf/provider-databricks.modelServing.ModelServing.resetRouteOptimized"></a>

```go
func ResetRouteOptimized()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-databricks.modelServing.ModelServing.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ModelServing resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.modelServing.ModelServing.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.ModelServing_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.ModelServing_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.ModelServing_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.ModelServing_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ModelServing resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ModelServing to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ModelServing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.modelServing.ModelServing.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ModelServing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.aiGateway">AiGateway</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference">ModelServingAiGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference">ModelServingConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.emailNotifications">EmailNotifications</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference">ModelServingEmailNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.endpointUrl">EndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimits">RateLimits</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList">ModelServingRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.servingEndpointId">ServingEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList">ModelServingTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference">ModelServingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.aiGatewayInput">AiGatewayInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.budgetPolicyIdInput">BudgetPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.emailNotificationsInput">EmailNotificationsInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotifications">ModelServingEmailNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimitsInput">RateLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.routeOptimizedInput">RouteOptimizedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.routeOptimized">RouteOptimized</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.modelServing.ModelServing.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.modelServing.ModelServing.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServing.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.modelServing.ModelServing.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.modelServing.ModelServing.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.modelServing.ModelServing.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.modelServing.ModelServing.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.modelServing.ModelServing.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServing.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.modelServing.ModelServing.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.modelServing.ModelServing.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AiGateway`<sup>Required</sup> <a name="AiGateway" id="@cdktf/provider-databricks.modelServing.ModelServing.property.aiGateway"></a>

```go
func AiGateway() ModelServingAiGatewayOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference">ModelServingAiGatewayOutputReference</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.modelServing.ModelServing.property.config"></a>

```go
func Config() ModelServingConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference">ModelServingConfigAOutputReference</a>

---

##### `EmailNotifications`<sup>Required</sup> <a name="EmailNotifications" id="@cdktf/provider-databricks.modelServing.ModelServing.property.emailNotifications"></a>

```go
func EmailNotifications() ModelServingEmailNotificationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference">ModelServingEmailNotificationsOutputReference</a>

---

##### `EndpointUrl`<sup>Required</sup> <a name="EndpointUrl" id="@cdktf/provider-databricks.modelServing.ModelServing.property.endpointUrl"></a>

```go
func EndpointUrl() *string
```

- *Type:* *string

---

##### `RateLimits`<sup>Required</sup> <a name="RateLimits" id="@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimits"></a>

```go
func RateLimits() ModelServingRateLimitsList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList">ModelServingRateLimitsList</a>

---

##### `ServingEndpointId`<sup>Required</sup> <a name="ServingEndpointId" id="@cdktf/provider-databricks.modelServing.ModelServing.property.servingEndpointId"></a>

```go
func ServingEndpointId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tags"></a>

```go
func Tags() ModelServingTagsList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList">ModelServingTagsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.property.timeouts"></a>

```go
func Timeouts() ModelServingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference">ModelServingTimeoutsOutputReference</a>

---

##### `AiGatewayInput`<sup>Optional</sup> <a name="AiGatewayInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.aiGatewayInput"></a>

```go
func AiGatewayInput() ModelServingAiGateway
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a>

---

##### `BudgetPolicyIdInput`<sup>Optional</sup> <a name="BudgetPolicyIdInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.budgetPolicyIdInput"></a>

```go
func BudgetPolicyIdInput() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.configInput"></a>

```go
func ConfigInput() ModelServingConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EmailNotificationsInput`<sup>Optional</sup> <a name="EmailNotificationsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.emailNotificationsInput"></a>

```go
func EmailNotificationsInput() ModelServingEmailNotifications
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotifications">ModelServingEmailNotifications</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RateLimitsInput`<sup>Optional</sup> <a name="RateLimitsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.rateLimitsInput"></a>

```go
func RateLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `RouteOptimizedInput`<sup>Optional</sup> <a name="RouteOptimizedInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.routeOptimizedInput"></a>

```go
func RouteOptimizedInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktf/provider-databricks.modelServing.ModelServing.property.budgetPolicyId"></a>

```go
func BudgetPolicyId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.modelServing.ModelServing.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.modelServing.ModelServing.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.modelServing.ModelServing.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RouteOptimized`<sup>Required</sup> <a name="RouteOptimized" id="@cdktf/provider-databricks.modelServing.ModelServing.property.routeOptimized"></a>

```go
func RouteOptimized() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ModelServingAiGateway <a name="ModelServingAiGateway" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingAiGateway {
	FallbackConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingAiGatewayFallbackConfig,
	Guardrails: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingAiGatewayGuardrails,
	InferenceTableConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingAiGatewayInferenceTableConfig,
	RateLimits: interface{},
	UsageTrackingConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingAiGatewayUsageTrackingConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.fallbackConfig">FallbackConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a></code> | fallback_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.guardrails">Guardrails</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a></code> | guardrails block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.inferenceTableConfig">InferenceTableConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a></code> | inference_table_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.rateLimits">RateLimits</a></code> | <code>interface{}</code> | rate_limits block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.usageTrackingConfig">UsageTrackingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a></code> | usage_tracking_config block. |

---

##### `FallbackConfig`<sup>Optional</sup> <a name="FallbackConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.fallbackConfig"></a>

```go
FallbackConfig ModelServingAiGatewayFallbackConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a>

fallback_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#fallback_config ModelServing#fallback_config}

---

##### `Guardrails`<sup>Optional</sup> <a name="Guardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.guardrails"></a>

```go
Guardrails ModelServingAiGatewayGuardrails
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a>

guardrails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#guardrails ModelServing#guardrails}

---

##### `InferenceTableConfig`<sup>Optional</sup> <a name="InferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.inferenceTableConfig"></a>

```go
InferenceTableConfig ModelServingAiGatewayInferenceTableConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a>

inference_table_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#inference_table_config ModelServing#inference_table_config}

---

##### `RateLimits`<sup>Optional</sup> <a name="RateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.rateLimits"></a>

```go
RateLimits interface{}
```

- *Type:* interface{}

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#rate_limits ModelServing#rate_limits}

---

##### `UsageTrackingConfig`<sup>Optional</sup> <a name="UsageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGateway.property.usageTrackingConfig"></a>

```go
UsageTrackingConfig ModelServingAiGatewayUsageTrackingConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a>

usage_tracking_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#usage_tracking_config ModelServing#usage_tracking_config}

---

### ModelServingAiGatewayFallbackConfig <a name="ModelServingAiGatewayFallbackConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingAiGatewayFallbackConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#enabled ModelServing#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#enabled ModelServing#enabled}.

---

### ModelServingAiGatewayGuardrails <a name="ModelServingAiGatewayGuardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingAiGatewayGuardrails {
	Input: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingAiGatewayGuardrailsInput,
	Output: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingAiGatewayGuardrailsOutput,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.property.input">Input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a></code> | input block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.property.output">Output</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a></code> | output block. |

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.property.input"></a>

```go
Input ModelServingAiGatewayGuardrailsInput
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a>

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#input ModelServing#input}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails.property.output"></a>

```go
Output ModelServingAiGatewayGuardrailsOutput
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#output ModelServing#output}

---

### ModelServingAiGatewayGuardrailsInput <a name="ModelServingAiGatewayGuardrailsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingAiGatewayGuardrailsInput {
	InvalidKeywords: *[]*string,
	Pii: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingAiGatewayGuardrailsInputPii,
	Safety: interface{},
	ValidTopics: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.invalidKeywords">InvalidKeywords</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.pii">Pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a></code> | pii block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.safety">Safety</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#safety ModelServing#safety}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.validTopics">ValidTopics</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}. |

---

##### `InvalidKeywords`<sup>Optional</sup> <a name="InvalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.invalidKeywords"></a>

```go
InvalidKeywords *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}.

---

##### `Pii`<sup>Optional</sup> <a name="Pii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.pii"></a>

```go
Pii ModelServingAiGatewayGuardrailsInputPii
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a>

pii block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#pii ModelServing#pii}

---

##### `Safety`<sup>Optional</sup> <a name="Safety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.safety"></a>

```go
Safety interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#safety ModelServing#safety}.

---

##### `ValidTopics`<sup>Optional</sup> <a name="ValidTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput.property.validTopics"></a>

```go
ValidTopics *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}.

---

### ModelServingAiGatewayGuardrailsInputPii <a name="ModelServingAiGatewayGuardrailsInputPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingAiGatewayGuardrailsInputPii {
	Behavior: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii.property.behavior">Behavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#behavior ModelServing#behavior}. |

---

##### `Behavior`<sup>Optional</sup> <a name="Behavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii.property.behavior"></a>

```go
Behavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#behavior ModelServing#behavior}.

---

### ModelServingAiGatewayGuardrailsOutput <a name="ModelServingAiGatewayGuardrailsOutput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingAiGatewayGuardrailsOutput {
	InvalidKeywords: *[]*string,
	Pii: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingAiGatewayGuardrailsOutputPii,
	Safety: interface{},
	ValidTopics: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.invalidKeywords">InvalidKeywords</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.pii">Pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a></code> | pii block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.safety">Safety</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#safety ModelServing#safety}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.validTopics">ValidTopics</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}. |

---

##### `InvalidKeywords`<sup>Optional</sup> <a name="InvalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.invalidKeywords"></a>

```go
InvalidKeywords *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#invalid_keywords ModelServing#invalid_keywords}.

---

##### `Pii`<sup>Optional</sup> <a name="Pii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.pii"></a>

```go
Pii ModelServingAiGatewayGuardrailsOutputPii
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a>

pii block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#pii ModelServing#pii}

---

##### `Safety`<sup>Optional</sup> <a name="Safety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.safety"></a>

```go
Safety interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#safety ModelServing#safety}.

---

##### `ValidTopics`<sup>Optional</sup> <a name="ValidTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput.property.validTopics"></a>

```go
ValidTopics *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#valid_topics ModelServing#valid_topics}.

---

### ModelServingAiGatewayGuardrailsOutputPii <a name="ModelServingAiGatewayGuardrailsOutputPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingAiGatewayGuardrailsOutputPii {
	Behavior: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii.property.behavior">Behavior</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#behavior ModelServing#behavior}. |

---

##### `Behavior`<sup>Optional</sup> <a name="Behavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii.property.behavior"></a>

```go
Behavior *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#behavior ModelServing#behavior}.

---

### ModelServingAiGatewayInferenceTableConfig <a name="ModelServingAiGatewayInferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingAiGatewayInferenceTableConfig {
	CatalogName: *string,
	Enabled: interface{},
	SchemaName: *string,
	TableNamePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#enabled ModelServing#enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#schema_name ModelServing#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}. |

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#enabled ModelServing#enabled}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#schema_name ModelServing#schema_name}.

---

##### `TableNamePrefix`<sup>Optional</sup> <a name="TableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig.property.tableNamePrefix"></a>

```go
TableNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}.

---

### ModelServingAiGatewayRateLimits <a name="ModelServingAiGatewayRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingAiGatewayRateLimits {
	RenewalPeriod: *string,
	Calls: *f64,
	Key: *string,
	Principal: *string,
	Tokens: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.renewalPeriod">RenewalPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.calls">Calls</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#calls ModelServing#calls}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#key ModelServing#key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.principal">Principal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#principal ModelServing#principal}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.tokens">Tokens</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#tokens ModelServing#tokens}. |

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.renewalPeriod"></a>

```go
RenewalPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}.

---

##### `Calls`<sup>Optional</sup> <a name="Calls" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.calls"></a>

```go
Calls *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#calls ModelServing#calls}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#key ModelServing#key}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#principal ModelServing#principal}.

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimits.property.tokens"></a>

```go
Tokens *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#tokens ModelServing#tokens}.

---

### ModelServingAiGatewayUsageTrackingConfig <a name="ModelServingAiGatewayUsageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingAiGatewayUsageTrackingConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#enabled ModelServing#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#enabled ModelServing#enabled}.

---

### ModelServingConfig <a name="ModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AiGateway: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingAiGateway,
	BudgetPolicyId: *string,
	Config: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigA,
	Description: *string,
	EmailNotifications: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingEmailNotifications,
	Id: *string,
	RateLimits: interface{},
	RouteOptimized: interface{},
	Tags: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.aiGateway">AiGateway</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a></code> | ai_gateway block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#budget_policy_id ModelServing#budget_policy_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#description ModelServing#description}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.emailNotifications">EmailNotifications</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotifications">ModelServingEmailNotifications</a></code> | email_notifications block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#id ModelServing#id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.rateLimits">RateLimits</a></code> | <code>interface{}</code> | rate_limits block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.routeOptimized">RouteOptimized</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#route_optimized ModelServing#route_optimized}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `AiGateway`<sup>Optional</sup> <a name="AiGateway" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.aiGateway"></a>

```go
AiGateway ModelServingAiGateway
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a>

ai_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#ai_gateway ModelServing#ai_gateway}

---

##### `BudgetPolicyId`<sup>Optional</sup> <a name="BudgetPolicyId" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.budgetPolicyId"></a>

```go
BudgetPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#budget_policy_id ModelServing#budget_policy_id}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.config"></a>

```go
Config ModelServingConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#config ModelServing#config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#description ModelServing#description}.

---

##### `EmailNotifications`<sup>Optional</sup> <a name="EmailNotifications" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.emailNotifications"></a>

```go
EmailNotifications ModelServingEmailNotifications
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotifications">ModelServingEmailNotifications</a>

email_notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#email_notifications ModelServing#email_notifications}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#id ModelServing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RateLimits`<sup>Optional</sup> <a name="RateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.rateLimits"></a>

```go
RateLimits interface{}
```

- *Type:* interface{}

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#rate_limits ModelServing#rate_limits}

---

##### `RouteOptimized`<sup>Optional</sup> <a name="RouteOptimized" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.routeOptimized"></a>

```go
RouteOptimized interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#route_optimized ModelServing#route_optimized}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#tags ModelServing#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.timeouts"></a>

```go
Timeouts ModelServingTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#timeouts ModelServing#timeouts}

---

### ModelServingConfigA <a name="ModelServingConfigA" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigA {
	AutoCaptureConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigAutoCaptureConfig,
	ServedEntities: interface{},
	ServedModels: interface{},
	TrafficConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigTrafficConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.autoCaptureConfig">AutoCaptureConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a></code> | auto_capture_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedEntities">ServedEntities</a></code> | <code>interface{}</code> | served_entities block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedModels">ServedModels</a></code> | <code>interface{}</code> | served_models block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.trafficConfig">TrafficConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | traffic_config block. |

---

##### `AutoCaptureConfig`<sup>Optional</sup> <a name="AutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.autoCaptureConfig"></a>

```go
AutoCaptureConfig ModelServingConfigAutoCaptureConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

auto_capture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#auto_capture_config ModelServing#auto_capture_config}

---

##### `ServedEntities`<sup>Optional</sup> <a name="ServedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedEntities"></a>

```go
ServedEntities interface{}
```

- *Type:* interface{}

served_entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#served_entities ModelServing#served_entities}

---

##### `ServedModels`<sup>Optional</sup> <a name="ServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedModels"></a>

```go
ServedModels interface{}
```

- *Type:* interface{}

served_models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#served_models ModelServing#served_models}

---

##### `TrafficConfig`<sup>Optional</sup> <a name="TrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.trafficConfig"></a>

```go
TrafficConfig ModelServingConfigTrafficConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

traffic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#traffic_config ModelServing#traffic_config}

---

### ModelServingConfigAutoCaptureConfig <a name="ModelServingConfigAutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigAutoCaptureConfig {
	CatalogName: *string,
	Enabled: interface{},
	SchemaName: *string,
	TableNamePrefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#enabled ModelServing#enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#schema_name ModelServing#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}. |

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#catalog_name ModelServing#catalog_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#enabled ModelServing#enabled}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#schema_name ModelServing#schema_name}.

---

##### `TableNamePrefix`<sup>Optional</sup> <a name="TableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig.property.tableNamePrefix"></a>

```go
TableNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#table_name_prefix ModelServing#table_name_prefix}.

---

### ModelServingConfigServedEntities <a name="ModelServingConfigServedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedEntities {
	EntityName: *string,
	EntityVersion: *string,
	EnvironmentVars: *map[string]*string,
	ExternalModel: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigServedEntitiesExternalModel,
	InstanceProfileArn: *string,
	MaxProvisionedConcurrency: *f64,
	MaxProvisionedThroughput: *f64,
	MinProvisionedConcurrency: *f64,
	MinProvisionedThroughput: *f64,
	Name: *string,
	ProvisionedModelUnits: *f64,
	ScaleToZeroEnabled: interface{},
	WorkloadSize: *string,
	WorkloadType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.entityName">EntityName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#entity_name ModelServing#entity_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.entityVersion">EntityVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#entity_version ModelServing#entity_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.environmentVars">EnvironmentVars</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.externalModel">ExternalModel</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a></code> | external_model block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.maxProvisionedConcurrency">MaxProvisionedConcurrency</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#max_provisioned_concurrency ModelServing#max_provisioned_concurrency}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.maxProvisionedThroughput">MaxProvisionedThroughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.minProvisionedConcurrency">MinProvisionedConcurrency</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#min_provisioned_concurrency ModelServing#min_provisioned_concurrency}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.minProvisionedThroughput">MinProvisionedThroughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.provisionedModelUnits">ProvisionedModelUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#provisioned_model_units ModelServing#provisioned_model_units}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.scaleToZeroEnabled">ScaleToZeroEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.workloadSize">WorkloadSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#workload_size ModelServing#workload_size}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.workloadType">WorkloadType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#workload_type ModelServing#workload_type}. |

---

##### `EntityName`<sup>Optional</sup> <a name="EntityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.entityName"></a>

```go
EntityName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#entity_name ModelServing#entity_name}.

---

##### `EntityVersion`<sup>Optional</sup> <a name="EntityVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.entityVersion"></a>

```go
EntityVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#entity_version ModelServing#entity_version}.

---

##### `EnvironmentVars`<sup>Optional</sup> <a name="EnvironmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.environmentVars"></a>

```go
EnvironmentVars *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}.

---

##### `ExternalModel`<sup>Optional</sup> <a name="ExternalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.externalModel"></a>

```go
ExternalModel ModelServingConfigServedEntitiesExternalModel
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a>

external_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#external_model ModelServing#external_model}

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.instanceProfileArn"></a>

```go
InstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}.

---

##### `MaxProvisionedConcurrency`<sup>Optional</sup> <a name="MaxProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.maxProvisionedConcurrency"></a>

```go
MaxProvisionedConcurrency *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#max_provisioned_concurrency ModelServing#max_provisioned_concurrency}.

---

##### `MaxProvisionedThroughput`<sup>Optional</sup> <a name="MaxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.maxProvisionedThroughput"></a>

```go
MaxProvisionedThroughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}.

---

##### `MinProvisionedConcurrency`<sup>Optional</sup> <a name="MinProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.minProvisionedConcurrency"></a>

```go
MinProvisionedConcurrency *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#min_provisioned_concurrency ModelServing#min_provisioned_concurrency}.

---

##### `MinProvisionedThroughput`<sup>Optional</sup> <a name="MinProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.minProvisionedThroughput"></a>

```go
MinProvisionedThroughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `ProvisionedModelUnits`<sup>Optional</sup> <a name="ProvisionedModelUnits" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.provisionedModelUnits"></a>

```go
ProvisionedModelUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#provisioned_model_units ModelServing#provisioned_model_units}.

---

##### `ScaleToZeroEnabled`<sup>Optional</sup> <a name="ScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.scaleToZeroEnabled"></a>

```go
ScaleToZeroEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}.

---

##### `WorkloadSize`<sup>Optional</sup> <a name="WorkloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.workloadSize"></a>

```go
WorkloadSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#workload_size ModelServing#workload_size}.

---

##### `WorkloadType`<sup>Optional</sup> <a name="WorkloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntities.property.workloadType"></a>

```go
WorkloadType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#workload_type ModelServing#workload_type}.

---

### ModelServingConfigServedEntitiesExternalModel <a name="ModelServingConfigServedEntitiesExternalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedEntitiesExternalModel {
	Name: *string,
	Provider: *string,
	Task: *string,
	Ai21LabsConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig,
	AmazonBedrockConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig,
	AnthropicConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig,
	CohereConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig,
	CustomProviderConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig,
	DatabricksModelServingConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig,
	GoogleCloudVertexAiConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig,
	OpenaiConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig,
	PalmConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.provider">Provider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#provider ModelServing#provider}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.task">Task</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#task ModelServing#task}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.ai21LabsConfig">Ai21LabsConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a></code> | ai21labs_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.amazonBedrockConfig">AmazonBedrockConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a></code> | amazon_bedrock_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.anthropicConfig">AnthropicConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a></code> | anthropic_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.cohereConfig">CohereConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a></code> | cohere_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.customProviderConfig">CustomProviderConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a></code> | custom_provider_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.databricksModelServingConfig">DatabricksModelServingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a></code> | databricks_model_serving_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.googleCloudVertexAiConfig">GoogleCloudVertexAiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a></code> | google_cloud_vertex_ai_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.openaiConfig">OpenaiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a></code> | openai_config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.palmConfig">PalmConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a></code> | palm_config block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.provider"></a>

```go
Provider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#provider ModelServing#provider}.

---

##### `Task`<sup>Required</sup> <a name="Task" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.task"></a>

```go
Task *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#task ModelServing#task}.

---

##### `Ai21LabsConfig`<sup>Optional</sup> <a name="Ai21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.ai21LabsConfig"></a>

```go
Ai21LabsConfig ModelServingConfigServedEntitiesExternalModelAi21LabsConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a>

ai21labs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#ai21labs_config ModelServing#ai21labs_config}

---

##### `AmazonBedrockConfig`<sup>Optional</sup> <a name="AmazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.amazonBedrockConfig"></a>

```go
AmazonBedrockConfig ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a>

amazon_bedrock_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#amazon_bedrock_config ModelServing#amazon_bedrock_config}

---

##### `AnthropicConfig`<sup>Optional</sup> <a name="AnthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.anthropicConfig"></a>

```go
AnthropicConfig ModelServingConfigServedEntitiesExternalModelAnthropicConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a>

anthropic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#anthropic_config ModelServing#anthropic_config}

---

##### `CohereConfig`<sup>Optional</sup> <a name="CohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.cohereConfig"></a>

```go
CohereConfig ModelServingConfigServedEntitiesExternalModelCohereConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a>

cohere_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#cohere_config ModelServing#cohere_config}

---

##### `CustomProviderConfig`<sup>Optional</sup> <a name="CustomProviderConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.customProviderConfig"></a>

```go
CustomProviderConfig ModelServingConfigServedEntitiesExternalModelCustomProviderConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a>

custom_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#custom_provider_config ModelServing#custom_provider_config}

---

##### `DatabricksModelServingConfig`<sup>Optional</sup> <a name="DatabricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.databricksModelServingConfig"></a>

```go
DatabricksModelServingConfig ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a>

databricks_model_serving_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#databricks_model_serving_config ModelServing#databricks_model_serving_config}

---

##### `GoogleCloudVertexAiConfig`<sup>Optional</sup> <a name="GoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.googleCloudVertexAiConfig"></a>

```go
GoogleCloudVertexAiConfig ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a>

google_cloud_vertex_ai_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#google_cloud_vertex_ai_config ModelServing#google_cloud_vertex_ai_config}

---

##### `OpenaiConfig`<sup>Optional</sup> <a name="OpenaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.openaiConfig"></a>

```go
OpenaiConfig ModelServingConfigServedEntitiesExternalModelOpenaiConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a>

openai_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_config ModelServing#openai_config}

---

##### `PalmConfig`<sup>Optional</sup> <a name="PalmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel.property.palmConfig"></a>

```go
PalmConfig ModelServingConfigServedEntitiesExternalModelPalmConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a>

palm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#palm_config ModelServing#palm_config}

---

### ModelServingConfigServedEntitiesExternalModelAi21LabsConfig <a name="ModelServingConfigServedEntitiesExternalModelAi21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig {
	Ai21LabsApiKey: *string,
	Ai21LabsApiKeyPlaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKey">Ai21LabsApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#ai21labs_api_key ModelServing#ai21labs_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKeyPlaintext">Ai21LabsApiKeyPlaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#ai21labs_api_key_plaintext ModelServing#ai21labs_api_key_plaintext}. |

---

##### `Ai21LabsApiKey`<sup>Optional</sup> <a name="Ai21LabsApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKey"></a>

```go
Ai21LabsApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#ai21labs_api_key ModelServing#ai21labs_api_key}.

---

##### `Ai21LabsApiKeyPlaintext`<sup>Optional</sup> <a name="Ai21LabsApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKeyPlaintext"></a>

```go
Ai21LabsApiKeyPlaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#ai21labs_api_key_plaintext ModelServing#ai21labs_api_key_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig <a name="ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig {
	AwsRegion: *string,
	BedrockProvider: *string,
	AwsAccessKeyId: *string,
	AwsAccessKeyIdPlaintext: *string,
	AwsSecretAccessKey: *string,
	AwsSecretAccessKeyPlaintext: *string,
	InstanceProfileArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#aws_region ModelServing#aws_region}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.bedrockProvider">BedrockProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#bedrock_provider ModelServing#bedrock_provider}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#aws_access_key_id ModelServing#aws_access_key_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyIdPlaintext">AwsAccessKeyIdPlaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#aws_access_key_id_plaintext ModelServing#aws_access_key_id_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#aws_secret_access_key ModelServing#aws_secret_access_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKeyPlaintext">AwsSecretAccessKeyPlaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#aws_secret_access_key_plaintext ModelServing#aws_secret_access_key_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}. |

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsRegion"></a>

```go
AwsRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#aws_region ModelServing#aws_region}.

---

##### `BedrockProvider`<sup>Required</sup> <a name="BedrockProvider" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.bedrockProvider"></a>

```go
BedrockProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#bedrock_provider ModelServing#bedrock_provider}.

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyId"></a>

```go
AwsAccessKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#aws_access_key_id ModelServing#aws_access_key_id}.

---

##### `AwsAccessKeyIdPlaintext`<sup>Optional</sup> <a name="AwsAccessKeyIdPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyIdPlaintext"></a>

```go
AwsAccessKeyIdPlaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#aws_access_key_id_plaintext ModelServing#aws_access_key_id_plaintext}.

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKey"></a>

```go
AwsSecretAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#aws_secret_access_key ModelServing#aws_secret_access_key}.

---

##### `AwsSecretAccessKeyPlaintext`<sup>Optional</sup> <a name="AwsSecretAccessKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKeyPlaintext"></a>

```go
AwsSecretAccessKeyPlaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#aws_secret_access_key_plaintext ModelServing#aws_secret_access_key_plaintext}.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig.property.instanceProfileArn"></a>

```go
InstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}.

---

### ModelServingConfigServedEntitiesExternalModelAnthropicConfig <a name="ModelServingConfigServedEntitiesExternalModelAnthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedEntitiesExternalModelAnthropicConfig {
	AnthropicApiKey: *string,
	AnthropicApiKeyPlaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKey">AnthropicApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#anthropic_api_key ModelServing#anthropic_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKeyPlaintext">AnthropicApiKeyPlaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#anthropic_api_key_plaintext ModelServing#anthropic_api_key_plaintext}. |

---

##### `AnthropicApiKey`<sup>Optional</sup> <a name="AnthropicApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKey"></a>

```go
AnthropicApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#anthropic_api_key ModelServing#anthropic_api_key}.

---

##### `AnthropicApiKeyPlaintext`<sup>Optional</sup> <a name="AnthropicApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKeyPlaintext"></a>

```go
AnthropicApiKeyPlaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#anthropic_api_key_plaintext ModelServing#anthropic_api_key_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelCohereConfig <a name="ModelServingConfigServedEntitiesExternalModelCohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedEntitiesExternalModelCohereConfig {
	CohereApiBase: *string,
	CohereApiKey: *string,
	CohereApiKeyPlaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiBase">CohereApiBase</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#cohere_api_base ModelServing#cohere_api_base}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKey">CohereApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#cohere_api_key ModelServing#cohere_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKeyPlaintext">CohereApiKeyPlaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#cohere_api_key_plaintext ModelServing#cohere_api_key_plaintext}. |

---

##### `CohereApiBase`<sup>Optional</sup> <a name="CohereApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiBase"></a>

```go
CohereApiBase *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#cohere_api_base ModelServing#cohere_api_base}.

---

##### `CohereApiKey`<sup>Optional</sup> <a name="CohereApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKey"></a>

```go
CohereApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#cohere_api_key ModelServing#cohere_api_key}.

---

##### `CohereApiKeyPlaintext`<sup>Optional</sup> <a name="CohereApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKeyPlaintext"></a>

```go
CohereApiKeyPlaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#cohere_api_key_plaintext ModelServing#cohere_api_key_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelCustomProviderConfig <a name="ModelServingConfigServedEntitiesExternalModelCustomProviderConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig {
	CustomProviderUrl: *string,
	ApiKeyAuth: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth,
	BearerTokenAuth: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.property.customProviderUrl">CustomProviderUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#custom_provider_url ModelServing#custom_provider_url}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.property.apiKeyAuth">ApiKeyAuth</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a></code> | api_key_auth block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.property.bearerTokenAuth">BearerTokenAuth</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a></code> | bearer_token_auth block. |

---

##### `CustomProviderUrl`<sup>Required</sup> <a name="CustomProviderUrl" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.property.customProviderUrl"></a>

```go
CustomProviderUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#custom_provider_url ModelServing#custom_provider_url}.

---

##### `ApiKeyAuth`<sup>Optional</sup> <a name="ApiKeyAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.property.apiKeyAuth"></a>

```go
ApiKeyAuth ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a>

api_key_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#api_key_auth ModelServing#api_key_auth}

---

##### `BearerTokenAuth`<sup>Optional</sup> <a name="BearerTokenAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig.property.bearerTokenAuth"></a>

```go
BearerTokenAuth ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a>

bearer_token_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#bearer_token_auth ModelServing#bearer_token_auth}

---

### ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth <a name="ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth {
	Key: *string,
	Value: *string,
	ValuePlaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#key ModelServing#key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#value ModelServing#value}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.property.valuePlaintext">ValuePlaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#value_plaintext ModelServing#value_plaintext}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#key ModelServing#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#value ModelServing#value}.

---

##### `ValuePlaintext`<sup>Optional</sup> <a name="ValuePlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth.property.valuePlaintext"></a>

```go
ValuePlaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#value_plaintext ModelServing#value_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth <a name="ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth {
	Token: *string,
	TokenPlaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth.property.token">Token</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#token ModelServing#token}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth.property.tokenPlaintext">TokenPlaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#token_plaintext ModelServing#token_plaintext}. |

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth.property.token"></a>

```go
Token *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#token ModelServing#token}.

---

##### `TokenPlaintext`<sup>Optional</sup> <a name="TokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth.property.tokenPlaintext"></a>

```go
TokenPlaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#token_plaintext ModelServing#token_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig <a name="ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig {
	DatabricksWorkspaceUrl: *string,
	DatabricksApiToken: *string,
	DatabricksApiTokenPlaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksWorkspaceUrl">DatabricksWorkspaceUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#databricks_workspace_url ModelServing#databricks_workspace_url}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiToken">DatabricksApiToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#databricks_api_token ModelServing#databricks_api_token}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiTokenPlaintext">DatabricksApiTokenPlaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#databricks_api_token_plaintext ModelServing#databricks_api_token_plaintext}. |

---

##### `DatabricksWorkspaceUrl`<sup>Required</sup> <a name="DatabricksWorkspaceUrl" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksWorkspaceUrl"></a>

```go
DatabricksWorkspaceUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#databricks_workspace_url ModelServing#databricks_workspace_url}.

---

##### `DatabricksApiToken`<sup>Optional</sup> <a name="DatabricksApiToken" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiToken"></a>

```go
DatabricksApiToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#databricks_api_token ModelServing#databricks_api_token}.

---

##### `DatabricksApiTokenPlaintext`<sup>Optional</sup> <a name="DatabricksApiTokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiTokenPlaintext"></a>

```go
DatabricksApiTokenPlaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#databricks_api_token_plaintext ModelServing#databricks_api_token_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig <a name="ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig {
	ProjectId: *string,
	Region: *string,
	PrivateKey: *string,
	PrivateKeyPlaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#project_id ModelServing#project_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#region ModelServing#region}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#private_key ModelServing#private_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKeyPlaintext">PrivateKeyPlaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#private_key_plaintext ModelServing#private_key_plaintext}. |

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#project_id ModelServing#project_id}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#region ModelServing#region}.

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#private_key ModelServing#private_key}.

---

##### `PrivateKeyPlaintext`<sup>Optional</sup> <a name="PrivateKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKeyPlaintext"></a>

```go
PrivateKeyPlaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#private_key_plaintext ModelServing#private_key_plaintext}.

---

### ModelServingConfigServedEntitiesExternalModelOpenaiConfig <a name="ModelServingConfigServedEntitiesExternalModelOpenaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedEntitiesExternalModelOpenaiConfig {
	MicrosoftEntraClientId: *string,
	MicrosoftEntraClientSecret: *string,
	MicrosoftEntraClientSecretPlaintext: *string,
	MicrosoftEntraTenantId: *string,
	OpenaiApiBase: *string,
	OpenaiApiKey: *string,
	OpenaiApiKeyPlaintext: *string,
	OpenaiApiType: *string,
	OpenaiApiVersion: *string,
	OpenaiDeploymentName: *string,
	OpenaiOrganization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientId">MicrosoftEntraClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#microsoft_entra_client_id ModelServing#microsoft_entra_client_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecret">MicrosoftEntraClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#microsoft_entra_client_secret ModelServing#microsoft_entra_client_secret}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecretPlaintext">MicrosoftEntraClientSecretPlaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#microsoft_entra_client_secret_plaintext ModelServing#microsoft_entra_client_secret_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraTenantId">MicrosoftEntraTenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#microsoft_entra_tenant_id ModelServing#microsoft_entra_tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiBase">OpenaiApiBase</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_api_base ModelServing#openai_api_base}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKey">OpenaiApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_api_key ModelServing#openai_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKeyPlaintext">OpenaiApiKeyPlaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_api_key_plaintext ModelServing#openai_api_key_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiType">OpenaiApiType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_api_type ModelServing#openai_api_type}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiVersion">OpenaiApiVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_api_version ModelServing#openai_api_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiDeploymentName">OpenaiDeploymentName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_deployment_name ModelServing#openai_deployment_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiOrganization">OpenaiOrganization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_organization ModelServing#openai_organization}. |

---

##### `MicrosoftEntraClientId`<sup>Optional</sup> <a name="MicrosoftEntraClientId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientId"></a>

```go
MicrosoftEntraClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#microsoft_entra_client_id ModelServing#microsoft_entra_client_id}.

---

##### `MicrosoftEntraClientSecret`<sup>Optional</sup> <a name="MicrosoftEntraClientSecret" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecret"></a>

```go
MicrosoftEntraClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#microsoft_entra_client_secret ModelServing#microsoft_entra_client_secret}.

---

##### `MicrosoftEntraClientSecretPlaintext`<sup>Optional</sup> <a name="MicrosoftEntraClientSecretPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecretPlaintext"></a>

```go
MicrosoftEntraClientSecretPlaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#microsoft_entra_client_secret_plaintext ModelServing#microsoft_entra_client_secret_plaintext}.

---

##### `MicrosoftEntraTenantId`<sup>Optional</sup> <a name="MicrosoftEntraTenantId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraTenantId"></a>

```go
MicrosoftEntraTenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#microsoft_entra_tenant_id ModelServing#microsoft_entra_tenant_id}.

---

##### `OpenaiApiBase`<sup>Optional</sup> <a name="OpenaiApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiBase"></a>

```go
OpenaiApiBase *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_api_base ModelServing#openai_api_base}.

---

##### `OpenaiApiKey`<sup>Optional</sup> <a name="OpenaiApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKey"></a>

```go
OpenaiApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_api_key ModelServing#openai_api_key}.

---

##### `OpenaiApiKeyPlaintext`<sup>Optional</sup> <a name="OpenaiApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKeyPlaintext"></a>

```go
OpenaiApiKeyPlaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_api_key_plaintext ModelServing#openai_api_key_plaintext}.

---

##### `OpenaiApiType`<sup>Optional</sup> <a name="OpenaiApiType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiType"></a>

```go
OpenaiApiType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_api_type ModelServing#openai_api_type}.

---

##### `OpenaiApiVersion`<sup>Optional</sup> <a name="OpenaiApiVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiVersion"></a>

```go
OpenaiApiVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_api_version ModelServing#openai_api_version}.

---

##### `OpenaiDeploymentName`<sup>Optional</sup> <a name="OpenaiDeploymentName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiDeploymentName"></a>

```go
OpenaiDeploymentName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_deployment_name ModelServing#openai_deployment_name}.

---

##### `OpenaiOrganization`<sup>Optional</sup> <a name="OpenaiOrganization" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig.property.openaiOrganization"></a>

```go
OpenaiOrganization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#openai_organization ModelServing#openai_organization}.

---

### ModelServingConfigServedEntitiesExternalModelPalmConfig <a name="ModelServingConfigServedEntitiesExternalModelPalmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedEntitiesExternalModelPalmConfig {
	PalmApiKey: *string,
	PalmApiKeyPlaintext: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.property.palmApiKey">PalmApiKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#palm_api_key ModelServing#palm_api_key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.property.palmApiKeyPlaintext">PalmApiKeyPlaintext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#palm_api_key_plaintext ModelServing#palm_api_key_plaintext}. |

---

##### `PalmApiKey`<sup>Optional</sup> <a name="PalmApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.property.palmApiKey"></a>

```go
PalmApiKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#palm_api_key ModelServing#palm_api_key}.

---

##### `PalmApiKeyPlaintext`<sup>Optional</sup> <a name="PalmApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig.property.palmApiKeyPlaintext"></a>

```go
PalmApiKeyPlaintext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#palm_api_key_plaintext ModelServing#palm_api_key_plaintext}.

---

### ModelServingConfigServedModels <a name="ModelServingConfigServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigServedModels {
	ModelName: *string,
	ModelVersion: *string,
	EnvironmentVars: *map[string]*string,
	InstanceProfileArn: *string,
	MaxProvisionedConcurrency: *f64,
	MaxProvisionedThroughput: *f64,
	MinProvisionedConcurrency: *f64,
	MinProvisionedThroughput: *f64,
	Name: *string,
	ProvisionedModelUnits: *f64,
	ScaleToZeroEnabled: interface{},
	WorkloadSize: *string,
	WorkloadType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelName">ModelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#model_name ModelServing#model_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelVersion">ModelVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#model_version ModelServing#model_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.environmentVars">EnvironmentVars</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.maxProvisionedConcurrency">MaxProvisionedConcurrency</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#max_provisioned_concurrency ModelServing#max_provisioned_concurrency}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.maxProvisionedThroughput">MaxProvisionedThroughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.minProvisionedConcurrency">MinProvisionedConcurrency</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#min_provisioned_concurrency ModelServing#min_provisioned_concurrency}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.minProvisionedThroughput">MinProvisionedThroughput</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.provisionedModelUnits">ProvisionedModelUnits</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#provisioned_model_units ModelServing#provisioned_model_units}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.scaleToZeroEnabled">ScaleToZeroEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadSize">WorkloadSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#workload_size ModelServing#workload_size}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadType">WorkloadType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#workload_type ModelServing#workload_type}. |

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelName"></a>

```go
ModelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#model_name ModelServing#model_name}.

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelVersion"></a>

```go
ModelVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#model_version ModelServing#model_version}.

---

##### `EnvironmentVars`<sup>Optional</sup> <a name="EnvironmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.environmentVars"></a>

```go
EnvironmentVars *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#environment_vars ModelServing#environment_vars}.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.instanceProfileArn"></a>

```go
InstanceProfileArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#instance_profile_arn ModelServing#instance_profile_arn}.

---

##### `MaxProvisionedConcurrency`<sup>Optional</sup> <a name="MaxProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.maxProvisionedConcurrency"></a>

```go
MaxProvisionedConcurrency *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#max_provisioned_concurrency ModelServing#max_provisioned_concurrency}.

---

##### `MaxProvisionedThroughput`<sup>Optional</sup> <a name="MaxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.maxProvisionedThroughput"></a>

```go
MaxProvisionedThroughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#max_provisioned_throughput ModelServing#max_provisioned_throughput}.

---

##### `MinProvisionedConcurrency`<sup>Optional</sup> <a name="MinProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.minProvisionedConcurrency"></a>

```go
MinProvisionedConcurrency *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#min_provisioned_concurrency ModelServing#min_provisioned_concurrency}.

---

##### `MinProvisionedThroughput`<sup>Optional</sup> <a name="MinProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.minProvisionedThroughput"></a>

```go
MinProvisionedThroughput *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#min_provisioned_throughput ModelServing#min_provisioned_throughput}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#name ModelServing#name}.

---

##### `ProvisionedModelUnits`<sup>Optional</sup> <a name="ProvisionedModelUnits" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.provisionedModelUnits"></a>

```go
ProvisionedModelUnits *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#provisioned_model_units ModelServing#provisioned_model_units}.

---

##### `ScaleToZeroEnabled`<sup>Optional</sup> <a name="ScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.scaleToZeroEnabled"></a>

```go
ScaleToZeroEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}.

---

##### `WorkloadSize`<sup>Optional</sup> <a name="WorkloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadSize"></a>

```go
WorkloadSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#workload_size ModelServing#workload_size}.

---

##### `WorkloadType`<sup>Optional</sup> <a name="WorkloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadType"></a>

```go
WorkloadType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#workload_type ModelServing#workload_type}.

---

### ModelServingConfigTrafficConfig <a name="ModelServingConfigTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigTrafficConfig {
	Routes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.property.routes">Routes</a></code> | <code>interface{}</code> | routes block. |

---

##### `Routes`<sup>Optional</sup> <a name="Routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.property.routes"></a>

```go
Routes interface{}
```

- *Type:* interface{}

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#routes ModelServing#routes}

---

### ModelServingConfigTrafficConfigRoutes <a name="ModelServingConfigTrafficConfigRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingConfigTrafficConfigRoutes {
	TrafficPercentage: *f64,
	ServedEntityName: *string,
	ServedModelName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.trafficPercentage">TrafficPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedEntityName">ServedEntityName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#served_entity_name ModelServing#served_entity_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedModelName">ServedModelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#served_model_name ModelServing#served_model_name}. |

---

##### `TrafficPercentage`<sup>Required</sup> <a name="TrafficPercentage" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.trafficPercentage"></a>

```go
TrafficPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}.

---

##### `ServedEntityName`<sup>Optional</sup> <a name="ServedEntityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedEntityName"></a>

```go
ServedEntityName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#served_entity_name ModelServing#served_entity_name}.

---

##### `ServedModelName`<sup>Optional</sup> <a name="ServedModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedModelName"></a>

```go
ServedModelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#served_model_name ModelServing#served_model_name}.

---

### ModelServingEmailNotifications <a name="ModelServingEmailNotifications" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotifications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingEmailNotifications {
	OnUpdateFailure: *[]*string,
	OnUpdateSuccess: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotifications.property.onUpdateFailure">OnUpdateFailure</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#on_update_failure ModelServing#on_update_failure}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotifications.property.onUpdateSuccess">OnUpdateSuccess</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#on_update_success ModelServing#on_update_success}. |

---

##### `OnUpdateFailure`<sup>Optional</sup> <a name="OnUpdateFailure" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotifications.property.onUpdateFailure"></a>

```go
OnUpdateFailure *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#on_update_failure ModelServing#on_update_failure}.

---

##### `OnUpdateSuccess`<sup>Optional</sup> <a name="OnUpdateSuccess" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotifications.property.onUpdateSuccess"></a>

```go
OnUpdateSuccess *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#on_update_success ModelServing#on_update_success}.

---

### ModelServingRateLimits <a name="ModelServingRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingRateLimits {
	Calls: *f64,
	RenewalPeriod: *string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.calls">Calls</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#calls ModelServing#calls}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.renewalPeriod">RenewalPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#key ModelServing#key}. |

---

##### `Calls`<sup>Required</sup> <a name="Calls" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.calls"></a>

```go
Calls *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#calls ModelServing#calls}.

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.renewalPeriod"></a>

```go
RenewalPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#renewal_period ModelServing#renewal_period}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimits.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#key ModelServing#key}.

---

### ModelServingTags <a name="ModelServingTags" id="@cdktf/provider-databricks.modelServing.ModelServingTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#key ModelServing#key}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#value ModelServing#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.modelServing.ModelServingTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#key ModelServing#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.modelServing.ModelServingTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#value ModelServing#value}.

---

### ModelServingTimeouts <a name="ModelServingTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

&modelserving.ModelServingTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#create ModelServing#create}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#update ModelServing#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#create ModelServing#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/model_serving#update ModelServing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelServingAiGatewayFallbackConfigOutputReference <a name="ModelServingAiGatewayFallbackConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingAiGatewayFallbackConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingAiGatewayFallbackConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingAiGatewayFallbackConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a>

---


### ModelServingAiGatewayGuardrailsInputOutputReference <a name="ModelServingAiGatewayGuardrailsInputOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingAiGatewayGuardrailsInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingAiGatewayGuardrailsInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.putPii">PutPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetInvalidKeywords">ResetInvalidKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetPii">ResetPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetSafety">ResetSafety</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetValidTopics">ResetValidTopics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPii` <a name="PutPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.putPii"></a>

```go
func PutPii(value ModelServingAiGatewayGuardrailsInputPii)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.putPii.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a>

---

##### `ResetInvalidKeywords` <a name="ResetInvalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetInvalidKeywords"></a>

```go
func ResetInvalidKeywords()
```

##### `ResetPii` <a name="ResetPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetPii"></a>

```go
func ResetPii()
```

##### `ResetSafety` <a name="ResetSafety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetSafety"></a>

```go
func ResetSafety()
```

##### `ResetValidTopics` <a name="ResetValidTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.resetValidTopics"></a>

```go
func ResetValidTopics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.pii">Pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference">ModelServingAiGatewayGuardrailsInputPiiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.invalidKeywordsInput">InvalidKeywordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.piiInput">PiiInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.safetyInput">SafetyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.validTopicsInput">ValidTopicsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.invalidKeywords">InvalidKeywords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.safety">Safety</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.validTopics">ValidTopics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Pii`<sup>Required</sup> <a name="Pii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.pii"></a>

```go
func Pii() ModelServingAiGatewayGuardrailsInputPiiOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference">ModelServingAiGatewayGuardrailsInputPiiOutputReference</a>

---

##### `InvalidKeywordsInput`<sup>Optional</sup> <a name="InvalidKeywordsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.invalidKeywordsInput"></a>

```go
func InvalidKeywordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PiiInput`<sup>Optional</sup> <a name="PiiInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.piiInput"></a>

```go
func PiiInput() ModelServingAiGatewayGuardrailsInputPii
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a>

---

##### `SafetyInput`<sup>Optional</sup> <a name="SafetyInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.safetyInput"></a>

```go
func SafetyInput() interface{}
```

- *Type:* interface{}

---

##### `ValidTopicsInput`<sup>Optional</sup> <a name="ValidTopicsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.validTopicsInput"></a>

```go
func ValidTopicsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InvalidKeywords`<sup>Required</sup> <a name="InvalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.invalidKeywords"></a>

```go
func InvalidKeywords() *[]*string
```

- *Type:* *[]*string

---

##### `Safety`<sup>Required</sup> <a name="Safety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.safety"></a>

```go
func Safety() interface{}
```

- *Type:* interface{}

---

##### `ValidTopics`<sup>Required</sup> <a name="ValidTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.validTopics"></a>

```go
func ValidTopics() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingAiGatewayGuardrailsInput
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a>

---


### ModelServingAiGatewayGuardrailsInputPiiOutputReference <a name="ModelServingAiGatewayGuardrailsInputPiiOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingAiGatewayGuardrailsInputPiiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingAiGatewayGuardrailsInputPiiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.resetBehavior">ResetBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBehavior` <a name="ResetBehavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.resetBehavior"></a>

```go
func ResetBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.behavior">Behavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.behaviorInput"></a>

```go
func BehaviorInput() *string
```

- *Type:* *string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.behavior"></a>

```go
func Behavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPiiOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingAiGatewayGuardrailsInputPii
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputPii">ModelServingAiGatewayGuardrailsInputPii</a>

---


### ModelServingAiGatewayGuardrailsOutputOutputReference <a name="ModelServingAiGatewayGuardrailsOutputOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingAiGatewayGuardrailsOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingAiGatewayGuardrailsOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.putPii">PutPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetInvalidKeywords">ResetInvalidKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetPii">ResetPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetSafety">ResetSafety</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetValidTopics">ResetValidTopics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPii` <a name="PutPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.putPii"></a>

```go
func PutPii(value ModelServingAiGatewayGuardrailsOutputPii)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.putPii.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a>

---

##### `ResetInvalidKeywords` <a name="ResetInvalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetInvalidKeywords"></a>

```go
func ResetInvalidKeywords()
```

##### `ResetPii` <a name="ResetPii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetPii"></a>

```go
func ResetPii()
```

##### `ResetSafety` <a name="ResetSafety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetSafety"></a>

```go
func ResetSafety()
```

##### `ResetValidTopics` <a name="ResetValidTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.resetValidTopics"></a>

```go
func ResetValidTopics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.pii">Pii</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference">ModelServingAiGatewayGuardrailsOutputPiiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.invalidKeywordsInput">InvalidKeywordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.piiInput">PiiInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.safetyInput">SafetyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.validTopicsInput">ValidTopicsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.invalidKeywords">InvalidKeywords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.safety">Safety</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.validTopics">ValidTopics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Pii`<sup>Required</sup> <a name="Pii" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.pii"></a>

```go
func Pii() ModelServingAiGatewayGuardrailsOutputPiiOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference">ModelServingAiGatewayGuardrailsOutputPiiOutputReference</a>

---

##### `InvalidKeywordsInput`<sup>Optional</sup> <a name="InvalidKeywordsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.invalidKeywordsInput"></a>

```go
func InvalidKeywordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PiiInput`<sup>Optional</sup> <a name="PiiInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.piiInput"></a>

```go
func PiiInput() ModelServingAiGatewayGuardrailsOutputPii
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a>

---

##### `SafetyInput`<sup>Optional</sup> <a name="SafetyInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.safetyInput"></a>

```go
func SafetyInput() interface{}
```

- *Type:* interface{}

---

##### `ValidTopicsInput`<sup>Optional</sup> <a name="ValidTopicsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.validTopicsInput"></a>

```go
func ValidTopicsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InvalidKeywords`<sup>Required</sup> <a name="InvalidKeywords" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.invalidKeywords"></a>

```go
func InvalidKeywords() *[]*string
```

- *Type:* *[]*string

---

##### `Safety`<sup>Required</sup> <a name="Safety" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.safety"></a>

```go
func Safety() interface{}
```

- *Type:* interface{}

---

##### `ValidTopics`<sup>Required</sup> <a name="ValidTopics" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.validTopics"></a>

```go
func ValidTopics() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingAiGatewayGuardrailsOutput
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a>

---


### ModelServingAiGatewayGuardrailsOutputPiiOutputReference <a name="ModelServingAiGatewayGuardrailsOutputPiiOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingAiGatewayGuardrailsOutputPiiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingAiGatewayGuardrailsOutputPiiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.resetBehavior">ResetBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBehavior` <a name="ResetBehavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.resetBehavior"></a>

```go
func ResetBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.behavior">Behavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.behaviorInput"></a>

```go
func BehaviorInput() *string
```

- *Type:* *string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.behavior"></a>

```go
func Behavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPiiOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingAiGatewayGuardrailsOutputPii
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputPii">ModelServingAiGatewayGuardrailsOutputPii</a>

---


### ModelServingAiGatewayGuardrailsOutputReference <a name="ModelServingAiGatewayGuardrailsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingAiGatewayGuardrailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingAiGatewayGuardrailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInput` <a name="PutInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putInput"></a>

```go
func PutInput(value ModelServingAiGatewayGuardrailsInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a>

---

##### `PutOutput` <a name="PutOutput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putOutput"></a>

```go
func PutOutput(value ModelServingAiGatewayGuardrailsOutput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a>

---

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resetInput"></a>

```go
func ResetInput()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.resetOutput"></a>

```go
func ResetOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.input">Input</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference">ModelServingAiGatewayGuardrailsInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.output">Output</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference">ModelServingAiGatewayGuardrailsOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.inputInput">InputInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.outputInput">OutputInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.input"></a>

```go
func Input() ModelServingAiGatewayGuardrailsInputOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInputOutputReference">ModelServingAiGatewayGuardrailsInputOutputReference</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.output"></a>

```go
func Output() ModelServingAiGatewayGuardrailsOutputOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputOutputReference">ModelServingAiGatewayGuardrailsOutputOutputReference</a>

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.inputInput"></a>

```go
func InputInput() ModelServingAiGatewayGuardrailsInput
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsInput">ModelServingAiGatewayGuardrailsInput</a>

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.outputInput"></a>

```go
func OutputInput() ModelServingAiGatewayGuardrailsOutput
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutput">ModelServingAiGatewayGuardrailsOutput</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingAiGatewayGuardrails
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a>

---


### ModelServingAiGatewayInferenceTableConfigOutputReference <a name="ModelServingAiGatewayInferenceTableConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingAiGatewayInferenceTableConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingAiGatewayInferenceTableConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetTableNamePrefix">ResetTableNamePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetTableNamePrefix` <a name="ResetTableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.resetTableNamePrefix"></a>

```go
func ResetTableNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefixInput"></a>

```go
func TableNamePrefixInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefix"></a>

```go
func TableNamePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingAiGatewayInferenceTableConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a>

---


### ModelServingAiGatewayOutputReference <a name="ModelServingAiGatewayOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingAiGatewayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingAiGatewayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putFallbackConfig">PutFallbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putGuardrails">PutGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putInferenceTableConfig">PutInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putRateLimits">PutRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putUsageTrackingConfig">PutUsageTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetFallbackConfig">ResetFallbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetGuardrails">ResetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetInferenceTableConfig">ResetInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetRateLimits">ResetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetUsageTrackingConfig">ResetUsageTrackingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFallbackConfig` <a name="PutFallbackConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putFallbackConfig"></a>

```go
func PutFallbackConfig(value ModelServingAiGatewayFallbackConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putFallbackConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a>

---

##### `PutGuardrails` <a name="PutGuardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putGuardrails"></a>

```go
func PutGuardrails(value ModelServingAiGatewayGuardrails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putGuardrails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a>

---

##### `PutInferenceTableConfig` <a name="PutInferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putInferenceTableConfig"></a>

```go
func PutInferenceTableConfig(value ModelServingAiGatewayInferenceTableConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putInferenceTableConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a>

---

##### `PutRateLimits` <a name="PutRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putRateLimits"></a>

```go
func PutRateLimits(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putRateLimits.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUsageTrackingConfig` <a name="PutUsageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putUsageTrackingConfig"></a>

```go
func PutUsageTrackingConfig(value ModelServingAiGatewayUsageTrackingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.putUsageTrackingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a>

---

##### `ResetFallbackConfig` <a name="ResetFallbackConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetFallbackConfig"></a>

```go
func ResetFallbackConfig()
```

##### `ResetGuardrails` <a name="ResetGuardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetGuardrails"></a>

```go
func ResetGuardrails()
```

##### `ResetInferenceTableConfig` <a name="ResetInferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetInferenceTableConfig"></a>

```go
func ResetInferenceTableConfig()
```

##### `ResetRateLimits` <a name="ResetRateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetRateLimits"></a>

```go
func ResetRateLimits()
```

##### `ResetUsageTrackingConfig` <a name="ResetUsageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.resetUsageTrackingConfig"></a>

```go
func ResetUsageTrackingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fallbackConfig">FallbackConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference">ModelServingAiGatewayFallbackConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.guardrails">Guardrails</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference">ModelServingAiGatewayGuardrailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.inferenceTableConfig">InferenceTableConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference">ModelServingAiGatewayInferenceTableConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.rateLimits">RateLimits</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList">ModelServingAiGatewayRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.usageTrackingConfig">UsageTrackingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference">ModelServingAiGatewayUsageTrackingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fallbackConfigInput">FallbackConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.guardrailsInput">GuardrailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.inferenceTableConfigInput">InferenceTableConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.rateLimitsInput">RateLimitsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.usageTrackingConfigInput">UsageTrackingConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FallbackConfig`<sup>Required</sup> <a name="FallbackConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fallbackConfig"></a>

```go
func FallbackConfig() ModelServingAiGatewayFallbackConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfigOutputReference">ModelServingAiGatewayFallbackConfigOutputReference</a>

---

##### `Guardrails`<sup>Required</sup> <a name="Guardrails" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.guardrails"></a>

```go
func Guardrails() ModelServingAiGatewayGuardrailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrailsOutputReference">ModelServingAiGatewayGuardrailsOutputReference</a>

---

##### `InferenceTableConfig`<sup>Required</sup> <a name="InferenceTableConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.inferenceTableConfig"></a>

```go
func InferenceTableConfig() ModelServingAiGatewayInferenceTableConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfigOutputReference">ModelServingAiGatewayInferenceTableConfigOutputReference</a>

---

##### `RateLimits`<sup>Required</sup> <a name="RateLimits" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.rateLimits"></a>

```go
func RateLimits() ModelServingAiGatewayRateLimitsList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList">ModelServingAiGatewayRateLimitsList</a>

---

##### `UsageTrackingConfig`<sup>Required</sup> <a name="UsageTrackingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.usageTrackingConfig"></a>

```go
func UsageTrackingConfig() ModelServingAiGatewayUsageTrackingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference">ModelServingAiGatewayUsageTrackingConfigOutputReference</a>

---

##### `FallbackConfigInput`<sup>Optional</sup> <a name="FallbackConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.fallbackConfigInput"></a>

```go
func FallbackConfigInput() ModelServingAiGatewayFallbackConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayFallbackConfig">ModelServingAiGatewayFallbackConfig</a>

---

##### `GuardrailsInput`<sup>Optional</sup> <a name="GuardrailsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.guardrailsInput"></a>

```go
func GuardrailsInput() ModelServingAiGatewayGuardrails
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayGuardrails">ModelServingAiGatewayGuardrails</a>

---

##### `InferenceTableConfigInput`<sup>Optional</sup> <a name="InferenceTableConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.inferenceTableConfigInput"></a>

```go
func InferenceTableConfigInput() ModelServingAiGatewayInferenceTableConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayInferenceTableConfig">ModelServingAiGatewayInferenceTableConfig</a>

---

##### `RateLimitsInput`<sup>Optional</sup> <a name="RateLimitsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.rateLimitsInput"></a>

```go
func RateLimitsInput() interface{}
```

- *Type:* interface{}

---

##### `UsageTrackingConfigInput`<sup>Optional</sup> <a name="UsageTrackingConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.usageTrackingConfigInput"></a>

```go
func UsageTrackingConfigInput() ModelServingAiGatewayUsageTrackingConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingAiGateway
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGateway">ModelServingAiGateway</a>

---


### ModelServingAiGatewayRateLimitsList <a name="ModelServingAiGatewayRateLimitsList" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingAiGatewayRateLimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ModelServingAiGatewayRateLimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.get"></a>

```go
func Get(index *f64) ModelServingAiGatewayRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingAiGatewayRateLimitsOutputReference <a name="ModelServingAiGatewayRateLimitsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingAiGatewayRateLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ModelServingAiGatewayRateLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetCalls">ResetCalls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetTokens">ResetTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCalls` <a name="ResetCalls" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetCalls"></a>

```go
func ResetCalls()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.resetTokens"></a>

```go
func ResetTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.callsInput">CallsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.renewalPeriodInput">RenewalPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.tokensInput">TokensInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.calls">Calls</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.renewalPeriod">RenewalPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.tokens">Tokens</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CallsInput`<sup>Optional</sup> <a name="CallsInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.callsInput"></a>

```go
func CallsInput() *f64
```

- *Type:* *f64

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `RenewalPeriodInput`<sup>Optional</sup> <a name="RenewalPeriodInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.renewalPeriodInput"></a>

```go
func RenewalPeriodInput() *string
```

- *Type:* *string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.tokensInput"></a>

```go
func TokensInput() *f64
```

- *Type:* *f64

---

##### `Calls`<sup>Required</sup> <a name="Calls" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.calls"></a>

```go
func Calls() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.renewalPeriod"></a>

```go
func RenewalPeriod() *string
```

- *Type:* *string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.tokens"></a>

```go
func Tokens() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayRateLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingAiGatewayUsageTrackingConfigOutputReference <a name="ModelServingAiGatewayUsageTrackingConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingAiGatewayUsageTrackingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingAiGatewayUsageTrackingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingAiGatewayUsageTrackingConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingAiGatewayUsageTrackingConfig">ModelServingAiGatewayUsageTrackingConfig</a>

---


### ModelServingConfigAOutputReference <a name="ModelServingConfigAOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putAutoCaptureConfig">PutAutoCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedEntities">PutServedEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels">PutServedModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig">PutTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetAutoCaptureConfig">ResetAutoCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedEntities">ResetServedEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedModels">ResetServedModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetTrafficConfig">ResetTrafficConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoCaptureConfig` <a name="PutAutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putAutoCaptureConfig"></a>

```go
func PutAutoCaptureConfig(value ModelServingConfigAutoCaptureConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putAutoCaptureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

---

##### `PutServedEntities` <a name="PutServedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedEntities"></a>

```go
func PutServedEntities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedEntities.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServedModels` <a name="PutServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels"></a>

```go
func PutServedModels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTrafficConfig` <a name="PutTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig"></a>

```go
func PutTrafficConfig(value ModelServingConfigTrafficConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---

##### `ResetAutoCaptureConfig` <a name="ResetAutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetAutoCaptureConfig"></a>

```go
func ResetAutoCaptureConfig()
```

##### `ResetServedEntities` <a name="ResetServedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedEntities"></a>

```go
func ResetServedEntities()
```

##### `ResetServedModels` <a name="ResetServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetServedModels"></a>

```go
func ResetServedModels()
```

##### `ResetTrafficConfig` <a name="ResetTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetTrafficConfig"></a>

```go
func ResetTrafficConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfig">AutoCaptureConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference">ModelServingConfigAutoCaptureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedEntities">ServedEntities</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList">ModelServingConfigServedEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModels">ServedModels</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList">ModelServingConfigServedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfig">TrafficConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference">ModelServingConfigTrafficConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfigInput">AutoCaptureConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedEntitiesInput">ServedEntitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModelsInput">ServedModelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfigInput">TrafficConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoCaptureConfig`<sup>Required</sup> <a name="AutoCaptureConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfig"></a>

```go
func AutoCaptureConfig() ModelServingConfigAutoCaptureConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference">ModelServingConfigAutoCaptureConfigOutputReference</a>

---

##### `ServedEntities`<sup>Required</sup> <a name="ServedEntities" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedEntities"></a>

```go
func ServedEntities() ModelServingConfigServedEntitiesList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList">ModelServingConfigServedEntitiesList</a>

---

##### `ServedModels`<sup>Required</sup> <a name="ServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModels"></a>

```go
func ServedModels() ModelServingConfigServedModelsList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList">ModelServingConfigServedModelsList</a>

---

##### `TrafficConfig`<sup>Required</sup> <a name="TrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfig"></a>

```go
func TrafficConfig() ModelServingConfigTrafficConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference">ModelServingConfigTrafficConfigOutputReference</a>

---

##### `AutoCaptureConfigInput`<sup>Optional</sup> <a name="AutoCaptureConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.autoCaptureConfigInput"></a>

```go
func AutoCaptureConfigInput() ModelServingConfigAutoCaptureConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

---

##### `ServedEntitiesInput`<sup>Optional</sup> <a name="ServedEntitiesInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedEntitiesInput"></a>

```go
func ServedEntitiesInput() interface{}
```

- *Type:* interface{}

---

##### `ServedModelsInput`<sup>Optional</sup> <a name="ServedModelsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModelsInput"></a>

```go
func ServedModelsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficConfigInput`<sup>Optional</sup> <a name="TrafficConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfigInput"></a>

```go
func TrafficConfigInput() ModelServingConfigTrafficConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---


### ModelServingConfigAutoCaptureConfigOutputReference <a name="ModelServingConfigAutoCaptureConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigAutoCaptureConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigAutoCaptureConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetTableNamePrefix">ResetTableNamePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetTableNamePrefix` <a name="ResetTableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.resetTableNamePrefix"></a>

```go
func ResetTableNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefixInput"></a>

```go
func TableNamePrefixInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.tableNamePrefix"></a>

```go
func TableNamePrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigAutoCaptureConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAutoCaptureConfig">ModelServingConfigAutoCaptureConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKey">ResetAi21LabsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKeyPlaintext">ResetAi21LabsApiKeyPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAi21LabsApiKey` <a name="ResetAi21LabsApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKey"></a>

```go
func ResetAi21LabsApiKey()
```

##### `ResetAi21LabsApiKeyPlaintext` <a name="ResetAi21LabsApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKeyPlaintext"></a>

```go
func ResetAi21LabsApiKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyInput">Ai21LabsApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintextInput">Ai21LabsApiKeyPlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKey">Ai21LabsApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintext">Ai21LabsApiKeyPlaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ai21LabsApiKeyInput`<sup>Optional</sup> <a name="Ai21LabsApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyInput"></a>

```go
func Ai21LabsApiKeyInput() *string
```

- *Type:* *string

---

##### `Ai21LabsApiKeyPlaintextInput`<sup>Optional</sup> <a name="Ai21LabsApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintextInput"></a>

```go
func Ai21LabsApiKeyPlaintextInput() *string
```

- *Type:* *string

---

##### `Ai21LabsApiKey`<sup>Required</sup> <a name="Ai21LabsApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKey"></a>

```go
func Ai21LabsApiKey() *string
```

- *Type:* *string

---

##### `Ai21LabsApiKeyPlaintext`<sup>Required</sup> <a name="Ai21LabsApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintext"></a>

```go
func Ai21LabsApiKeyPlaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigServedEntitiesExternalModelAi21LabsConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyId">ResetAwsAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyIdPlaintext">ResetAwsAccessKeyIdPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKey">ResetAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKeyPlaintext">ResetAwsSecretAccessKeyPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsAccessKeyId` <a name="ResetAwsAccessKeyId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyId"></a>

```go
func ResetAwsAccessKeyId()
```

##### `ResetAwsAccessKeyIdPlaintext` <a name="ResetAwsAccessKeyIdPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyIdPlaintext"></a>

```go
func ResetAwsAccessKeyIdPlaintext()
```

##### `ResetAwsSecretAccessKey` <a name="ResetAwsSecretAccessKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKey"></a>

```go
func ResetAwsSecretAccessKey()
```

##### `ResetAwsSecretAccessKeyPlaintext` <a name="ResetAwsSecretAccessKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKeyPlaintext"></a>

```go
func ResetAwsSecretAccessKeyPlaintext()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetInstanceProfileArn"></a>

```go
func ResetInstanceProfileArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdInput">AwsAccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintextInput">AwsAccessKeyIdPlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyInput">AwsSecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintextInput">AwsSecretAccessKeyPlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProviderInput">BedrockProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintext">AwsAccessKeyIdPlaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintext">AwsSecretAccessKeyPlaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProvider">BedrockProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccessKeyIdInput`<sup>Optional</sup> <a name="AwsAccessKeyIdInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdInput"></a>

```go
func AwsAccessKeyIdInput() *string
```

- *Type:* *string

---

##### `AwsAccessKeyIdPlaintextInput`<sup>Optional</sup> <a name="AwsAccessKeyIdPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintextInput"></a>

```go
func AwsAccessKeyIdPlaintextInput() *string
```

- *Type:* *string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegionInput"></a>

```go
func AwsRegionInput() *string
```

- *Type:* *string

---

##### `AwsSecretAccessKeyInput`<sup>Optional</sup> <a name="AwsSecretAccessKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyInput"></a>

```go
func AwsSecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `AwsSecretAccessKeyPlaintextInput`<sup>Optional</sup> <a name="AwsSecretAccessKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintextInput"></a>

```go
func AwsSecretAccessKeyPlaintextInput() *string
```

- *Type:* *string

---

##### `BedrockProviderInput`<sup>Optional</sup> <a name="BedrockProviderInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProviderInput"></a>

```go
func BedrockProviderInput() *string
```

- *Type:* *string

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.instanceProfileArnInput"></a>

```go
func InstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `AwsAccessKeyId`<sup>Required</sup> <a name="AwsAccessKeyId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyId"></a>

```go
func AwsAccessKeyId() *string
```

- *Type:* *string

---

##### `AwsAccessKeyIdPlaintext`<sup>Required</sup> <a name="AwsAccessKeyIdPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintext"></a>

```go
func AwsAccessKeyIdPlaintext() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `AwsSecretAccessKey`<sup>Required</sup> <a name="AwsSecretAccessKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKey"></a>

```go
func AwsSecretAccessKey() *string
```

- *Type:* *string

---

##### `AwsSecretAccessKeyPlaintext`<sup>Required</sup> <a name="AwsSecretAccessKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintext"></a>

```go
func AwsSecretAccessKeyPlaintext() *string
```

- *Type:* *string

---

##### `BedrockProvider`<sup>Required</sup> <a name="BedrockProvider" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProvider"></a>

```go
func BedrockProvider() *string
```

- *Type:* *string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.instanceProfileArn"></a>

```go
func InstanceProfileArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKey">ResetAnthropicApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKeyPlaintext">ResetAnthropicApiKeyPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnthropicApiKey` <a name="ResetAnthropicApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKey"></a>

```go
func ResetAnthropicApiKey()
```

##### `ResetAnthropicApiKeyPlaintext` <a name="ResetAnthropicApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKeyPlaintext"></a>

```go
func ResetAnthropicApiKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyInput">AnthropicApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintextInput">AnthropicApiKeyPlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKey">AnthropicApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintext">AnthropicApiKeyPlaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnthropicApiKeyInput`<sup>Optional</sup> <a name="AnthropicApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyInput"></a>

```go
func AnthropicApiKeyInput() *string
```

- *Type:* *string

---

##### `AnthropicApiKeyPlaintextInput`<sup>Optional</sup> <a name="AnthropicApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintextInput"></a>

```go
func AnthropicApiKeyPlaintextInput() *string
```

- *Type:* *string

---

##### `AnthropicApiKey`<sup>Required</sup> <a name="AnthropicApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKey"></a>

```go
func AnthropicApiKey() *string
```

- *Type:* *string

---

##### `AnthropicApiKeyPlaintext`<sup>Required</sup> <a name="AnthropicApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintext"></a>

```go
func AnthropicApiKeyPlaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigServedEntitiesExternalModelAnthropicConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiBase">ResetCohereApiBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKey">ResetCohereApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKeyPlaintext">ResetCohereApiKeyPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCohereApiBase` <a name="ResetCohereApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiBase"></a>

```go
func ResetCohereApiBase()
```

##### `ResetCohereApiKey` <a name="ResetCohereApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKey"></a>

```go
func ResetCohereApiKey()
```

##### `ResetCohereApiKeyPlaintext` <a name="ResetCohereApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKeyPlaintext"></a>

```go
func ResetCohereApiKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBaseInput">CohereApiBaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyInput">CohereApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintextInput">CohereApiKeyPlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBase">CohereApiBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKey">CohereApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintext">CohereApiKeyPlaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CohereApiBaseInput`<sup>Optional</sup> <a name="CohereApiBaseInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBaseInput"></a>

```go
func CohereApiBaseInput() *string
```

- *Type:* *string

---

##### `CohereApiKeyInput`<sup>Optional</sup> <a name="CohereApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyInput"></a>

```go
func CohereApiKeyInput() *string
```

- *Type:* *string

---

##### `CohereApiKeyPlaintextInput`<sup>Optional</sup> <a name="CohereApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintextInput"></a>

```go
func CohereApiKeyPlaintextInput() *string
```

- *Type:* *string

---

##### `CohereApiBase`<sup>Required</sup> <a name="CohereApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBase"></a>

```go
func CohereApiBase() *string
```

- *Type:* *string

---

##### `CohereApiKey`<sup>Required</sup> <a name="CohereApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKey"></a>

```go
func CohereApiKey() *string
```

- *Type:* *string

---

##### `CohereApiKeyPlaintext`<sup>Required</sup> <a name="CohereApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintext"></a>

```go
func CohereApiKeyPlaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigServedEntitiesExternalModelCohereConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference <a name="ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resetValuePlaintext">ResetValuePlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValuePlaintext` <a name="ResetValuePlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.resetValuePlaintext"></a>

```go
func ResetValuePlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.valuePlaintextInput">ValuePlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.valuePlaintext">ValuePlaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValuePlaintextInput`<sup>Optional</sup> <a name="ValuePlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.valuePlaintextInput"></a>

```go
func ValuePlaintextInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `ValuePlaintext`<sup>Required</sup> <a name="ValuePlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.valuePlaintext"></a>

```go
func ValuePlaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a>

---


### ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference <a name="ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resetTokenPlaintext">ResetTokenPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resetToken"></a>

```go
func ResetToken()
```

##### `ResetTokenPlaintext` <a name="ResetTokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.resetTokenPlaintext"></a>

```go
func ResetTokenPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.tokenPlaintextInput">TokenPlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.tokenPlaintext">TokenPlaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `TokenPlaintextInput`<sup>Optional</sup> <a name="TokenPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.tokenPlaintextInput"></a>

```go
func TokenPlaintextInput() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `TokenPlaintext`<sup>Required</sup> <a name="TokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.tokenPlaintext"></a>

```go
func TokenPlaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a>

---


### ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.putApiKeyAuth">PutApiKeyAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.putBearerTokenAuth">PutBearerTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resetApiKeyAuth">ResetApiKeyAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resetBearerTokenAuth">ResetBearerTokenAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyAuth` <a name="PutApiKeyAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.putApiKeyAuth"></a>

```go
func PutApiKeyAuth(value ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.putApiKeyAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a>

---

##### `PutBearerTokenAuth` <a name="PutBearerTokenAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.putBearerTokenAuth"></a>

```go
func PutBearerTokenAuth(value ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.putBearerTokenAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a>

---

##### `ResetApiKeyAuth` <a name="ResetApiKeyAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resetApiKeyAuth"></a>

```go
func ResetApiKeyAuth()
```

##### `ResetBearerTokenAuth` <a name="ResetBearerTokenAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.resetBearerTokenAuth"></a>

```go
func ResetBearerTokenAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.apiKeyAuth">ApiKeyAuth</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.bearerTokenAuth">BearerTokenAuth</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.apiKeyAuthInput">ApiKeyAuthInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.bearerTokenAuthInput">BearerTokenAuthInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.customProviderUrlInput">CustomProviderUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.customProviderUrl">CustomProviderUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyAuth`<sup>Required</sup> <a name="ApiKeyAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.apiKeyAuth"></a>

```go
func ApiKeyAuth() ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuthOutputReference</a>

---

##### `BearerTokenAuth`<sup>Required</sup> <a name="BearerTokenAuth" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.bearerTokenAuth"></a>

```go
func BearerTokenAuth() ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuthOutputReference</a>

---

##### `ApiKeyAuthInput`<sup>Optional</sup> <a name="ApiKeyAuthInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.apiKeyAuthInput"></a>

```go
func ApiKeyAuthInput() ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigApiKeyAuth</a>

---

##### `BearerTokenAuthInput`<sup>Optional</sup> <a name="BearerTokenAuthInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.bearerTokenAuthInput"></a>

```go
func BearerTokenAuthInput() ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigBearerTokenAuth</a>

---

##### `CustomProviderUrlInput`<sup>Optional</sup> <a name="CustomProviderUrlInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.customProviderUrlInput"></a>

```go
func CustomProviderUrlInput() *string
```

- *Type:* *string

---

##### `CustomProviderUrl`<sup>Required</sup> <a name="CustomProviderUrl" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.customProviderUrl"></a>

```go
func CustomProviderUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigServedEntitiesExternalModelCustomProviderConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiToken">ResetDatabricksApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiTokenPlaintext">ResetDatabricksApiTokenPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabricksApiToken` <a name="ResetDatabricksApiToken" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiToken"></a>

```go
func ResetDatabricksApiToken()
```

##### `ResetDatabricksApiTokenPlaintext` <a name="ResetDatabricksApiTokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiTokenPlaintext"></a>

```go
func ResetDatabricksApiTokenPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenInput">DatabricksApiTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintextInput">DatabricksApiTokenPlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrlInput">DatabricksWorkspaceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiToken">DatabricksApiToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintext">DatabricksApiTokenPlaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrl">DatabricksWorkspaceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabricksApiTokenInput`<sup>Optional</sup> <a name="DatabricksApiTokenInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenInput"></a>

```go
func DatabricksApiTokenInput() *string
```

- *Type:* *string

---

##### `DatabricksApiTokenPlaintextInput`<sup>Optional</sup> <a name="DatabricksApiTokenPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintextInput"></a>

```go
func DatabricksApiTokenPlaintextInput() *string
```

- *Type:* *string

---

##### `DatabricksWorkspaceUrlInput`<sup>Optional</sup> <a name="DatabricksWorkspaceUrlInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrlInput"></a>

```go
func DatabricksWorkspaceUrlInput() *string
```

- *Type:* *string

---

##### `DatabricksApiToken`<sup>Required</sup> <a name="DatabricksApiToken" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiToken"></a>

```go
func DatabricksApiToken() *string
```

- *Type:* *string

---

##### `DatabricksApiTokenPlaintext`<sup>Required</sup> <a name="DatabricksApiTokenPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintext"></a>

```go
func DatabricksApiTokenPlaintext() *string
```

- *Type:* *string

---

##### `DatabricksWorkspaceUrl`<sup>Required</sup> <a name="DatabricksWorkspaceUrl" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrl"></a>

```go
func DatabricksWorkspaceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKeyPlaintext">ResetPrivateKeyPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetPrivateKeyPlaintext` <a name="ResetPrivateKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKeyPlaintext"></a>

```go
func ResetPrivateKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintextInput">PrivateKeyPlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintext">PrivateKeyPlaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `PrivateKeyPlaintextInput`<sup>Optional</sup> <a name="PrivateKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintextInput"></a>

```go
func PrivateKeyPlaintextInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyPlaintext`<sup>Required</sup> <a name="PrivateKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintext"></a>

```go
func PrivateKeyPlaintext() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientId">ResetMicrosoftEntraClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecret">ResetMicrosoftEntraClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecretPlaintext">ResetMicrosoftEntraClientSecretPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraTenantId">ResetMicrosoftEntraTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiBase">ResetOpenaiApiBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKey">ResetOpenaiApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKeyPlaintext">ResetOpenaiApiKeyPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiType">ResetOpenaiApiType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiVersion">ResetOpenaiApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiDeploymentName">ResetOpenaiDeploymentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiOrganization">ResetOpenaiOrganization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMicrosoftEntraClientId` <a name="ResetMicrosoftEntraClientId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientId"></a>

```go
func ResetMicrosoftEntraClientId()
```

##### `ResetMicrosoftEntraClientSecret` <a name="ResetMicrosoftEntraClientSecret" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecret"></a>

```go
func ResetMicrosoftEntraClientSecret()
```

##### `ResetMicrosoftEntraClientSecretPlaintext` <a name="ResetMicrosoftEntraClientSecretPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecretPlaintext"></a>

```go
func ResetMicrosoftEntraClientSecretPlaintext()
```

##### `ResetMicrosoftEntraTenantId` <a name="ResetMicrosoftEntraTenantId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraTenantId"></a>

```go
func ResetMicrosoftEntraTenantId()
```

##### `ResetOpenaiApiBase` <a name="ResetOpenaiApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiBase"></a>

```go
func ResetOpenaiApiBase()
```

##### `ResetOpenaiApiKey` <a name="ResetOpenaiApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKey"></a>

```go
func ResetOpenaiApiKey()
```

##### `ResetOpenaiApiKeyPlaintext` <a name="ResetOpenaiApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKeyPlaintext"></a>

```go
func ResetOpenaiApiKeyPlaintext()
```

##### `ResetOpenaiApiType` <a name="ResetOpenaiApiType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiType"></a>

```go
func ResetOpenaiApiType()
```

##### `ResetOpenaiApiVersion` <a name="ResetOpenaiApiVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiVersion"></a>

```go
func ResetOpenaiApiVersion()
```

##### `ResetOpenaiDeploymentName` <a name="ResetOpenaiDeploymentName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiDeploymentName"></a>

```go
func ResetOpenaiDeploymentName()
```

##### `ResetOpenaiOrganization` <a name="ResetOpenaiOrganization" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiOrganization"></a>

```go
func ResetOpenaiOrganization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientIdInput">MicrosoftEntraClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretInput">MicrosoftEntraClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintextInput">MicrosoftEntraClientSecretPlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantIdInput">MicrosoftEntraTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBaseInput">OpenaiApiBaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyInput">OpenaiApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintextInput">OpenaiApiKeyPlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiTypeInput">OpenaiApiTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersionInput">OpenaiApiVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentNameInput">OpenaiDeploymentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganizationInput">OpenaiOrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientId">MicrosoftEntraClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecret">MicrosoftEntraClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintext">MicrosoftEntraClientSecretPlaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantId">MicrosoftEntraTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBase">OpenaiApiBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKey">OpenaiApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintext">OpenaiApiKeyPlaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiType">OpenaiApiType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersion">OpenaiApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentName">OpenaiDeploymentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganization">OpenaiOrganization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MicrosoftEntraClientIdInput`<sup>Optional</sup> <a name="MicrosoftEntraClientIdInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientIdInput"></a>

```go
func MicrosoftEntraClientIdInput() *string
```

- *Type:* *string

---

##### `MicrosoftEntraClientSecretInput`<sup>Optional</sup> <a name="MicrosoftEntraClientSecretInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretInput"></a>

```go
func MicrosoftEntraClientSecretInput() *string
```

- *Type:* *string

---

##### `MicrosoftEntraClientSecretPlaintextInput`<sup>Optional</sup> <a name="MicrosoftEntraClientSecretPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintextInput"></a>

```go
func MicrosoftEntraClientSecretPlaintextInput() *string
```

- *Type:* *string

---

##### `MicrosoftEntraTenantIdInput`<sup>Optional</sup> <a name="MicrosoftEntraTenantIdInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantIdInput"></a>

```go
func MicrosoftEntraTenantIdInput() *string
```

- *Type:* *string

---

##### `OpenaiApiBaseInput`<sup>Optional</sup> <a name="OpenaiApiBaseInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBaseInput"></a>

```go
func OpenaiApiBaseInput() *string
```

- *Type:* *string

---

##### `OpenaiApiKeyInput`<sup>Optional</sup> <a name="OpenaiApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyInput"></a>

```go
func OpenaiApiKeyInput() *string
```

- *Type:* *string

---

##### `OpenaiApiKeyPlaintextInput`<sup>Optional</sup> <a name="OpenaiApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintextInput"></a>

```go
func OpenaiApiKeyPlaintextInput() *string
```

- *Type:* *string

---

##### `OpenaiApiTypeInput`<sup>Optional</sup> <a name="OpenaiApiTypeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiTypeInput"></a>

```go
func OpenaiApiTypeInput() *string
```

- *Type:* *string

---

##### `OpenaiApiVersionInput`<sup>Optional</sup> <a name="OpenaiApiVersionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersionInput"></a>

```go
func OpenaiApiVersionInput() *string
```

- *Type:* *string

---

##### `OpenaiDeploymentNameInput`<sup>Optional</sup> <a name="OpenaiDeploymentNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentNameInput"></a>

```go
func OpenaiDeploymentNameInput() *string
```

- *Type:* *string

---

##### `OpenaiOrganizationInput`<sup>Optional</sup> <a name="OpenaiOrganizationInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganizationInput"></a>

```go
func OpenaiOrganizationInput() *string
```

- *Type:* *string

---

##### `MicrosoftEntraClientId`<sup>Required</sup> <a name="MicrosoftEntraClientId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientId"></a>

```go
func MicrosoftEntraClientId() *string
```

- *Type:* *string

---

##### `MicrosoftEntraClientSecret`<sup>Required</sup> <a name="MicrosoftEntraClientSecret" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecret"></a>

```go
func MicrosoftEntraClientSecret() *string
```

- *Type:* *string

---

##### `MicrosoftEntraClientSecretPlaintext`<sup>Required</sup> <a name="MicrosoftEntraClientSecretPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintext"></a>

```go
func MicrosoftEntraClientSecretPlaintext() *string
```

- *Type:* *string

---

##### `MicrosoftEntraTenantId`<sup>Required</sup> <a name="MicrosoftEntraTenantId" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantId"></a>

```go
func MicrosoftEntraTenantId() *string
```

- *Type:* *string

---

##### `OpenaiApiBase`<sup>Required</sup> <a name="OpenaiApiBase" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBase"></a>

```go
func OpenaiApiBase() *string
```

- *Type:* *string

---

##### `OpenaiApiKey`<sup>Required</sup> <a name="OpenaiApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKey"></a>

```go
func OpenaiApiKey() *string
```

- *Type:* *string

---

##### `OpenaiApiKeyPlaintext`<sup>Required</sup> <a name="OpenaiApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintext"></a>

```go
func OpenaiApiKeyPlaintext() *string
```

- *Type:* *string

---

##### `OpenaiApiType`<sup>Required</sup> <a name="OpenaiApiType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiType"></a>

```go
func OpenaiApiType() *string
```

- *Type:* *string

---

##### `OpenaiApiVersion`<sup>Required</sup> <a name="OpenaiApiVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersion"></a>

```go
func OpenaiApiVersion() *string
```

- *Type:* *string

---

##### `OpenaiDeploymentName`<sup>Required</sup> <a name="OpenaiDeploymentName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentName"></a>

```go
func OpenaiDeploymentName() *string
```

- *Type:* *string

---

##### `OpenaiOrganization`<sup>Required</sup> <a name="OpenaiOrganization" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganization"></a>

```go
func OpenaiOrganization() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigServedEntitiesExternalModelOpenaiConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a>

---


### ModelServingConfigServedEntitiesExternalModelOutputReference <a name="ModelServingConfigServedEntitiesExternalModelOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesExternalModelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigServedEntitiesExternalModelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAi21LabsConfig">PutAi21LabsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAmazonBedrockConfig">PutAmazonBedrockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAnthropicConfig">PutAnthropicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCohereConfig">PutCohereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCustomProviderConfig">PutCustomProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putDatabricksModelServingConfig">PutDatabricksModelServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putGoogleCloudVertexAiConfig">PutGoogleCloudVertexAiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putOpenaiConfig">PutOpenaiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putPalmConfig">PutPalmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAi21LabsConfig">ResetAi21LabsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAmazonBedrockConfig">ResetAmazonBedrockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAnthropicConfig">ResetAnthropicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetCohereConfig">ResetCohereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetCustomProviderConfig">ResetCustomProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetDatabricksModelServingConfig">ResetDatabricksModelServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetGoogleCloudVertexAiConfig">ResetGoogleCloudVertexAiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetOpenaiConfig">ResetOpenaiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetPalmConfig">ResetPalmConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAi21LabsConfig` <a name="PutAi21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAi21LabsConfig"></a>

```go
func PutAi21LabsConfig(value ModelServingConfigServedEntitiesExternalModelAi21LabsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAi21LabsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a>

---

##### `PutAmazonBedrockConfig` <a name="PutAmazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAmazonBedrockConfig"></a>

```go
func PutAmazonBedrockConfig(value ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAmazonBedrockConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a>

---

##### `PutAnthropicConfig` <a name="PutAnthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAnthropicConfig"></a>

```go
func PutAnthropicConfig(value ModelServingConfigServedEntitiesExternalModelAnthropicConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putAnthropicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a>

---

##### `PutCohereConfig` <a name="PutCohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCohereConfig"></a>

```go
func PutCohereConfig(value ModelServingConfigServedEntitiesExternalModelCohereConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCohereConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a>

---

##### `PutCustomProviderConfig` <a name="PutCustomProviderConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCustomProviderConfig"></a>

```go
func PutCustomProviderConfig(value ModelServingConfigServedEntitiesExternalModelCustomProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putCustomProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a>

---

##### `PutDatabricksModelServingConfig` <a name="PutDatabricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putDatabricksModelServingConfig"></a>

```go
func PutDatabricksModelServingConfig(value ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putDatabricksModelServingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a>

---

##### `PutGoogleCloudVertexAiConfig` <a name="PutGoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putGoogleCloudVertexAiConfig"></a>

```go
func PutGoogleCloudVertexAiConfig(value ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putGoogleCloudVertexAiConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a>

---

##### `PutOpenaiConfig` <a name="PutOpenaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putOpenaiConfig"></a>

```go
func PutOpenaiConfig(value ModelServingConfigServedEntitiesExternalModelOpenaiConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putOpenaiConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a>

---

##### `PutPalmConfig` <a name="PutPalmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putPalmConfig"></a>

```go
func PutPalmConfig(value ModelServingConfigServedEntitiesExternalModelPalmConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.putPalmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a>

---

##### `ResetAi21LabsConfig` <a name="ResetAi21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAi21LabsConfig"></a>

```go
func ResetAi21LabsConfig()
```

##### `ResetAmazonBedrockConfig` <a name="ResetAmazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAmazonBedrockConfig"></a>

```go
func ResetAmazonBedrockConfig()
```

##### `ResetAnthropicConfig` <a name="ResetAnthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetAnthropicConfig"></a>

```go
func ResetAnthropicConfig()
```

##### `ResetCohereConfig` <a name="ResetCohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetCohereConfig"></a>

```go
func ResetCohereConfig()
```

##### `ResetCustomProviderConfig` <a name="ResetCustomProviderConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetCustomProviderConfig"></a>

```go
func ResetCustomProviderConfig()
```

##### `ResetDatabricksModelServingConfig` <a name="ResetDatabricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetDatabricksModelServingConfig"></a>

```go
func ResetDatabricksModelServingConfig()
```

##### `ResetGoogleCloudVertexAiConfig` <a name="ResetGoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetGoogleCloudVertexAiConfig"></a>

```go
func ResetGoogleCloudVertexAiConfig()
```

##### `ResetOpenaiConfig` <a name="ResetOpenaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetOpenaiConfig"></a>

```go
func ResetOpenaiConfig()
```

##### `ResetPalmConfig` <a name="ResetPalmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.resetPalmConfig"></a>

```go
func ResetPalmConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfig">Ai21LabsConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfig">AmazonBedrockConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.anthropicConfig">AnthropicConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.cohereConfig">CohereConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference">ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.customProviderConfig">CustomProviderConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfig">DatabricksModelServingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfig">GoogleCloudVertexAiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.openaiConfig">OpenaiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference">ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.palmConfig">PalmConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference">ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfigInput">Ai21LabsConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfigInput">AmazonBedrockConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.anthropicConfigInput">AnthropicConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.cohereConfigInput">CohereConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.customProviderConfigInput">CustomProviderConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfigInput">DatabricksModelServingConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfigInput">GoogleCloudVertexAiConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.openaiConfigInput">OpenaiConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.palmConfigInput">PalmConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.providerInput">ProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.taskInput">TaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.provider">Provider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.task">Task</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ai21LabsConfig`<sup>Required</sup> <a name="Ai21LabsConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfig"></a>

```go
func Ai21LabsConfig() ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAi21LabsConfigOutputReference</a>

---

##### `AmazonBedrockConfig`<sup>Required</sup> <a name="AmazonBedrockConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfig"></a>

```go
func AmazonBedrockConfig() ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference</a>

---

##### `AnthropicConfig`<sup>Required</sup> <a name="AnthropicConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.anthropicConfig"></a>

```go
func AnthropicConfig() ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference">ModelServingConfigServedEntitiesExternalModelAnthropicConfigOutputReference</a>

---

##### `CohereConfig`<sup>Required</sup> <a name="CohereConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.cohereConfig"></a>

```go
func CohereConfig() ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference">ModelServingConfigServedEntitiesExternalModelCohereConfigOutputReference</a>

---

##### `CustomProviderConfig`<sup>Required</sup> <a name="CustomProviderConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.customProviderConfig"></a>

```go
func CustomProviderConfig() ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference">ModelServingConfigServedEntitiesExternalModelCustomProviderConfigOutputReference</a>

---

##### `DatabricksModelServingConfig`<sup>Required</sup> <a name="DatabricksModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfig"></a>

```go
func DatabricksModelServingConfig() ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference</a>

---

##### `GoogleCloudVertexAiConfig`<sup>Required</sup> <a name="GoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfig"></a>

```go
func GoogleCloudVertexAiConfig() ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference</a>

---

##### `OpenaiConfig`<sup>Required</sup> <a name="OpenaiConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.openaiConfig"></a>

```go
func OpenaiConfig() ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference">ModelServingConfigServedEntitiesExternalModelOpenaiConfigOutputReference</a>

---

##### `PalmConfig`<sup>Required</sup> <a name="PalmConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.palmConfig"></a>

```go
func PalmConfig() ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference">ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference</a>

---

##### `Ai21LabsConfigInput`<sup>Optional</sup> <a name="Ai21LabsConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfigInput"></a>

```go
func Ai21LabsConfigInput() ModelServingConfigServedEntitiesExternalModelAi21LabsConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAi21LabsConfig">ModelServingConfigServedEntitiesExternalModelAi21LabsConfig</a>

---

##### `AmazonBedrockConfigInput`<sup>Optional</sup> <a name="AmazonBedrockConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfigInput"></a>

```go
func AmazonBedrockConfigInput() ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig">ModelServingConfigServedEntitiesExternalModelAmazonBedrockConfig</a>

---

##### `AnthropicConfigInput`<sup>Optional</sup> <a name="AnthropicConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.anthropicConfigInput"></a>

```go
func AnthropicConfigInput() ModelServingConfigServedEntitiesExternalModelAnthropicConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelAnthropicConfig">ModelServingConfigServedEntitiesExternalModelAnthropicConfig</a>

---

##### `CohereConfigInput`<sup>Optional</sup> <a name="CohereConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.cohereConfigInput"></a>

```go
func CohereConfigInput() ModelServingConfigServedEntitiesExternalModelCohereConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCohereConfig">ModelServingConfigServedEntitiesExternalModelCohereConfig</a>

---

##### `CustomProviderConfigInput`<sup>Optional</sup> <a name="CustomProviderConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.customProviderConfigInput"></a>

```go
func CustomProviderConfigInput() ModelServingConfigServedEntitiesExternalModelCustomProviderConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelCustomProviderConfig">ModelServingConfigServedEntitiesExternalModelCustomProviderConfig</a>

---

##### `DatabricksModelServingConfigInput`<sup>Optional</sup> <a name="DatabricksModelServingConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfigInput"></a>

```go
func DatabricksModelServingConfigInput() ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig">ModelServingConfigServedEntitiesExternalModelDatabricksModelServingConfig</a>

---

##### `GoogleCloudVertexAiConfigInput`<sup>Optional</sup> <a name="GoogleCloudVertexAiConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfigInput"></a>

```go
func GoogleCloudVertexAiConfigInput() ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig">ModelServingConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpenaiConfigInput`<sup>Optional</sup> <a name="OpenaiConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.openaiConfigInput"></a>

```go
func OpenaiConfigInput() ModelServingConfigServedEntitiesExternalModelOpenaiConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOpenaiConfig">ModelServingConfigServedEntitiesExternalModelOpenaiConfig</a>

---

##### `PalmConfigInput`<sup>Optional</sup> <a name="PalmConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.palmConfigInput"></a>

```go
func PalmConfigInput() ModelServingConfigServedEntitiesExternalModelPalmConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a>

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.providerInput"></a>

```go
func ProviderInput() *string
```

- *Type:* *string

---

##### `TaskInput`<sup>Optional</sup> <a name="TaskInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.taskInput"></a>

```go
func TaskInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.provider"></a>

```go
func Provider() *string
```

- *Type:* *string

---

##### `Task`<sup>Required</sup> <a name="Task" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.task"></a>

```go
func Task() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigServedEntitiesExternalModel
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a>

---


### ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference <a name="ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKey">ResetPalmApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKeyPlaintext">ResetPalmApiKeyPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPalmApiKey` <a name="ResetPalmApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKey"></a>

```go
func ResetPalmApiKey()
```

##### `ResetPalmApiKeyPlaintext` <a name="ResetPalmApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKeyPlaintext"></a>

```go
func ResetPalmApiKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyInput">PalmApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintextInput">PalmApiKeyPlaintextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKey">PalmApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintext">PalmApiKeyPlaintext</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PalmApiKeyInput`<sup>Optional</sup> <a name="PalmApiKeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyInput"></a>

```go
func PalmApiKeyInput() *string
```

- *Type:* *string

---

##### `PalmApiKeyPlaintextInput`<sup>Optional</sup> <a name="PalmApiKeyPlaintextInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintextInput"></a>

```go
func PalmApiKeyPlaintextInput() *string
```

- *Type:* *string

---

##### `PalmApiKey`<sup>Required</sup> <a name="PalmApiKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKey"></a>

```go
func PalmApiKey() *string
```

- *Type:* *string

---

##### `PalmApiKeyPlaintext`<sup>Required</sup> <a name="PalmApiKeyPlaintext" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintext"></a>

```go
func PalmApiKeyPlaintext() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigServedEntitiesExternalModelPalmConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelPalmConfig">ModelServingConfigServedEntitiesExternalModelPalmConfig</a>

---


### ModelServingConfigServedEntitiesList <a name="ModelServingConfigServedEntitiesList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ModelServingConfigServedEntitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.get"></a>

```go
func Get(index *f64) ModelServingConfigServedEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingConfigServedEntitiesOutputReference <a name="ModelServingConfigServedEntitiesOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedEntitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ModelServingConfigServedEntitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.putExternalModel">PutExternalModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEntityName">ResetEntityName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEntityVersion">ResetEntityVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEnvironmentVars">ResetEnvironmentVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetExternalModel">ResetExternalModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMaxProvisionedConcurrency">ResetMaxProvisionedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMaxProvisionedThroughput">ResetMaxProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMinProvisionedConcurrency">ResetMinProvisionedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMinProvisionedThroughput">ResetMinProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetProvisionedModelUnits">ResetProvisionedModelUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetScaleToZeroEnabled">ResetScaleToZeroEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetWorkloadSize">ResetWorkloadSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetWorkloadType">ResetWorkloadType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalModel` <a name="PutExternalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.putExternalModel"></a>

```go
func PutExternalModel(value ModelServingConfigServedEntitiesExternalModel)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.putExternalModel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a>

---

##### `ResetEntityName` <a name="ResetEntityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEntityName"></a>

```go
func ResetEntityName()
```

##### `ResetEntityVersion` <a name="ResetEntityVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEntityVersion"></a>

```go
func ResetEntityVersion()
```

##### `ResetEnvironmentVars` <a name="ResetEnvironmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetEnvironmentVars"></a>

```go
func ResetEnvironmentVars()
```

##### `ResetExternalModel` <a name="ResetExternalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetExternalModel"></a>

```go
func ResetExternalModel()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetInstanceProfileArn"></a>

```go
func ResetInstanceProfileArn()
```

##### `ResetMaxProvisionedConcurrency` <a name="ResetMaxProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMaxProvisionedConcurrency"></a>

```go
func ResetMaxProvisionedConcurrency()
```

##### `ResetMaxProvisionedThroughput` <a name="ResetMaxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMaxProvisionedThroughput"></a>

```go
func ResetMaxProvisionedThroughput()
```

##### `ResetMinProvisionedConcurrency` <a name="ResetMinProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMinProvisionedConcurrency"></a>

```go
func ResetMinProvisionedConcurrency()
```

##### `ResetMinProvisionedThroughput` <a name="ResetMinProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetMinProvisionedThroughput"></a>

```go
func ResetMinProvisionedThroughput()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProvisionedModelUnits` <a name="ResetProvisionedModelUnits" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetProvisionedModelUnits"></a>

```go
func ResetProvisionedModelUnits()
```

##### `ResetScaleToZeroEnabled` <a name="ResetScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetScaleToZeroEnabled"></a>

```go
func ResetScaleToZeroEnabled()
```

##### `ResetWorkloadSize` <a name="ResetWorkloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetWorkloadSize"></a>

```go
func ResetWorkloadSize()
```

##### `ResetWorkloadType` <a name="ResetWorkloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.resetWorkloadType"></a>

```go
func ResetWorkloadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.externalModel">ExternalModel</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference">ModelServingConfigServedEntitiesExternalModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityNameInput">EntityNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityVersionInput">EntityVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.environmentVarsInput">EnvironmentVarsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.externalModelInput">ExternalModelInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedConcurrencyInput">MaxProvisionedConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedThroughputInput">MaxProvisionedThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedConcurrencyInput">MinProvisionedConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedThroughputInput">MinProvisionedThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.provisionedModelUnitsInput">ProvisionedModelUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.scaleToZeroEnabledInput">ScaleToZeroEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadSizeInput">WorkloadSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityName">EntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityVersion">EntityVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.environmentVars">EnvironmentVars</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedConcurrency">MaxProvisionedConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedThroughput">MaxProvisionedThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedConcurrency">MinProvisionedConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedThroughput">MinProvisionedThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.provisionedModelUnits">ProvisionedModelUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.scaleToZeroEnabled">ScaleToZeroEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadSize">WorkloadSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadType">WorkloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalModel`<sup>Required</sup> <a name="ExternalModel" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.externalModel"></a>

```go
func ExternalModel() ModelServingConfigServedEntitiesExternalModelOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModelOutputReference">ModelServingConfigServedEntitiesExternalModelOutputReference</a>

---

##### `EntityNameInput`<sup>Optional</sup> <a name="EntityNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityNameInput"></a>

```go
func EntityNameInput() *string
```

- *Type:* *string

---

##### `EntityVersionInput`<sup>Optional</sup> <a name="EntityVersionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityVersionInput"></a>

```go
func EntityVersionInput() *string
```

- *Type:* *string

---

##### `EnvironmentVarsInput`<sup>Optional</sup> <a name="EnvironmentVarsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.environmentVarsInput"></a>

```go
func EnvironmentVarsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ExternalModelInput`<sup>Optional</sup> <a name="ExternalModelInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.externalModelInput"></a>

```go
func ExternalModelInput() ModelServingConfigServedEntitiesExternalModel
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesExternalModel">ModelServingConfigServedEntitiesExternalModel</a>

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.instanceProfileArnInput"></a>

```go
func InstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `MaxProvisionedConcurrencyInput`<sup>Optional</sup> <a name="MaxProvisionedConcurrencyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedConcurrencyInput"></a>

```go
func MaxProvisionedConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `MaxProvisionedThroughputInput`<sup>Optional</sup> <a name="MaxProvisionedThroughputInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedThroughputInput"></a>

```go
func MaxProvisionedThroughputInput() *f64
```

- *Type:* *f64

---

##### `MinProvisionedConcurrencyInput`<sup>Optional</sup> <a name="MinProvisionedConcurrencyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedConcurrencyInput"></a>

```go
func MinProvisionedConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `MinProvisionedThroughputInput`<sup>Optional</sup> <a name="MinProvisionedThroughputInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedThroughputInput"></a>

```go
func MinProvisionedThroughputInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProvisionedModelUnitsInput`<sup>Optional</sup> <a name="ProvisionedModelUnitsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.provisionedModelUnitsInput"></a>

```go
func ProvisionedModelUnitsInput() *f64
```

- *Type:* *f64

---

##### `ScaleToZeroEnabledInput`<sup>Optional</sup> <a name="ScaleToZeroEnabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.scaleToZeroEnabledInput"></a>

```go
func ScaleToZeroEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WorkloadSizeInput`<sup>Optional</sup> <a name="WorkloadSizeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadSizeInput"></a>

```go
func WorkloadSizeInput() *string
```

- *Type:* *string

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadTypeInput"></a>

```go
func WorkloadTypeInput() *string
```

- *Type:* *string

---

##### `EntityName`<sup>Required</sup> <a name="EntityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityName"></a>

```go
func EntityName() *string
```

- *Type:* *string

---

##### `EntityVersion`<sup>Required</sup> <a name="EntityVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.entityVersion"></a>

```go
func EntityVersion() *string
```

- *Type:* *string

---

##### `EnvironmentVars`<sup>Required</sup> <a name="EnvironmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.environmentVars"></a>

```go
func EnvironmentVars() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.instanceProfileArn"></a>

```go
func InstanceProfileArn() *string
```

- *Type:* *string

---

##### `MaxProvisionedConcurrency`<sup>Required</sup> <a name="MaxProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedConcurrency"></a>

```go
func MaxProvisionedConcurrency() *f64
```

- *Type:* *f64

---

##### `MaxProvisionedThroughput`<sup>Required</sup> <a name="MaxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.maxProvisionedThroughput"></a>

```go
func MaxProvisionedThroughput() *f64
```

- *Type:* *f64

---

##### `MinProvisionedConcurrency`<sup>Required</sup> <a name="MinProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedConcurrency"></a>

```go
func MinProvisionedConcurrency() *f64
```

- *Type:* *f64

---

##### `MinProvisionedThroughput`<sup>Required</sup> <a name="MinProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.minProvisionedThroughput"></a>

```go
func MinProvisionedThroughput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProvisionedModelUnits`<sup>Required</sup> <a name="ProvisionedModelUnits" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.provisionedModelUnits"></a>

```go
func ProvisionedModelUnits() *f64
```

- *Type:* *f64

---

##### `ScaleToZeroEnabled`<sup>Required</sup> <a name="ScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.scaleToZeroEnabled"></a>

```go
func ScaleToZeroEnabled() interface{}
```

- *Type:* interface{}

---

##### `WorkloadSize`<sup>Required</sup> <a name="WorkloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadSize"></a>

```go
func WorkloadSize() *string
```

- *Type:* *string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.workloadType"></a>

```go
func WorkloadType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedEntitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingConfigServedModelsList <a name="ModelServingConfigServedModelsList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedModelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ModelServingConfigServedModelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get"></a>

```go
func Get(index *f64) ModelServingConfigServedModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingConfigServedModelsOutputReference <a name="ModelServingConfigServedModelsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigServedModelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ModelServingConfigServedModelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetEnvironmentVars">ResetEnvironmentVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMaxProvisionedConcurrency">ResetMaxProvisionedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMaxProvisionedThroughput">ResetMaxProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMinProvisionedConcurrency">ResetMinProvisionedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMinProvisionedThroughput">ResetMinProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetProvisionedModelUnits">ResetProvisionedModelUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetScaleToZeroEnabled">ResetScaleToZeroEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadSize">ResetWorkloadSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadType">ResetWorkloadType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironmentVars` <a name="ResetEnvironmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetEnvironmentVars"></a>

```go
func ResetEnvironmentVars()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetInstanceProfileArn"></a>

```go
func ResetInstanceProfileArn()
```

##### `ResetMaxProvisionedConcurrency` <a name="ResetMaxProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMaxProvisionedConcurrency"></a>

```go
func ResetMaxProvisionedConcurrency()
```

##### `ResetMaxProvisionedThroughput` <a name="ResetMaxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMaxProvisionedThroughput"></a>

```go
func ResetMaxProvisionedThroughput()
```

##### `ResetMinProvisionedConcurrency` <a name="ResetMinProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMinProvisionedConcurrency"></a>

```go
func ResetMinProvisionedConcurrency()
```

##### `ResetMinProvisionedThroughput` <a name="ResetMinProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetMinProvisionedThroughput"></a>

```go
func ResetMinProvisionedThroughput()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProvisionedModelUnits` <a name="ResetProvisionedModelUnits" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetProvisionedModelUnits"></a>

```go
func ResetProvisionedModelUnits()
```

##### `ResetScaleToZeroEnabled` <a name="ResetScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetScaleToZeroEnabled"></a>

```go
func ResetScaleToZeroEnabled()
```

##### `ResetWorkloadSize` <a name="ResetWorkloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadSize"></a>

```go
func ResetWorkloadSize()
```

##### `ResetWorkloadType` <a name="ResetWorkloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetWorkloadType"></a>

```go
func ResetWorkloadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVarsInput">EnvironmentVarsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedConcurrencyInput">MaxProvisionedConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedThroughputInput">MaxProvisionedThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedConcurrencyInput">MinProvisionedConcurrencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedThroughputInput">MinProvisionedThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersionInput">ModelVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.provisionedModelUnitsInput">ProvisionedModelUnitsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabledInput">ScaleToZeroEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSizeInput">WorkloadSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVars">EnvironmentVars</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedConcurrency">MaxProvisionedConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedThroughput">MaxProvisionedThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedConcurrency">MinProvisionedConcurrency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedThroughput">MinProvisionedThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersion">ModelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.provisionedModelUnits">ProvisionedModelUnits</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabled">ScaleToZeroEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSize">WorkloadSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadType">WorkloadType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnvironmentVarsInput`<sup>Optional</sup> <a name="EnvironmentVarsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVarsInput"></a>

```go
func EnvironmentVarsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArnInput"></a>

```go
func InstanceProfileArnInput() *string
```

- *Type:* *string

---

##### `MaxProvisionedConcurrencyInput`<sup>Optional</sup> <a name="MaxProvisionedConcurrencyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedConcurrencyInput"></a>

```go
func MaxProvisionedConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `MaxProvisionedThroughputInput`<sup>Optional</sup> <a name="MaxProvisionedThroughputInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedThroughputInput"></a>

```go
func MaxProvisionedThroughputInput() *f64
```

- *Type:* *f64

---

##### `MinProvisionedConcurrencyInput`<sup>Optional</sup> <a name="MinProvisionedConcurrencyInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedConcurrencyInput"></a>

```go
func MinProvisionedConcurrencyInput() *f64
```

- *Type:* *f64

---

##### `MinProvisionedThroughputInput`<sup>Optional</sup> <a name="MinProvisionedThroughputInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedThroughputInput"></a>

```go
func MinProvisionedThroughputInput() *f64
```

- *Type:* *f64

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelNameInput"></a>

```go
func ModelNameInput() *string
```

- *Type:* *string

---

##### `ModelVersionInput`<sup>Optional</sup> <a name="ModelVersionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersionInput"></a>

```go
func ModelVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProvisionedModelUnitsInput`<sup>Optional</sup> <a name="ProvisionedModelUnitsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.provisionedModelUnitsInput"></a>

```go
func ProvisionedModelUnitsInput() *f64
```

- *Type:* *f64

---

##### `ScaleToZeroEnabledInput`<sup>Optional</sup> <a name="ScaleToZeroEnabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabledInput"></a>

```go
func ScaleToZeroEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WorkloadSizeInput`<sup>Optional</sup> <a name="WorkloadSizeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSizeInput"></a>

```go
func WorkloadSizeInput() *string
```

- *Type:* *string

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadTypeInput"></a>

```go
func WorkloadTypeInput() *string
```

- *Type:* *string

---

##### `EnvironmentVars`<sup>Required</sup> <a name="EnvironmentVars" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.environmentVars"></a>

```go
func EnvironmentVars() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.instanceProfileArn"></a>

```go
func InstanceProfileArn() *string
```

- *Type:* *string

---

##### `MaxProvisionedConcurrency`<sup>Required</sup> <a name="MaxProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedConcurrency"></a>

```go
func MaxProvisionedConcurrency() *f64
```

- *Type:* *f64

---

##### `MaxProvisionedThroughput`<sup>Required</sup> <a name="MaxProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.maxProvisionedThroughput"></a>

```go
func MaxProvisionedThroughput() *f64
```

- *Type:* *f64

---

##### `MinProvisionedConcurrency`<sup>Required</sup> <a name="MinProvisionedConcurrency" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedConcurrency"></a>

```go
func MinProvisionedConcurrency() *f64
```

- *Type:* *f64

---

##### `MinProvisionedThroughput`<sup>Required</sup> <a name="MinProvisionedThroughput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.minProvisionedThroughput"></a>

```go
func MinProvisionedThroughput() *f64
```

- *Type:* *f64

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersion"></a>

```go
func ModelVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProvisionedModelUnits`<sup>Required</sup> <a name="ProvisionedModelUnits" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.provisionedModelUnits"></a>

```go
func ProvisionedModelUnits() *f64
```

- *Type:* *f64

---

##### `ScaleToZeroEnabled`<sup>Required</sup> <a name="ScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabled"></a>

```go
func ScaleToZeroEnabled() interface{}
```

- *Type:* interface{}

---

##### `WorkloadSize`<sup>Required</sup> <a name="WorkloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSize"></a>

```go
func WorkloadSize() *string
```

- *Type:* *string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadType"></a>

```go
func WorkloadType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingConfigTrafficConfigOutputReference <a name="ModelServingConfigTrafficConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigTrafficConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigTrafficConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes">PutRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resetRoutes">ResetRoutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRoutes` <a name="PutRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes"></a>

```go
func PutRoutes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRoutes` <a name="ResetRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resetRoutes"></a>

```go
func ResetRoutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routes">Routes</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList">ModelServingConfigTrafficConfigRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routesInput">RoutesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Routes`<sup>Required</sup> <a name="Routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routes"></a>

```go
func Routes() ModelServingConfigTrafficConfigRoutesList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList">ModelServingConfigTrafficConfigRoutesList</a>

---

##### `RoutesInput`<sup>Optional</sup> <a name="RoutesInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routesInput"></a>

```go
func RoutesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigTrafficConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---


### ModelServingConfigTrafficConfigRoutesList <a name="ModelServingConfigTrafficConfigRoutesList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigTrafficConfigRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ModelServingConfigTrafficConfigRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get"></a>

```go
func Get(index *f64) ModelServingConfigTrafficConfigRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingConfigTrafficConfigRoutesOutputReference <a name="ModelServingConfigTrafficConfigRoutesOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingConfigTrafficConfigRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ModelServingConfigTrafficConfigRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resetServedEntityName">ResetServedEntityName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resetServedModelName">ResetServedModelName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServedEntityName` <a name="ResetServedEntityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resetServedEntityName"></a>

```go
func ResetServedEntityName()
```

##### `ResetServedModelName` <a name="ResetServedModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resetServedModelName"></a>

```go
func ResetServedModelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedEntityNameInput">ServedEntityNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput">ServedModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput">TrafficPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedEntityName">ServedEntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelName">ServedModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentage">TrafficPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServedEntityNameInput`<sup>Optional</sup> <a name="ServedEntityNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedEntityNameInput"></a>

```go
func ServedEntityNameInput() *string
```

- *Type:* *string

---

##### `ServedModelNameInput`<sup>Optional</sup> <a name="ServedModelNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput"></a>

```go
func ServedModelNameInput() *string
```

- *Type:* *string

---

##### `TrafficPercentageInput`<sup>Optional</sup> <a name="TrafficPercentageInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput"></a>

```go
func TrafficPercentageInput() *f64
```

- *Type:* *f64

---

##### `ServedEntityName`<sup>Required</sup> <a name="ServedEntityName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedEntityName"></a>

```go
func ServedEntityName() *string
```

- *Type:* *string

---

##### `ServedModelName`<sup>Required</sup> <a name="ServedModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelName"></a>

```go
func ServedModelName() *string
```

- *Type:* *string

---

##### `TrafficPercentage`<sup>Required</sup> <a name="TrafficPercentage" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentage"></a>

```go
func TrafficPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingEmailNotificationsOutputReference <a name="ModelServingEmailNotificationsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingEmailNotificationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingEmailNotificationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.resetOnUpdateFailure">ResetOnUpdateFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.resetOnUpdateSuccess">ResetOnUpdateSuccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOnUpdateFailure` <a name="ResetOnUpdateFailure" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.resetOnUpdateFailure"></a>

```go
func ResetOnUpdateFailure()
```

##### `ResetOnUpdateSuccess` <a name="ResetOnUpdateSuccess" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.resetOnUpdateSuccess"></a>

```go
func ResetOnUpdateSuccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.onUpdateFailureInput">OnUpdateFailureInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.onUpdateSuccessInput">OnUpdateSuccessInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.onUpdateFailure">OnUpdateFailure</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.onUpdateSuccess">OnUpdateSuccess</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotifications">ModelServingEmailNotifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnUpdateFailureInput`<sup>Optional</sup> <a name="OnUpdateFailureInput" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.onUpdateFailureInput"></a>

```go
func OnUpdateFailureInput() *[]*string
```

- *Type:* *[]*string

---

##### `OnUpdateSuccessInput`<sup>Optional</sup> <a name="OnUpdateSuccessInput" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.onUpdateSuccessInput"></a>

```go
func OnUpdateSuccessInput() *[]*string
```

- *Type:* *[]*string

---

##### `OnUpdateFailure`<sup>Required</sup> <a name="OnUpdateFailure" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.onUpdateFailure"></a>

```go
func OnUpdateFailure() *[]*string
```

- *Type:* *[]*string

---

##### `OnUpdateSuccess`<sup>Required</sup> <a name="OnUpdateSuccess" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.onUpdateSuccess"></a>

```go
func OnUpdateSuccess() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingEmailNotificationsOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingEmailNotifications
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingEmailNotifications">ModelServingEmailNotifications</a>

---


### ModelServingRateLimitsList <a name="ModelServingRateLimitsList" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingRateLimitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ModelServingRateLimitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.get"></a>

```go
func Get(index *f64) ModelServingRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingRateLimitsOutputReference <a name="ModelServingRateLimitsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingRateLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ModelServingRateLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.resetKey"></a>

```go
func ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.callsInput">CallsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriodInput">RenewalPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.calls">Calls</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriod">RenewalPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CallsInput`<sup>Optional</sup> <a name="CallsInput" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.callsInput"></a>

```go
func CallsInput() *f64
```

- *Type:* *f64

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `RenewalPeriodInput`<sup>Optional</sup> <a name="RenewalPeriodInput" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriodInput"></a>

```go
func RenewalPeriodInput() *string
```

- *Type:* *string

---

##### `Calls`<sup>Required</sup> <a name="Calls" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.calls"></a>

```go
func Calls() *f64
```

- *Type:* *f64

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.renewalPeriod"></a>

```go
func RenewalPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingRateLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingTagsList <a name="ModelServingTagsList" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ModelServingTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.get"></a>

```go
func Get(index *f64) ModelServingTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingTagsOutputReference <a name="ModelServingTagsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ModelServingTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingTimeoutsOutputReference <a name="ModelServingTimeoutsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/modelserving"

modelserving.NewModelServingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



